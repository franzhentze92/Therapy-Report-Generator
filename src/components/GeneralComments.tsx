import React, { useState } from 'react';
import ReportSection from './ReportSection';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Info } from 'lucide-react';
import { Button } from './ui/button';

interface Nutrient {
  name: string;
  current: number;
  ideal: number;
  unit: string;
  status: 'low' | 'optimal' | 'high';
  range?: string; // Add this line to match backend structure
}

interface GeneralCommentsProps {
  nutrients: Nutrient[];
  somCecText: string;
  setSomCecText: (v: string) => void;
  baseSaturationText: string;
  setBaseSaturationText: (v: string) => void;
  phText: string;
  setPhText: (v: string) => void;
  availableNutrientsText: string;
  setAvailableNutrientsText: (v: string) => void;
  soilReservesText: string;
  setSoilReservesText: (v: string) => void;
  lamotteReamsText: string;
  setLamotteReamsText: (v: string) => void;
  taeText: string;
  setTaeText: (v: string) => void;
}

// Helper for status label
function StatusLabel({ status }: { status: 'low' | 'optimal' | 'high' }) {
  let color = 'bg-green-100 text-green-800 border-green-300';
  let text = 'Optimal';
  if (status === 'low') { color = 'bg-red-100 text-red-800 border-red-300'; text = 'Deficient'; }
  else if (status === 'high') { color = 'bg-blue-100 text-blue-800 border-blue-300'; text = 'Excessive'; }
  return <span className={`ml-2 px-2 py-0.5 rounded-full border text-xs font-semibold ${color}`}>{text}</span>;
}

// Helper to get nutrient status by name (case-insensitive, allow partial match)
function getStatus(nutrients: any[], name: string) {
  const found = nutrients.find(n => n.name.toLowerCase().includes(name.toLowerCase()));
  return found ? found.status : undefined;
}

// Comprehensive nutrient antagonism database based on Mulder's Chart
const NUTRIENT_ANTAGONISMS = {
  'Nitrogen': ['Potassium', 'Copper', 'Boron'],
  'Phosphorus': ['Zinc', 'Iron', 'Copper', 'Potassium', 'Calcium'],
  'Potassium': ['Magnesium', 'Calcium', 'Boron', 'Nitrogen', 'Phosphorus'],
  'Calcium': ['Magnesium', 'Potassium', 'Iron', 'Manganese', 'Zinc', 'Boron', 'Phosphorus'],
  'Magnesium': ['Calcium', 'Potassium'],
  'Zinc': ['Iron', 'Copper', 'Phosphorus'],
  'Copper': ['Nitrogen', 'Phosphorus', 'Manganese', 'Iron'],
  'Iron': ['Manganese', 'Zinc', 'Copper', 'Phosphorus', 'Calcium'],
  'Manganese': ['Iron', 'Copper', 'Calcium'],
  'Boron': ['Nitrogen', 'Potassium', 'Calcium']
};

// Helper function to get nutrient abbreviation
function getNutrientAbbrev(nutrientName: string): string {
  const abbrevMap: { [key: string]: string } = {
    'Nitrogen': 'N',
    'Phosphorus': 'P', 
    'Potassium': 'K',
    'Calcium': 'Ca',
    'Magnesium': 'Mg',
    'Sulphur': 'S',
    'Copper': 'Cu',
    'Zinc': 'Zn',
    'Iron': 'Fe',
    'Manganese': 'Mn',
    'Boron': 'B',
    'Molybdenum': 'Mo'
  };
  return abbrevMap[nutrientName] || nutrientName;
}

// Helper function to analyze nutrient antagonism
function analyzeNutrientAntagonism(nutrientsWithStatus: Nutrient[]) {
  const excessiveNutrients = [] as string[];
  const antagonismDetails = [] as string[];

  // Check for excessive nutrients that cause antagonism
  nutrientsWithStatus.forEach(nutrient => {
    if (nutrient.status === 'high') {
      const nutrientName = nutrient.name.split(' - ')[1] || nutrient.name;
      const antagonized = NUTRIENT_ANTAGONISMS[nutrientName];
      if (antagonized) {
        excessiveNutrients.push(nutrientName);
        const antagonizedFormatted = antagonized.map(n => `**${n} (${getNutrientAbbrev(n)})**`);
        antagonismDetails.push(`${nutrientName} (${getNutrientAbbrev(nutrientName)}) can shut down ${antagonizedFormatted.join(', ')}`);
      }
    }
  });

  return { excessiveNutrients, antagonismDetails };
}

const GeneralComments: React.FC<GeneralCommentsProps> = ({ nutrients, somCecText, setSomCecText, baseSaturationText, setBaseSaturationText, phText, setPhText, availableNutrientsText, setAvailableNutrientsText, soilReservesText, setSoilReservesText, lamotteReamsText, setLamotteReamsText, taeText, setTaeText }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerateAI() {
    setLoading(true);
    setError(null);
    
    // Calculate status for each nutrient based on current vs ideal range, and exclude those without a valid range
    const nutrientsWithStatus = nutrients
      .filter(n => n.range && /[\d.]+\s*-\s*[\d.]+/.test(n.range))
      .map(n => {
        let status: 'low' | 'optimal' | 'high' = 'optimal';
        // Parse min/max from range string
        const match = n.range.match(/([\d.]+)\s*-\s*([\d.]+)/);
        if (match) {
          const low = parseFloat(match[1]);
          const high = parseFloat(match[2]);
          if (n.current < low) status = 'low';
          else if (n.current > high) status = 'high';
        }
        return { ...n, status };
      });
    
    // Group nutrients by calculated status
    const deficient = nutrientsWithStatus.filter(n => n.status === 'low').map(n => n.name);
    const optimal = nutrientsWithStatus.filter(n => n.status === 'optimal').map(n => n.name);
    const excess = nutrientsWithStatus.filter(n => n.status === 'high').map(n => n.name);
    
    try {
      const res = await fetch('/generate-comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deficient, optimal, excess })
      });
      const data = await res.json();
      if (data.summary) {
        // Generate dynamic content based on nutrient analysis
        const bigFourNutrients = ['Ca - Calcium', 'Mg - Magnesium', 'P - Phosphorus', 'B - Boron'];
        const bigFourDeficient = bigFourNutrients.filter(nutrient => 
          nutrientsWithStatus.some(n => n.name.includes(nutrient.split(' - ')[1]) && n.status === 'low')
        );
        const bigFourDeficientCount = bigFourNutrients.filter(nutrient => 
          nutrientsWithStatus.some(n => n.name.includes(nutrient.split(' - ')[1]) && n.status === 'low')
        ).length;
        
        // Analyze nutrient antagonism
        const antagonism = analyzeNutrientAntagonism(nutrientsWithStatus);
        
        // Generate antagonism text
        let antagonismText = '';
        if (antagonism.excessiveNutrients.length > 0) {
          const excessiveNames = antagonism.excessiveNutrients.map(n => `**${n} (${getNutrientAbbrev(n)})**`);
          antagonismText = `Your excess of ${excessiveNames.join(', ')} can shut down several nutrients.\nYour nutrient antagonism is summarized as following:\n${antagonism.antagonismDetails.join('\n')}`;
        }
        
        // Combine AI summary with dynamic content
        const foliarNutrients = bigFourDeficient.map(n => {
          const fullName = n.split(' - ')[1];
          const abbrev = n.split(' - ')[0];
          return `**${fullName} (${abbrev})**`;
        });
        const foliarText = foliarNutrients.length === 1 
          ? `${foliarNutrients[0]} should be foliar sprayed`
          : `${foliarNutrients.slice(0, -1).join(', ')} and ${foliarNutrients[foliarNutrients.length - 1]} need to be foliar sprayed`;
        const dynamicContent = `\n\nWe have found that it is remarkably productive to try to maintain "luxury levels" of 4 minerals on a leaf test (The Big four). "Luxury", refers to the top end of the acceptable range. The Big Four include **Calcium (Ca)**, **Magnesium (Mg)**, **Phosphorus (P)**, and **Boron (B)**. Here, you are deficient in ${bigFourDeficientCount} of the nutrients of the big four. ${bigFourDeficientCount > 0 ? `In this case, ${foliarText} to bypass issues in the soil.` : ''}${antagonismText}`;
        const closingSentence = '\n\nBalanced nutrition is key to optimal plant health—addressing these nutrient imbalances will help your crop reach its full potential.';
        
        // Generate content for all 7 summaries based on actual nutrient data
        setSomCecText(data.summary + dynamicContent + closingSentence);
        
        // Generate Base Saturation summary
        const baseSaturationNutrients = nutrientsWithStatus.filter(n => 
          n.name.toLowerCase().includes('base saturation') || 
          n.name.toLowerCase().includes('calcium') || 
          n.name.toLowerCase().includes('magnesium') || 
          n.name.toLowerCase().includes('potassium') ||
          n.name.toLowerCase().includes('sodium')
        );
        const baseSaturationDeficient = baseSaturationNutrients.filter(n => n.status === 'low');
        const baseSaturationExcess = baseSaturationNutrients.filter(n => n.status === 'high');
        
        let baseSaturationSummary = 'Base saturation analysis reveals cation balance in the soil. ';
        if (baseSaturationDeficient.length > 0) {
          baseSaturationSummary += `Deficiencies detected in ${baseSaturationDeficient.map(n => n.name).join(', ')}. `;
        }
        if (baseSaturationExcess.length > 0) {
          baseSaturationSummary += `Excessive levels found in ${baseSaturationExcess.map(n => n.name).join(', ')}. `;
        }
        baseSaturationSummary += 'These values indicate the current cation exchange capacity and nutrient availability for plant uptake.';
        setBaseSaturationText(baseSaturationSummary);
        
        // Generate pH summary
        const phNutrients = nutrientsWithStatus.filter(n => 
          n.name.toLowerCase().includes('ph') || 
          n.name.toLowerCase().includes('hydrogen')
        );
        const phDeficient = phNutrients.filter(n => n.status === 'low');
        const phExcess = phNutrients.filter(n => n.status === 'high');
        
        let phSummary = 'Soil pH analysis indicates the acidity or alkalinity of the soil. ';
        if (phDeficient.length > 0) {
          phSummary += `Low pH detected in ${phDeficient.map(n => n.name).join(', ')}. `;
        }
        if (phExcess.length > 0) {
          phSummary += `High pH detected in ${phExcess.map(n => n.name).join(', ')}. `;
        }
        phSummary += 'This affects nutrient availability and microbial activity in the soil.';
        setPhText(phSummary);
        
        // Generate Available Nutrients summary
        const availableNutrients = nutrientsWithStatus.filter(n => 
          n.name.toLowerCase().includes('nitrogen') || 
          n.name.toLowerCase().includes('phosphorus') || 
          n.name.toLowerCase().includes('potassium') ||
          n.name.toLowerCase().includes('sulfur') ||
          n.name.toLowerCase().includes('zinc') ||
          n.name.toLowerCase().includes('iron') ||
          n.name.toLowerCase().includes('manganese') ||
          n.name.toLowerCase().includes('copper') ||
          n.name.toLowerCase().includes('boron')
        );
        const availableDeficient = availableNutrients.filter(n => n.status === 'low');
        const availableExcess = availableNutrients.filter(n => n.status === 'high');
        
        let availableSummary = 'Available nutrient analysis shows the current plant-available nutrient levels. ';
        if (availableDeficient.length > 0) {
          availableSummary += `Deficiencies detected in ${availableDeficient.map(n => n.name).join(', ')}. `;
        }
        if (availableExcess.length > 0) {
          availableSummary += `Excessive levels found in ${availableExcess.map(n => n.name).join(', ')}. `;
        }
        availableSummary += 'These concentrations reflect the current soil fertility status and plant-available nutrient pool.';
        setAvailableNutrientsText(availableSummary);
        
        // Generate Soil Reserves summary
        const reservesNutrients = nutrientsWithStatus.filter(n => 
          n.name.toLowerCase().includes('reserve') || 
          n.name.toLowerCase().includes('total') ||
          n.name.toLowerCase().includes('organic')
        );
        const reservesDeficient = reservesNutrients.filter(n => n.status === 'low');
        const reservesExcess = reservesNutrients.filter(n => n.status === 'high');
        
        let reservesSummary = 'Total soil reserves indicate the long-term nutrient supply capacity. ';
        if (reservesDeficient.length > 0) {
          reservesSummary += `Low reserves detected in ${reservesDeficient.map(n => n.name).join(', ')}. `;
        }
        if (reservesExcess.length > 0) {
          reservesSummary += `High reserves found in ${reservesExcess.map(n => n.name).join(', ')}. `;
        }
        reservesSummary += 'The clay fraction shows good mineral diversity, while organic reserves contribute to long-term nutrient cycling.';
        setSoilReservesText(reservesSummary);
        
        // Generate Lamotte Reams summary
        const lamotteNutrients = nutrientsWithStatus.filter(n => 
          n.name.toLowerCase().includes('lamotte') || 
          n.name.toLowerCase().includes('calcium') || 
          n.name.toLowerCase().includes('magnesium') || 
          n.name.toLowerCase().includes('phosphorus') || 
          n.name.toLowerCase().includes('potassium')
        );
        const lamotteDeficient = lamotteNutrients.filter(n => n.status === 'low');
        const lamotteExcess = lamotteNutrients.filter(n => n.status === 'high');
        
        let lamotteSummary = 'LaMotte/Reams analysis provides detailed insights into soil nutrient availability. ';
        if (lamotteDeficient.length > 0) {
          lamotteSummary += `Deficiencies detected in ${lamotteDeficient.map(n => n.name).join(', ')}. `;
        }
        if (lamotteExcess.length > 0) {
          lamotteSummary += `Excessive levels found in ${lamotteExcess.map(n => n.name).join(', ')}. `;
        }
        lamotteSummary += 'These values indicate the current availability of essential nutrients in the soil solution and their potential for plant uptake.';
        setLamotteReamsText(lamotteSummary);
        
        // Generate TAE summary
        const taeNutrients = nutrientsWithStatus.filter(n => 
          !n.name.toLowerCase().includes('lamotte') && 
          (n.name.toLowerCase().includes('trace') || 
           n.name.toLowerCase().includes('micronutrient') ||
           n.name.toLowerCase().includes('zinc') ||
           n.name.toLowerCase().includes('iron') ||
           n.name.toLowerCase().includes('manganese') ||
           n.name.toLowerCase().includes('copper') ||
           n.name.toLowerCase().includes('boron'))
        );
        const taeDeficient = taeNutrients.filter(n => n.status === 'low');
        const taeExcess = taeNutrients.filter(n => n.status === 'high');
        
        let taeSummary = 'Total Available Elements (TAE) analysis reveals the complete mineral profile including trace elements. ';
        if (taeDeficient.length > 0) {
          taeSummary += `Trace element deficiencies detected in ${taeDeficient.map(n => n.name).join(', ')}. `;
        }
        if (taeExcess.length > 0) {
          taeSummary += `Excessive trace elements found in ${taeExcess.map(n => n.name).join(', ')}. `;
        }
        taeSummary += 'This analysis provides a comprehensive view of all plant-available nutrients and their interactions.';
        setTaeText(taeSummary);
      } else {
        setError(data.error || 'Failed to generate summary.');
      }
    } catch (err: any) {
      setError('Error contacting AI service.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <ReportSection title="General Comments">
      <div className="space-y-4">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-black flex items-center gap-4">
              Enter the general comments here
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={somCecText}
              onChange={(e) => setSomCecText(e.target.value)}
              className="min-h-[100px] bg-white whitespace-pre-line"
            />
            <div className="mt-4 flex gap-2 items-center">
              <Button onClick={handleGenerateAI} disabled={loading} type="button">
                {loading ? 'Generating...' : 'Generate with AI'}
              </Button>
              {error && <span className="text-red-600 text-sm">{error}</span>}
            </div>
          </CardContent>
        </Card>
      </div>
    </ReportSection>
  );
};

export default GeneralComments;