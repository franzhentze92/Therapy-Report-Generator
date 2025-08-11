import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { PDFName, PDFArray, PDFString, PDFBool } from 'pdf-lib';
import { productList } from '../fertilizerProducts';

// Build PRODUCT_INFO from fertilizerProducts.ts data with proper URL mapping
const PRODUCT_INFO: Record<string, { url: string; description: string }> = Object.fromEntries(
  productList.map(product => {
    // Use the correct product URLs provided
    const productUrls = {
      "K‑Rich™": "https://nutri-tech.com.au/products/k-rich",
      "Cal‑Tech™": "https://nutri-tech.com.au/products/cal-tech",
      "Calcium Fulvate™": "https://nutri-tech.com.au/products/calcium-fulvate",
      "Citrus‑Tech Triple Ten™": "https://nutri-tech.com.au/products/citrus-tech-triple-ten",
      "Citrus-Tech Triple Ten™": "https://nutri-tech.com.au/products/citrus-tech-triple-ten",
      "Cal-Tech™": "https://nutri-tech.com.au/products/cal-tech",
      "Cloak Spray Oil™": "https://nutri-tech.com.au/products/cloak-spray-oil",
      "Nutri‑Carb‑N™": "https://nutri-tech.com.au/products/nutri-carb-n",
      "Nutri-Carb-N™": "https://nutri-tech.com.au/products/nutri-carb-n",
      "Phos‑Force™": "https://nutri-tech.com.au/products/phos-force",
      "Photo‑Finish™": "https://nutri-tech.com.au/products/photo-finish",
      "Potassium Silicate™": "https://nutri-tech.com.au/products/potassium-silicate",
      "Seed‑Start™": "https://nutri-tech.com.au/products/seed-start",
      "Trio (CMB)™": "https://nutri-tech.com.au/products/trio-cmb",
      "Triple Ten™": "https://nutri-tech.com.au/products/triple-ten",
      "Tsunami™ Super Spreader": "https://nutri-tech.com.au/products/tsunami-super-spreader",
      "Root & Shoot™": "https://nutri-tech.com.au/products/root-and-shoot",
      "Nutri‑Stim Triacontanol™": "https://nutri-tech.com.au/products/nutri-stim-triacontanol",
      "Nutri‑Tech Black Gold®": "https://nutri-tech.com.au/products/nutri-tech-black-gold",
      "Aloe‑Tech™": "https://nutri-tech.com.au/products/aloe-tech",
      "Amino‑Max™": "https://nutri-tech.com.au/products/amino-max",
      "Brix‑Fix™": "https://nutri-tech.com.au/products/brix-fix",
      "Nutri‑Kelp™": "https://nutri-tech.com.au/products/nutri-kelp",
      "Nutri‑Sea Liquid Fish™": "https://nutri-tech.com.au/products/nutri-sea-liquid-fish",
      "Boron Essentials™": "https://nutri-tech.com.au/products/boron-essentials",
      "Copper Essentials™": "https://nutri-tech.com.au/products/copper-essentials",
      "Iron Essentials™": "https://nutri-tech.com.au/products/iron-essentials",
      "Manganese Essentials™": "https://nutri-tech.com.au/products/manganese-essentials",
      "Multi‑Boost™": "https://nutri-tech.com.au/products/multi-boost",
      "Multi‑Min™": "https://nutri-tech.com.au/products/multi-min",
      "Multi-Min™": "https://nutri-tech.com.au/products/multi-min",
      "Multi‑Plex™": "https://nutri-tech.com.au/products/multi-plex",
      "SeaChange KFF™": "https://nutri-tech.com.au/products/seachange-kff",
      "SeaChange Liquid Kelp™": "https://nutri-tech.com.au/products/seachange-liquid-kelp",
      "Tri‑Kelp™": "https://nutri-tech.com.au/products/tri-kelp",
      "Nutri‑Key Boron Shuttle™": "https://nutri-tech.com.au/products/boron-shuttle",
      "Nutri‑Key Calcium Shuttle™": "https://nutri-tech.com.au/products/calcium-shuttle",
      "Nutri‑Key Cobalt Shuttle™": "https://nutri-tech.com.au/products/nutri-key-cobalt-shuttle",
      "Nutri‑Key Copper Shuttle™": "https://nutri-tech.com.au/products/copper-shuttle",
      "Nutri-Key Copper Shuttle™": "https://nutri-tech.com.au/products/copper-shuttle",
      "Nutri‑Key Hydro‑Shuttle™": "https://nutri-tech.com.au/products/hydro-shuttle",
      "Nutri‑Key Iron Shuttle™": "https://nutri-tech.com.au/products/iron-shuttle",
      "Nutri-Key Iron Shuttle™": "https://nutri-tech.com.au/products/iron-shuttle",
      "Nutri‑Key Magnesium Shuttle™": "https://nutri-tech.com.au/products/magnesium-shuttle",
      "Nutri-Key Magnesium Shuttle™": "https://nutri-tech.com.au/products/magnesium-shuttle",
      "Nutri‑Key Manganese Shuttle™": "https://nutri-tech.com.au/products/manganese-shuttle",
      "Nutri-Key Manganese Shuttle™": "https://nutri-tech.com.au/products/manganese-shuttle",
      "Nutri‑Key Moly Shuttle™": "https://nutri-tech.com.au/products/moly-shuttle",
      "Nutri-Key Moly Shuttle™": "https://nutri-tech.com.au/products/moly-shuttle",
      "Nutri‑Key Shuttle Seven™": "https://nutri-tech.com.au/products/shuttle-seven",
      "Nutri-Key Shuttle Seven™": "https://nutri-tech.com.au/products/shuttle-seven",
      "Nutri‑Key Zinc Shuttle™": "https://nutri-tech.com.au/products/zinc-shuttle",
      "Nutri-Key Zinc Shuttle™": "https://nutri-tech.com.au/products/zinc-shuttle",
      "Zinc Essentials™": "https://nutri-tech.com.au/products/zinc-essentials",
      "Nutri-Key Cobalt Shuttle™": "https://nutri-tech.com.au/products/nutri-key-cobalt-shuttle",
      "Nutri-Key Hydro-Shuttle™": "https://nutri-tech.com.au/products/hydro-shuttle",
      "CalMag‑Life Organic™": "https://nutri-tech.com.au/products/calmag-life-organic",
      "Dia‑Life Organic™": "https://nutri-tech.com.au/products/dia-life-organic",
      "Gyp‑Life Organic™": "https://nutri-tech.com.au/products/gyp-life-organic",
      "Lime‑Life Organic™": "https://nutri-tech.com.au/products/lime-life-organic",
      "Mag‑Life Organic™": "https://nutri-tech.com.au/products/mag-life-organic",
      "Phos‑Life Organic™": "https://nutri-tech.com.au/products/phos-life-organic",
      "Sili‑Cal (B)™": "https://nutri-tech.com.au/products/sili-cal-b",
      "Sili‑Cal™": "https://nutri-tech.com.au/products/sili-cal-b",
      "Nutri‑Life BAM": "https://nutri-tech.com.au/products/nutri-life-bam",
      "Nutri-Life BAM": "https://nutri-tech.com.au/products/nutri-life-bam",
      "Nutri‑Life Platform": "https://nutri-tech.com.au/products/nutri-life-platform",
      "Nutri-Life Platform": "https://nutri-tech.com.au/products/nutri-life-platform",
      "Activated Char Condensate (ACC)™": "https://nutri-tech.com.au/products/activated-char-condensate",
      "Nutri‑Stim Saponins™": "https://nutri-tech.com.au/products/nutri-stim-saponins"
    };
    
    const url = productUrls[product.label] || 'https://nutri-tech.com.au/';
    
    return [
      product.label,
      {
        url,
        description: product.description
      }
    ];
  })
);

// Add fallback for any missing product info
PRODUCT_INFO['[No Name]'] = {
  url: '',
  description: 'No product information available.'
};
// Section intro mapping
const SECTION_INTRO = {
  'Seed Treatment': 'Applied to seeds before planting to provide essential nutrients and beneficial biology for strong germination and early growth.',
  'Planting Blend': 'Mixed into the planting hole or applied at planting to establish healthy root development and soil biology.',
  'Soil Amendments': 'Applied to correct specific nutrient deficiencies identified in your soil analysis, targeting optimal levels for plant health.',
  'Main Soil Corrections': 'Applied to correct specific nutrient deficiencies identified in your soil analysis, targeting optimal levels for plant health.',
  'Biological Fertigation Program': 'Delivers beneficial biology and nutrients through fertigation to boost soil health and plant growth.',
  'Pre-Flowering Foliar Spray': 'Applied before flowering to supply key nutrients for strong flowering and fruit set.',
  'Nutritional Foliar Spray': 'Provides essential nutrients during growth to quickly correct deficiencies and support plant health.'
};

function drawPageNumber(page, pageIndex, totalPages, font) {
  const text = `Page ${pageIndex + 1} of ${totalPages}`;
  page.drawText(text, {
    x: 500,
    y: 20,
    size: 10,
    font,
    color: rgb(0.3, 0.3, 0.3),
  });
}

// BRUTE-FORCE SANITIZER: Guarantee readable summary
function sanitizeSummary(raw) {
  let text = String(raw || '');
  // Add space after punctuation if not present
  text = text.replace(/([.,;:!?])(?![ \n])/g, '$1 ');
  // Add space between lowercase/number and uppercase (e.g., optimal.Excess -> optimal. Excess)
  text = text.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  // Restore common scientific tokens that should not be split
  text = text.replace(/\bp\s*H\b/g, 'pH');
  // Restore brand/test names that should not be split
  text = text.replace(/\bLa\s*Motte\b/gi, 'LaMotte');
  // Replace all HTML tags with a space
  text = text.replace(/<[^>]+>/g, ' ');
  // Replace all runs of whitespace (including newlines, tabs) with a single space
  text = text.replace(/\s+/g, ' ');
  // Collapse multiple spaces
  text = text.replace(/ +/g, ' ');
  // Trim
  text = text.trim();
  // Break into lines of max 90 chars for PDF readability
  const lines = [];
  while (text.length > 0) {
    if (text.length <= 90) {
      lines.push(text);
      break;
    }
    let idx = text.lastIndexOf(' ', 90);
    if (idx === -1) idx = 90;
    lines.push(text.slice(0, idx));
    text = text.slice(idx).trim();
  }
  return lines;
}

// Improved: Render summary as real paragraphs with word wrapping and spacing
function wrapTextToWidth(text, font, fontSize, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  for (let i = 0; i < words.length; i++) {
    const testLine = line ? line + ' ' + words[i] : words[i];
    const testWidth = font.widthOfTextAtSize(testLine, fontSize);
    if (testWidth > maxWidth && line) {
      lines.push(line);
      line = words[i];
    } else {
      line = testLine;
    }
  }
  if (line) lines.push(line);
  return lines;
}

// Remove drawJustifiedLine and bold logic, restore simple paragraph rendering
function drawJustifiedLine(page, line, y, font, fontBold, fontSize, color, x, maxWidth, isLastLine) {
  // Split line into segments for bold (**...**)
  const parts = line.split(/(\*\*[^*]+\*\*)/g);
  // Count spaces for justification
  const plainLine = line.replace(/\*\*([^*]+)\*\*/g, '$1');
  const words = plainLine.split(' ');
  const numSpaces = words.length - 1;
  const lineWidth = font.widthOfTextAtSize(plainLine, fontSize);
  let extraSpace = (!isLastLine && numSpaces > 0) ? (maxWidth - lineWidth) / numSpaces : 0;
  let drawX = x;
  let wordIdx = 0;
  for (const part of parts) {
    if (part.startsWith('**') && part.endsWith('**')) {
      const text = part.slice(2, -2);
      page.drawText(text, { x: drawX, y, size: fontSize, font: fontBold, color });
      drawX += fontBold.widthOfTextAtSize(text, fontSize);
    } else {
      const partWords = part.split(' ');
      for (let i = 0; i < partWords.length; i++) {
        if (partWords[i]) {
          page.drawText(partWords[i], { x: drawX, y, size: fontSize, font, color });
          drawX += font.widthOfTextAtSize(partWords[i], fontSize);
          // Add extra space for justification (except after last word)
          if (!isLastLine && wordIdx < numSpaces) {
            drawX += extraSpace;
          } else if (i < partWords.length - 1) {
            drawX += font.widthOfTextAtSize(' ', fontSize);
          }
          wordIdx++;
        }
      }
    }
  }
}

function drawLineWithBold(page, line, y, font, fontBold, fontSize, color, x) {
  const parts = line.split(/(\*\*[^*]+\*\*)/g);
  let drawX = x;
  for (const part of parts) {
    if (part.startsWith('**') && part.endsWith('**')) {
      const text = part.slice(2, -2);
      page.drawText(text, { x: drawX, y, size: fontSize, font: fontBold, color });
      drawX += fontBold.widthOfTextAtSize(text, fontSize);
    } else {
      page.drawText(part, { x: drawX, y, size: fontSize, font, color });
      drawX += font.widthOfTextAtSize(part, fontSize);
    }
  }
}

function drawJustifiedLineWithBold(page, line, y, font, fontBold, fontSize, color, x, maxWidth, isLastLine) {
  // Split line into segments for bold (**...**)
  const parts = line.split(/(\*\*[^*]+\*\*)/g);
  // Count spaces for justification
  const plainLine = line.replace(/\*\*([^*]+)\*\*/g, '$1');
  const words = plainLine.split(' ');
  const numSpaces = words.length - 1;
  const lineWidth = font.widthOfTextAtSize(plainLine, fontSize);
  let extraSpace = (!isLastLine && numSpaces > 0) ? (maxWidth - lineWidth) / numSpaces : 0;
  let drawX = x;
  let wordIdx = 0;
  for (const part of parts) {
    if (part.startsWith('**') && part.endsWith('**')) {
      const text = part.slice(2, -2);
      const textWords = text.split(' ');
      for (let i = 0; i < textWords.length; i++) {
        if (textWords[i]) {
          page.drawText(textWords[i], { x: drawX, y, size: fontSize, font: fontBold, color });
          drawX += fontBold.widthOfTextAtSize(textWords[i], fontSize);
          if (!isLastLine && wordIdx < numSpaces) {
            drawX += extraSpace;
          } else if (i < textWords.length - 1) {
            drawX += fontBold.widthOfTextAtSize(' ', fontSize);
          }
          wordIdx++;
        }
      }
    } else {
      const partWords = part.split(' ');
      for (let i = 0; i < partWords.length; i++) {
        if (partWords[i]) {
          page.drawText(partWords[i], { x: drawX, y, size: fontSize, font, color });
          drawX += font.widthOfTextAtSize(partWords[i], fontSize);
          if (!isLastLine && wordIdx < numSpaces) {
            drawX += extraSpace;
          } else if (i < partWords.length - 1) {
            drawX += font.widthOfTextAtSize(' ', fontSize);
          }
          wordIdx++;
        }
      }
    }
  }
}

// Parse a paragraph into segments: [{text, bold}]
function parseBoldSegments(paragraph) {
  const regex = /(\*\*[^*]+\*\*)/g;
  const parts = paragraph.split(regex);
  return parts.map(part => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return { text: part.slice(2, -2), bold: true };
    } else {
      return { text: part, bold: false };
    }
  }).filter(seg => seg.text.length > 0);
}

// Word-wrap segments together, never splitting a segment
function wrapSegmentsToWidth(segments, font, fontBold, fontSize, maxWidth) {
  const lines = [];
  let currentLine = [];
  let currentWidth = 0;
  for (const seg of segments) {
    const segFont = seg.bold ? fontBold : font;
    const segWords = seg.text.split(' ');
    for (let i = 0; i < segWords.length; i++) {
      let word = segWords[i];
      if (word === '') continue;
      const wordWidth = segFont.widthOfTextAtSize(word, fontSize);
      const spaceWidth = currentLine.length > 0 ? font.widthOfTextAtSize(' ', fontSize) : 0;
      if (currentWidth + wordWidth + spaceWidth > maxWidth && currentLine.length > 0) {
        lines.push(currentLine);
        currentLine = [];
        currentWidth = 0;
      }
      if (currentLine.length > 0) {
        currentLine.push({ text: ' ', bold: false });
        currentWidth += spaceWidth;
      }
      currentLine.push({ text: word, bold: seg.bold });
      currentWidth += wordWidth;
    }
  }
  if (currentLine.length > 0) lines.push(currentLine);
  return lines;
}

// Normalize text for PDF rendering: convert all exotic spaces to regular spaces,
// and ensure a space follows punctuation when missing
function normalizePdfText(text) {
  if (!text) return '';
  return String(text)
    // Replace various unicode space characters with a regular space
    .replace(/[\u00A0\u202F\u2007\u2009\u200A\u200B\u2060\u2000-\u200A]+/g, ' ')
    // Ensure a space after punctuation if not present
    .replace(/([.,;:!?])(?![ \n])/g, '$1 ')
    // Ensure a space between lowercase/number/closing paren and a following Uppercase when stuck together (e.g., 'TheBig' -> 'The Big')
    .replace(/([a-z0-9\)])([A-Z])/g, '$1 $2')
    // Ensure a space before opening parenthesis when glued to a word (e.g., 'Calcium(Ca)' -> 'Calcium (Ca)')
    .replace(/([A-Za-z])(\()/g, '$1 $2')
    // Ensure a space after closing parenthesis when glued to a word (e.g., '(Ca)Magnesium' -> '(Ca) Magnesium')
    .replace(/(\))([A-Za-z])/g, '$1 $2')
    // Collapse multiple spaces
    .replace(/ {2,}/g, ' ')
    // Restore scientific tokens that should not be split
    .replace(/\bp\s*H\b/g, 'pH')
    // Restore brand/test names that should not be split
    .replace(/\bLa\s*Motte\b/gi, 'LaMotte');
}

// Emphasize nutrient and soil property terms by wrapping with **...** for bold in PDF
function emphasizeNutrientTerms(text: string): string {
  if (!text) return '';
  let result = String(text);

  // Canonical capitalization for nutrient/property names
  const canonical: Array<{ pattern: RegExp; to: string }> = [
    { pattern: /\bcalcium\b/gi, to: 'Calcium' },
    { pattern: /\bmagnesium\b/gi, to: 'Magnesium' },
    { pattern: /\bphosphorus\b/gi, to: 'Phosphorus' },
    { pattern: /\bpotassium\b/gi, to: 'Potassium' },
    { pattern: /\bsodium\b/gi, to: 'Sodium' },
    { pattern: /\b(?:sulphur|sulfur)\b/gi, to: 'Sulphur' },
    { pattern: /\bboron\b/gi, to: 'Boron' },
    { pattern: /\bcopper\b/gi, to: 'Copper' },
    { pattern: /\bzinc\b/gi, to: 'Zinc' },
    { pattern: /\biron\b/gi, to: 'Iron' },
    { pattern: /\bmanganese\b/gi, to: 'Manganese' },
    { pattern: /\bmolybdenum\b/gi, to: 'Molybdenum' },
    { pattern: /\bcobalt\b/gi, to: 'Cobalt' },
    { pattern: /\bsilicon\b/gi, to: 'Silicon' },
    { pattern: /\b(?:aluminium|aluminum)\b/gi, to: 'Aluminium' },
    { pattern: /\bnitrate-?n\b/gi, to: 'Nitrate-N' },
    { pattern: /\bammonium-?n\b/gi, to: 'Ammonium-N' },
    { pattern: /\borganic\s+matter\b/gi, to: 'Organic matter' },
    { pattern: /\bbase\s+saturation\b/gi, to: 'Base saturation' },
    { pattern: /\bcation\s+exchange\s+capacity\b/gi, to: 'Cation exchange capacity' },
    { pattern: /\bcec\b/gi, to: 'CEC' },
    { pattern: /\bla\s*motte\b/gi, to: 'LaMotte' },
  ];

  for (const { pattern, to } of canonical) {
    result = result.replace(pattern, to);
  }

  // Terms to bold (case-insensitive). Include both British and American spellings where applicable.
  const terms = [
    'Calcium', 'Magnesium', 'Phosphorus', 'Potassium', 'Sodium',
    'Sulphur', 'Sulfur', 'Boron', 'Copper', 'Zinc', 'Iron', 'Manganese',
    'Molybdenum', 'Cobalt', 'Silicon', 'Aluminium', 'Aluminum',
    'Nitrate-N', 'Ammonium-N',
    'Organic matter', 'Base saturation', 'CEC', 'Cation Exchange Capacity', 'pH'
  ];

  // Helper to avoid double-wrapping existing **bold**
  const wrapBold = (s: string, pattern: RegExp) => {
    return s.replace(pattern, (match: string, ...rest: any[]) => {
      const idx: number = rest[rest.length - 2];
      const full: string = rest[rest.length - 1];
      const before = full.slice(Math.max(0, idx - 2), idx);
      const after = full.slice(idx + match.length, idx + match.length + 2);
      if (before === '**' && after === '**') return match;
      return `**${match}**`;
    });
  };

  for (const t of terms) {
    if (t.toLowerCase() === 'ph') {
      // Special handling for pH (may appear as p H after normalization)
      result = wrapBold(result, /\bp\s*H\b/gi);
      continue;
    }
    const escaped = t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`\\b${escaped}\\b`, 'gi');
    result = wrapBold(result, pattern);
  }

  return result;
}

function drawJustifiedSegmentLine(page, lineSegs, y, font, fontBold, fontSize, color, x, maxWidth, isLastLine) {
  // Count spaces for justification
  const numSpaces = lineSegs.filter(seg => seg.text === ' ').length;
  const lineWidth = lineSegs.reduce((w, seg) => w + (seg.bold ? fontBold.widthOfTextAtSize(seg.text, fontSize) : font.widthOfTextAtSize(seg.text, fontSize)), 0);
  let extraSpace = (!isLastLine && numSpaces > 0) ? (maxWidth - lineWidth) / numSpaces : 0;
  let drawX = x;
  let spaceCount = 0;
  for (const seg of lineSegs) {
    const segFont = seg.bold ? fontBold : font;
    if (seg.text === ' ') {
      // Explicitly draw a space glyph to avoid words visually collapsing
      page.drawText(' ', { x: drawX, y, size: fontSize, font: font, color });
      let advance = font.widthOfTextAtSize(' ', fontSize);
      if (!isLastLine && spaceCount < numSpaces) {
        advance += extraSpace;
      }
      drawX += advance;
        spaceCount++;
    } else {
      page.drawText(seg.text, { x: drawX, y, size: fontSize, font: segFont, color });
      drawX += segFont.widthOfTextAtSize(seg.text, fontSize);
    }
  }
}

// Helper: word-wrap plain text to a given width
function wrapTextToWidthPlain(text, font, fontSize, maxWidth) {
  // Normalize spaces and ensure proper word separation
  const normalizedText = text.replace(/\s+/g, ' ').trim();
  const words = normalizedText.split(' ');
  const lines = [];
  let line = '';
  
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    // Skip empty words
    if (!word.trim()) continue;
    
    if (line) {
      const testLine = line + ' ' + word;
      const testWidth = font.widthOfTextAtSize(testLine, fontSize);
      if (testWidth > maxWidth) {
        lines.push(line);
        line = word;
      } else {
        line = testLine;
      }
    } else {
      line = word;
    }
    
    // If a single word is too long, break it with a hyphen
    while (font.widthOfTextAtSize(line, fontSize) > maxWidth) {
      // Only break if the line is a single word (no spaces)
      if (!line.includes(' ')) {
        let cut = line.length - 1;
        while (cut > 1 && font.widthOfTextAtSize(line.slice(0, cut) + '-', fontSize) > maxWidth) cut--;
        if (cut <= 1) break;
        lines.push(line.slice(0, cut) + '-');
        line = line.slice(cut);
      } else {
        break;
      }
    }
  }
  
  if (line) lines.push(line);
  return lines;
}

export async function generateCustomPDF(reportData: any, attachments?: { frontAttachments?: string[]; backAttachments?: string[]; uploadedFile?: File }) {
  
  // Support both single paddock object and array of paddocks
  const paddocks = Array.isArray(reportData) ? reportData : [reportData];
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const green = rgb(0.55, 0.71, 0.23); // #8cb43a
  const gray = rgb(0.5, 0.5, 0.5);
  const black = rgb(0, 0, 0);

  // --- Insert front attachments as pages ---
  if (attachments && attachments.frontAttachments && attachments.frontAttachments.length > 0) {
    for (const att of attachments.frontAttachments) {
      let url = '';
      if (att === 'plant-therapy-cover') url = '/attachments/plant-therapy-cover.pdf';
      if (att === 'soil-therapy-cover') url = '/attachments/soil-therapy-cover.pdf';
      // Add more mappings as needed
      if (url) {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            console.warn(`PDF file not found: ${url}`);
            continue;
          }
          const existingPdfBytes = await response.arrayBuffer();
          const existingPdf = await PDFDocument.load(existingPdfBytes);
          const copiedPages = await pdfDoc.copyPages(existingPdf, existingPdf.getPageIndices());
          copiedPages.forEach(page => pdfDoc.addPage(page));
        } catch (error) {
          console.warn(`Failed to load PDF: ${url}`, error);
          continue;
        }
      }
    }
  }

  // --- Insert uploaded plant analysis after front attachments ---
  if (attachments && attachments.uploadedFile) {
    const file = attachments.uploadedFile;
    const fileBytes = await new Promise<ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as ArrayBuffer);
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
    const uploadedPdf = await PDFDocument.load(fileBytes);
    const copiedPages = await pdfDoc.copyPages(uploadedPdf, uploadedPdf.getPageIndices());
    copiedPages.forEach(page => pdfDoc.addPage(page));
  }

  // Determine report type once based on the first paddock
  const firstPaddock = paddocks[0];
  const isPlantReport = firstPaddock.paddockName?.toLowerCase().includes('plant') || 
                       firstPaddock.paddockName?.toLowerCase().includes('leaf') ||
                       firstPaddock.paddockName?.toLowerCase().includes('treatment');
  const isSoilReport = firstPaddock.paddockName?.toLowerCase().includes('soil') || 
                      firstPaddock.paddockName?.toLowerCase().includes('analysis') ||
                      firstPaddock.summary?.toLowerCase().includes('soil') ||
                      firstPaddock.somCecText?.toLowerCase().includes('soil');
  
  // Default to Plant report if neither is explicitly detected
  const reportType = isSoilReport ? 'soil' : 'plant';
  
  for (let p = 0; p < paddocks.length; p++) {
    const data = paddocks[p];
    // --- Cover/Title & Summary Page ---
    const page1 = pdfDoc.addPage([595.28, 841.89]); // A4
    // Use consistent report type for all paddocks
    const reportTitle = reportType === 'plant' ? 'Plant Therapy™ Report' : 'Soil Therapy™ Report';
    page1.drawText(reportTitle, {
      x: 120,
      y: 780,
      size: 28,
      font: fontBold,
      color: green,
    });
    // Add a smaller spacer between the main title and paddock name
    let y = 780 - 40; // 40pt gap below the title (reduced from 60pt)
    const paddockName = data.paddockName || '';
    if (paddockName) {
      const paddockX = (595.28 - fontBold.widthOfTextAtSize(paddockName, 18)) / 2; // Center the paddock name
      page1.drawText(paddockName, { x: paddockX, y, size: 18, font: fontBold, color: black });
      y -= 15; // Reduced from 20pt
    }
    // Now render the summary content directly below, without repeating the paddock name
    // Summary box
    // Continue with summary rendering at y
    let sy = y - 15; // Reduced from 20pt
    // Calculate center position for summary content
    const summaryWidth = 520; // Use same width as other sections
    const summaryX = (595.28 - summaryWidth) / 2; // Center the summary content
    
    // Improved: Render summary as real paragraphs with word wrapping and spacing
    // Use consistent report type for content selection
    let rawSummary = '';
    
    if (reportType === 'plant') {
      // For Plant Therapy Report: ONLY generalComments (plant/leaf analysis)
      rawSummary = String(data.generalComments || data.summary || '');
    } else {
      // For Soil Therapy Report: ONLY soil analysis summaries
      // Prefer joined OM/CEC text, but fall back to separate fields if present
      if (data.somCecText) rawSummary += data.somCecText + '\n\n';
      else {
        const parts: string[] = [];
        if (data.organicMatterText) parts.push(String(data.organicMatterText));
        if (data.cecText) parts.push(String(data.cecText));
        if (parts.length) rawSummary += parts.join('\n\n') + '\n\n';
      }
      if (data.baseSaturationText) rawSummary += data.baseSaturationText + '\n\n';
      if (data.phText) rawSummary += data.phText + '\n\n';
      if (data.availableNutrientsText) rawSummary += data.availableNutrientsText + '\n\n';
      if (data.lamotteReamsText) rawSummary += data.lamotteReamsText + '\n\n';
      if (data.taeText) rawSummary += data.taeText + '\n\n';
    }
    
    // Fallback to legacy fields if no content found
    if (!rawSummary.trim()) {
      rawSummary = String(data.summary || data.somCecText || '');
    }
    rawSummary = rawSummary.replace(/<br\s*\/?>(?=\s|$)/gi, '\n').replace(/<p>/gi, '\n').replace(/<[^>]+>/g, '');
    rawSummary = normalizePdfText(rawSummary);
    // Apply nutrient emphasis before splitting into paragraphs
    rawSummary = emphasizeNutrientTerms(rawSummary);
    let summaryParagraphs = rawSummary.split(/\n\s*\n|\r\n\s*\r\n/).map(p => p.trim()).filter(Boolean);
    if (summaryParagraphs.length) {
      const aiFontSize = 9.5; // Use a single, consistent font size for AI comments (wrap + draw)
      let inAntagonism = false;
      let antagonismBuffer = '';
      for (let i = 0; i < summaryParagraphs.length; i++) {
        const rawPara = summaryParagraphs[i];
        let para = rawPara.replace(/\n/g, ' ');
        if (para.includes('Your nutrient antagonism is summarized as following:')) {
          inAntagonism = true;
          antagonismBuffer = '';
          // Draw up to the intro sentence (if there is preceding text, print it first)
          const [before, after] = para.split(/Your nutrient antagonism is summarized as following:/i);
          if (before && before.trim()) {
            const preSegments = parseBoldSegments(before.trim());
            const preLines = wrapSegmentsToWidth(preSegments, font, fontBold, aiFontSize, summaryWidth);
            for (let j = 0; j < preLines.length; j++) {
              const isLastLine = j === preLines.length - 1;
              drawJustifiedSegmentLine(page1, preLines[j], sy, font, fontBold, aiFontSize, black, summaryX, summaryWidth, isLastLine);
              sy -= 15;
            }
          }
          const introSegments = parseBoldSegments('Your nutrient antagonism is summarized as following:');
          const introLines = wrapSegmentsToWidth(introSegments, font, fontBold, aiFontSize, summaryWidth);
          for (let j = 0; j < introLines.length; j++) {
            const isLastLine = j === introLines.length - 1;
            drawJustifiedSegmentLine(page1, introLines[j], sy, font, fontBold, aiFontSize, black, summaryX, summaryWidth, isLastLine);
            sy -= 15;
          }
          // Immediately try to bulletize the remainder if present
          const remainder = (after || '').trim();
          if (remainder) {
            const patternInline = /[A-Za-z][A-Za-z\- ]+\([A-Za-z]{1,3}\)\s*can shut down[\s\S]*?(?=(?:\s*[A-Za-z][A-Za-z\- ]+\([A-Za-z]{1,3}\)\s*can shut down)|$)/gi;
            const items = (remainder.match(patternInline) || []).map(s => s.trim());
            if (items.length) {
              for (const bullet of items) {
                const bulletSegments = parseBoldSegments(bullet);
                const bulletLines = wrapSegmentsToWidth(bulletSegments, font, fontBold, aiFontSize, summaryWidth - 15);
                for (let j = 0; j < bulletLines.length; j++) {
                  let bulletX = summaryX + 15;
                  if (j === 0) {
                    page1.drawText('•', { x: summaryX, y: sy, size: 12, font: fontBold, color: black });
                  }
                  drawJustifiedSegmentLine(page1, bulletLines[j], sy, font, fontBold, aiFontSize, black, bulletX, summaryWidth - 15, true);
                  sy -= 15;
                }
                sy -= 4;
              }
              sy -= 12;
              inAntagonism = false;
              antagonismBuffer = '';
              continue;
            }
          }
          sy -= 12;
          continue;
        }
        if (inAntagonism) {
          // Prefer rendering explicit bullet lines if present in this paragraph
          const bulletLineCandidates = rawPara.split(/\n+/).map(t => t.trim()).filter(t => /can shut down/i.test(t));
          if (bulletLineCandidates.length > 0) {
            for (const bullet of bulletLineCandidates) {
              const bulletSegments = parseBoldSegments(bullet);
              const bulletLines = wrapSegmentsToWidth(bulletSegments, font, fontBold, aiFontSize, summaryWidth - 15);
              for (let j = 0; j < bulletLines.length; j++) {
                let bulletX = summaryX + 15;
                if (j === 0) {
                  page1.drawText('•', { x: summaryX, y: sy, size: 12, font: fontBold, color: black });
                }
                drawJustifiedSegmentLine(page1, bulletLines[j], sy, font, fontBold, aiFontSize, black, bulletX, summaryWidth - 15, true);
                sy -= 15;
              }
              sy -= 4;
            }
            inAntagonism = false;
            antagonismBuffer = '';
            sy -= 12; // space after bullet list
            continue;
          }
          // If antagonism content is in a single line without newlines or periods, split by repeated pattern "<Nutrient (...)> can shut down"
          const pattern = /[A-Z][A-Za-z\- ]+\([A-Za-z]{1,3}\)[^]*?can shut down[^]*?(?=(?:\s*[A-Z][A-Za-z\- ]+\([A-Za-z]{1,3}\)\s*can shut down)|$)/gi;
          const compactBullets = (rawPara.match(pattern) || []).map(s => s.trim());
          if (compactBullets.length > 0) {
            for (const bullet of compactBullets) {
              const bulletSegments = parseBoldSegments(bullet);
              const bulletLines = wrapSegmentsToWidth(bulletSegments, font, fontBold, aiFontSize, summaryWidth - 15);
              for (let j = 0; j < bulletLines.length; j++) {
                let bulletX = summaryX + 15;
                if (j === 0) {
                  page1.drawText('•', { x: summaryX, y: sy, size: 12, font: fontBold, color: black });
                }
                drawJustifiedSegmentLine(page1, bulletLines[j], sy, font, fontBold, aiFontSize, black, bulletX, summaryWidth - 15, true);
                sy -= 15;
              }
              sy -= 4;
            }
            inAntagonism = false;
            antagonismBuffer = '';
            sy -= 12;
            continue;
          }
          // Fallback: parse sentences containing "can shut down"
          if (/can shut down/i.test(para)) {
            antagonismBuffer += (antagonismBuffer ? ' ' : '') + para;
            if (i < summaryParagraphs.length - 1) continue;
          }
          const bulletPoints = [];
          const regex = /([^.]+?can shut down[^.]+)(?:\.|$)/gi;
          let match;
          while ((match = regex.exec(antagonismBuffer)) !== null) {
            bulletPoints.push(match[1].trim());
          }
          for (const bullet of bulletPoints) {
            const bulletSegments = parseBoldSegments(bullet);
          const bulletLines = wrapSegmentsToWidth(bulletSegments, font, fontBold, aiFontSize, summaryWidth - 13); // Use consistent size
            for (let j = 0; j < bulletLines.length; j++) {
              let bulletX = summaryX + 13; // Indent bullets
              if (j === 0) {
                page1.drawText('•', { x: summaryX, y: sy, size: 12, font: fontBold, color: black });
              }
             drawJustifiedSegmentLine(page1, bulletLines[j], sy, font, fontBold, aiFontSize, black, bulletX, summaryWidth - 13, true);
              sy -= 13;
            }
            sy -= 4;
          }
          inAntagonism = false;
          antagonismBuffer = '';
          sy -= 12; // Add extra space after bullet list
          continue;
        }
        const segments = parseBoldSegments(para);
        const lines = wrapSegmentsToWidth(segments, font, fontBold, aiFontSize, summaryWidth);
        for (let j = 0; j < lines.length; j++) {
          const isLastLine = j === lines.length - 1;
          drawJustifiedSegmentLine(page1, lines[j], sy, font, fontBold, aiFontSize, black, summaryX, summaryWidth, isLastLine);
          sy -= 15;
        }
        sy -= 12; // Add extra space after each paragraph
      }
      sy -= 24; // Extra spacer between AI comments and recommendations

      // --- Compact Recommendations (page 1) ---
      // Show on first page ONLY for Plant Therapy reports. Hide for Soil Therapy reports.
      if (reportType === 'plant') {
        let rec1Y = sy;
        const rec1Title = 'Recommendations';
        page1.drawText(rec1Title, {
          x: (595.28 - fontBold.widthOfTextAtSize(rec1Title, 12)) / 2,
          y: rec1Y,
          size: 13,
          font: fontBold,
          color: green,
        });
        rec1Y -= 18;
        // Spacer between title and first product section on page 1
        rec1Y -= 10;

        const drawCompactGroupPage1 = (groupTitle: string, items: any[]) => {
          if (!Array.isArray(items) || items.length === 0) return;
          // Group title
          page1.drawText(sanitizeTextForPDF(groupTitle), { x: summaryX, y: rec1Y, size: 11, font: fontBold, color: gray });
          rec1Y -= 14;

          // Instruction per group
          const instructionMap: Record<string, string> = {
            'Biological Fertigation Program': 'In a single biological fertigation program (drip irrigation) apply the following:',
            'Pre-Flowering Foliar Spray': 'In a single pre-flowering foliar spray apply the following:',
            'Nutritional Foliar Spray': 'In a single nutritional foliar spray apply the following:'
          };
          const instruction = instructionMap[groupTitle];
          if (instruction) {
            page1.drawText(sanitizeTextForPDF(instruction), { x: summaryX + 15, y: rec1Y, size: 10, font, color: gray });
            rec1Y -= 12;
          }

          for (const p of items) {
            let productName = '[No Name]';
            let rate = '';
            let unit = '';
            if (typeof p === 'string') {
              productName = p;
            } else if (p && typeof p === 'object') {
              if (p.fertilizer) {
                productName = p.fertilizer;
                rate = p.rate || '';
                unit = p.unit || '';
              } else {
                productName = p.name || p.product || p.label || '[No Name]';
                rate = p.rate || '';
                unit = p.unit || '';
              }
            }
            const line = `• ${sanitizeTextForPDF(productName)}${rate || unit ? ` at ${sanitizeTextForPDF(String(rate))} ${sanitizeTextForPDF(String(unit))}` : ''}`.trim();
            page1.drawText(line, { x: summaryX + 14, y: rec1Y, size: 10, font, color: black });
            rec1Y -= 14; // extra spacer between products
            if (rec1Y < 120) return;
          }
          rec1Y -= 10;
        };

        // Use available arrays from data in requested order (compact on page 1)
        drawCompactGroupPage1('Biological Fertigation Program', (data.fertigationProducts || data.soilDrenchProducts) || []);
        drawCompactGroupPage1('Pre-Flowering Foliar Spray', data.preFloweringFoliarProducts || []);
        drawCompactGroupPage1('Nutritional Foliar Spray', data.nutritionalFoliarProducts || []);
      }
      
      // Remove first-page recommendations per request
    } else {
      const noSummaryText = 'No summary available.';
      const noSummaryX = (595.28 - font.widthOfTextAtSize(noSummaryText, 10)) / 2; // Center the no summary text
      page1.drawText(noSummaryText, { x: noSummaryX, y: sy, size: 10, font, color: gray });
      sy -= 20;
    }
    // Remove product boxes from first page - only show comments/summary
    
    // Function to sanitize text for PDF encoding
    function sanitizeTextForPDF(text) {
      if (!text) return '';
      return text
        .replace(/₃/g, '3')  // Replace subscript 3 with regular 3
        .replace(/₂/g, '2')  // Replace subscript 2 with regular 2
        .replace(/₁/g, '1')  // Replace subscript 1 with regular 1
        .replace(/₀/g, '0')  // Replace subscript 0 with regular 0
        .replace(/³/g, '3')  // Replace superscript 3 with regular 3
        .replace(/²/g, '2')  // Replace superscript 2 with regular 2
        .replace(/¹/g, '1')  // Replace superscript 1 with regular 1
        .replace(/⁰/g, '0')  // Replace superscript 0 with regular 0
        .replace(/[^\x00-\x7F]/g, ''); // Remove any other non-ASCII characters
    }

    function drawProductBox(title, products, boxY) {
      const numProducts = Array.isArray(products) ? products.length : 0;
      if (numProducts === 0) return 0;
      const boxWidth = 520; // Use same width as other sections
      const boxX = (595.28 - boxWidth) / 2; // Center the product box
      const boxHeight = Math.max(45, numProducts * 18 + 14); // Compact height and spacing
      page2.drawRectangle({ x: boxX, y: boxY - boxHeight, width: boxWidth, height: boxHeight, color: rgb(1, 1, 1) });
      page2.drawText(sanitizeTextForPDF(title), { x: boxX + 10, y: boxY - 16, size: 10, font: fontBold, color: gray }); // Compact title spacing
      let py = boxY - 28; // Compact spacing after title
      for (const p of products) {
        // Handle different product data structures
        let productName = '[No Name]';
        if (typeof p === 'string') {
          productName = p;
        } else if (p && typeof p === 'object') {
          // Handle soil amendments structure (fertilizer field)
          if (p.fertilizer) {
            productName = p.fertilizer;
          } else {
            // Handle other product structures
            productName = p.name || p.product || '[No Name]';
          }
        }
        
        // Sanitize product name for PDF encoding
        const sanitizedProductName = sanitizeTextForPDF(productName);
        
        // Draw product name
        page2.drawText(`• ${sanitizedProductName}`, { x: boxX + 20, y: py, size: 11, font: fontBold, color: black });
        
        if (typeof p === 'object' && (p.rate || p.unit)) {
          const nameWidth = fontBold.widthOfTextAtSize(`• ${sanitizedProductName}`, 11);
          const rateText = sanitizeTextForPDF(`at ${p.rate || ''} ${p.unit || ''}`.trim());
          page2.drawText(rateText, { x: boxX + 20 + nameWidth + 10, y: py, size: 10, font, color: gray });
        }
        py -= 18; // Compact line spacing
      }
      return boxHeight;
    }
    
    // --- Recommendations & Table Page ---
    const page2 = pdfDoc.addPage([595.28, 841.89]);
    // Calculate center position for recommendations content
    const recContentWidth = 500; // Use same width as table
    const recContentX = (595.28 - recContentWidth) / 2; // Center the recommendations content
    
    let recY = 800; // Start at top of page
    recY -= 10; // Reduced space from top (from 20 to 10)

    // Removed compact Recommendations block on page 2 (kept only the detailed list below)

    // (No compact groups on page 2)

    // recY -= 15; // Reduced space before next section (from 20 to 15)

    // Removed the second-page recommendations heading and detailed list per request
    let recommendations = Array.isArray(data.recommendations) ? data.recommendations : [];
    if (!recommendations.length) {
      // Define fertilizer definitions with URLs for soil amendments
      const fertilizerDefs = [
        { label: 'Calcium Nitrate', nutrientContent: { Calcium: 19, Nitrate: 12 }, phLogic: { min_pH: null, max_pH: 7.5 }, releaseType: 'fast' },
        { label: 'Potassium Nitrate', nutrientContent: { Potassium: 44, Nitrate: 13 }, phLogic: { min_pH: null, max_pH: null }, releaseType: 'fast' },
        { label: 'Triple Superphosphate (TSP)', nutrientContent: { Phosphorus: 45, Calcium: 19 }, phLogic: { min_pH: 5.5, max_pH: 7.5 }, releaseType: 'fast' },
        { label: 'Agricultural Limestone (CaCO₃)', nutrientContent: { Calcium: 38 }, phLogic: { min_pH: null, max_pH: 6.5 }, releaseType: 'slow' },
        { label: 'Soft Rock Phosphate', nutrientContent: { Phosphorus: 14, Calcium: 20 }, phLogic: { min_pH: null, max_pH: 6.5 }, releaseType: 'slow', url: 'https://nutri-tech.com.au/collections/composted-fertilisers/products/nts-soft-rock' },
        { label: 'Bone Meal', nutrientContent: { Calcium: 26, Phosphorus: 14 }, phLogic: { min_pH: null, max_pH: 7.0 }, releaseType: 'slow' },
        { label: 'Potassium Carbonate', nutrientContent: { Potassium: 55 }, phLogic: { min_pH: 5.5, max_pH: 7.5 }, releaseType: 'fast' },
        { label: 'Elemental Sulfur', nutrientContent: { Sulphur: 90 }, phLogic: { min_pH: null, max_pH: null }, releaseType: 'very slow' },
        // Add more fertilizers as needed
      ];

      const addProducts = (products, label) => {
        if (Array.isArray(products) && products.length > 0) {
          for (const p of products) {
            let groupLabel = label;
            if (label === 'Fertigation') groupLabel = 'Biological Fertigation Program';
            if (label === 'Pre-Flowering Foliar') groupLabel = 'Pre-Flowering Foliar Spray';
            if (label === 'Nutritional Foliar') groupLabel = 'Nutritional Foliar Spray';
            if (label === 'Seed Treatment') groupLabel = 'Seed Treatment';
            if (label === 'Planting Blend') groupLabel = 'Planting Blend';
            if (label === 'Soil Amendments') groupLabel = 'Soil Amendments';
            if (label === 'Main Soil Corrections') groupLabel = 'Main Soil Corrections';
            if (label === 'Soil Corrections') groupLabel = 'Soil Corrections';
            
            // Handle different product data structures
            let productName = '[No Name]';
            let productRate = '';
            let productUnit = '';
            let productDescription = '';
            let productUrl = '';
            
            if (typeof p === 'string') {
              productName = p;
            } else if (p && typeof p === 'object') {
              // Handle soil amendments structure (fertilizer field)
              if (p.fertilizer) {
                productName = p.fertilizer;
                productRate = p.rate || '';
                productUnit = p.unit || '';
                productDescription = p.description || '';
                // Look up URL from fertilizer definitions
                const fertDef = fertilizerDefs.find(f => f.label === p.fertilizer);
                productUrl = fertDef?.url || '';
              } else {
                // Handle other product structures
                productName = p.name || p.product || p.label || '[No Name]';
                productRate = p.rate || '';
                productUnit = p.unit || '';
                productDescription = p.description || '';
              }
            }

            
            recommendations.push({
              name: productName,
              group: groupLabel,
              rate: productRate,
              unit: productUnit,
              description: productDescription,
              url: productUrl,
            });
          }
        }
      };
      
      // Add all product sections in the correct order
      // Debug logging for soil amendments structure
      console.log('🔍 PDF DEBUG: data.soilAmendments structure:', JSON.stringify(data.soilAmendments, null, 2));
      if (Array.isArray(data.soilAmendments)) {
        data.soilAmendments.forEach((item, index) => {
          console.log(`🔍 PDF DEBUG: Soil amendment ${index}:`, {
            fertilizer: item.fertilizer,
            nutrient: item.nutrient,
            rate: item.rate,
            unit: item.unit,
            contains: item.contains
          });
        });
      }
      
      addProducts(data.soilAmendments, 'Soil Amendments'); // Changed from 'Main Soil Corrections' to 'Soil Amendments'
      addProducts(data.seedTreatmentProducts, 'Seed Treatment');
      addProducts(data.plantingBlendProducts, 'Planting Blend');
      addProducts(data.soilCorrections, 'Soil Corrections');
      addProducts(data.fertigationProducts || data.soilDrenchProducts, 'Fertigation');
      addProducts(data.preFloweringFoliarProducts, 'Pre-Flowering Foliar');
      addProducts(data.nutritionalFoliarProducts || [], 'Nutritional Foliar');
      
      // Debug logging for all product sections
      console.log('🔍 PDF DEBUG: data.nutritionalFoliarProducts:', data.nutritionalFoliarProducts);
      console.log('🔍 PDF DEBUG: Final recommendations array:', recommendations);
    }
    // 2. "The following recommendations have been included" heading
    page2.drawText('The following recommendations have been included', {
      x: (595.28 - fontBold.widthOfTextAtSize('The following recommendations have been included', 13)) / 2,
      y: recY,
      size: 12,
      font: fontBold,
      color: green,
    });
    recY -= 15;
    // Extra spacer between the title and the first recommendation group
    recY -= 10;

    // Start detailed recommendations directly (no product boxes at top)
    if (recommendations.length > 0) {
      let lastGroup = '';
      for (const rec of recommendations) {
        if (rec.group && rec.group !== lastGroup) {
          // Add spacing between major sections
          if (lastGroup !== '') {
            recY -= 8;
          }
          // Section header
          page2.drawText(rec.group + ':', { x: recContentX, y: recY, size: 9, font: fontBold, color: black });
          recY -= 12;
          // Section intro
          const intro = SECTION_INTRO[rec.group];
          if (intro) {
            const introLines = wrapTextToWidthPlain(intro, font, 8, recContentWidth);
            for (let k = 0; k < introLines.length; k++) {
              page2.drawText(introLines[k], { x: recContentX + 15, y: recY, size: 8, font, color: gray });
              recY -= 9;
            }
            recY -= 2;
          }
          recY -= 3;
          lastGroup = rec.group;
        }
        
        // Bullet
        page2.drawText('•', { x: recContentX + 10, y: recY, size: 8, font: fontBold, color: black });
        const info = PRODUCT_INFO[rec.name] || { url: '', description: '' };
        const url = rec.url || info.url;
         
        // Product name (blue, underline)
        const sanitizedName = sanitizeTextForPDF(rec.name.replace(/‑/g, '-').replace(/–/g, '-').replace(/—/g, '-'));
        const nameFontSize = 9; // increase product title size by 1pt
        const nameWidth = fontBold.widthOfTextAtSize(sanitizedName, nameFontSize);
        page2.drawText(sanitizedName, { x: recContentX + 25, y: recY, size: nameFontSize, font: fontBold, color: rgb(0.1, 0.3, 0.8) });
        page2.drawLine({ start: { x: recContentX + 25, y: recY - 1 }, end: { x: recContentX + 25 + nameWidth, y: recY - 1 }, thickness: 0.7, color: rgb(0.1, 0.3, 0.8) });
         
        // Rate
         if (rec.rate && rec.unit) {
           const rateText = ` (${rec.rate} ${rec.unit})`;
           page2.drawText(rateText, { x: recContentX + 25 + nameWidth + 5, y: recY, size: 7, font, color: rgb(0.4, 0.4, 0.4) });
         }
         
        // Clickable link on name
        if (url) {
           const linkAnnotation = pdfDoc.context.obj({
             Type: PDFName.of('Annot'),
             Subtype: PDFName.of('Link'),
            Rect: [recContentX + 25, 841.89 - recY, recContentX + 25 + nameWidth, 841.89 - recY + 12],
             Border: [0, 0, 0],
             A: pdfDoc.context.obj({
               Type: PDFName.of('Action'),
               S: PDFName.of('URI'),
               URI: PDFString.of(url),
             }),
           });
           const linkRef = pdfDoc.context.register(linkAnnotation);
           let annotsArray = page2.node.Annots();
           if (annotsArray) {
             annotsArray.push(linkRef);
           } else {
             const arr = PDFArray.withContext(pdfDoc.context);
             arr.push(linkRef);
             page2.node.set(PDFName.of('Annots'), arr);
           }
         }
         
        // Description to the right
         const description = rec.description || info.description;
         if (description) {
           const rateText = rec.rate && rec.unit ? ` (${rec.rate} ${rec.unit})` : '';
           const rateWidth = rec.rate && rec.unit ? font.widthOfTextAtSize(rateText, 9) : 0;
          const descX = recContentX + 25 + nameWidth + 5 + rateWidth + 10;
           const sanitizedDescription = sanitizeTextForPDF(description.replace(/‑/g, '-').replace(/–/g, '-').replace(/—/g, '-'));
          const availableWidth = recContentWidth - (descX - recContentX) - 10;
           const descLines = wrapTextToWidthPlain(sanitizedDescription, font, 9, availableWidth);
           if (descLines.length > 0) {
             for (let k = 0; k < descLines.length; k++) {
               const lineX = k === 0 ? descX : recContentX + 25;
               const lineText = k === 0 ? ': ' + descLines[k] : descLines[k];
               page2.drawText(lineText, { x: lineX, y: recY, size: 9, font, color: rgb(0.2, 0.2, 0.2) });
               recY -= 11;
             }
            // Append URL at end of last line
             if (url) {
               const urlText = ` (${url})`;
               const lastDescLine = descLines[descLines.length - 1];
               const lastLineX = descLines.length === 1 ? descX : recContentX + 25;
               const lastDescWidth = font.widthOfTextAtSize((descLines.length === 1 ? ': ' : '') + lastDescLine, 9);
              const urlX = lastLineX + lastDescWidth;
               page2.drawText(urlText, { x: urlX, y: recY + 11, size: 8, font, color: rgb(0.1, 0.3, 0.8) });
               const linkY = 841.89 - (recY + 11);
               const linkAnnotation = pdfDoc.context.obj({
                 Type: PDFName.of('Annot'),
                 Subtype: PDFName.of('Link'),
                Rect: [urlX, linkY, urlX + font.widthOfTextAtSize(urlText, 8), linkY + 10],
                 Border: [0, 0, 0],
                 A: pdfDoc.context.obj({
                   Type: PDFName.of('Action'),
                   S: PDFName.of('URI'),
                   URI: PDFString.of(url),
                 }),
               });
               const linkRef = pdfDoc.context.register(linkAnnotation);
              let annotsArray2 = page2.node.Annots();
              if (annotsArray2) {
                annotsArray2.push(linkRef);
               } else {
                const arr2 = PDFArray.withContext(pdfDoc.context);
                arr2.push(linkRef);
                page2.node.set(PDFName.of('Annots'), arr2);
              }
            }
          }
           recY -= 4;
         } else {
          // If no description, optional URL right after name
           if (url) {
             const urlText = ` (${url})`;
             const urlWidth = font.widthOfTextAtSize(urlText, 8);
             const urlX = recContentX + 25 + nameWidth + 5 + (rec.rate && rec.unit ? font.widthOfTextAtSize(` (${rec.rate} ${rec.unit})`, 9) : 0);
             page2.drawText(urlText, { x: urlX, y: recY, size: 8, font, color: rgb(0.1, 0.3, 0.8) });
             const linkY = 841.89 - recY;
             const linkAnnotation = pdfDoc.context.obj({
               Type: PDFName.of('Annot'),
               Subtype: PDFName.of('Link'),
               Rect: [urlX, linkY, urlX + urlWidth, linkY + 10],
               Border: [0, 0, 0],
               A: pdfDoc.context.obj({
                 Type: PDFName.of('Action'),
                 S: PDFName.of('URI'),
                 URI: PDFString.of(url),
               }),
             });
             const linkRef = pdfDoc.context.register(linkAnnotation);
            let annotsArray3 = page2.node.Annots();
            if (annotsArray3) {
              annotsArray3.push(linkRef);
             } else {
              const arr3 = PDFArray.withContext(pdfDoc.context);
              arr3.push(linkRef);
              page2.node.set(PDFName.of('Annots'), arr3);
            }
          }
           recY -= 4;
         }
         
         if (recY < 100) break;
       }
     } else {
       page2.drawText('No recommendations available.', { x: recContentX, y: recY, size: 9, font, color: gray });
       recY -= 8;
     }
    // Spacer between recommendations section and Tank Mixing Table
    recY -= 8;

     // Tank Mixing Table
     let tableY = recY - 25;
     // Add section title above the table
     const tankMixingTitle = 'Tank Mixing Sequence';
     const tankMixingTitleFontSize = 12;
     const tableWidth = 500;
     const tableX = (595.28 - tableWidth) / 2;
     const titleWidth = fontBold.widthOfTextAtSize(tankMixingTitle, tankMixingTitleFontSize);
     page2.drawText(tankMixingTitle, {
       x: tableX + (tableWidth - titleWidth) / 2,
       y: tableY + 22,
       size: tankMixingTitleFontSize,
       font: fontBold,
       color: green,
     });
     // Add explanation below the title, centered
     const tankMixingExplanation = 'Follow this sequence for optimal mixing and application.';
     const explanationFontSize = 7;
     const explanationWidth = font.widthOfTextAtSize(tankMixingExplanation, explanationFontSize);
     page2.drawText(tankMixingExplanation, {
       x: tableX + (tableWidth - explanationWidth) / 2,
       y: tableY + 12, // Adjusted spacing
       size: explanationFontSize,
       font: font,
       color: gray,
     });
     // Table header
     const headerHeight = 18;
     page2.drawRectangle({ x: tableX, y: tableY - headerHeight, width: 500, height: headerHeight, color: green }); // Centered table
     const headers = ['SEQUENCE', 'PRODUCT DESCRIPTION', 'PRODUCTS', 'NOTES'];
     // Adjusted column x-positions for centered table
     let colX = [tableX + 2, tableX + 65, tableX + 215, tableX + 315]; // Adjusted for centered table
     let colWidths = [55, 145, 100, 175]; // Adjusted column widths
     const headerFontSize = 7;
     const cellFontSize = 6;
     const cellPaddingX = 6;
     const cellPaddingY = 2;
     const minRowHeight = 12;
     // Draw header text centered vertically
     headers.forEach((h, i) => {
       const textWidth = fontBold.widthOfTextAtSize(h, headerFontSize);
       const colCenter = colX[i] + colWidths[i] / 2;
       page2.drawText(h, {
         x: colCenter - textWidth / 2,
         y: tableY - headerHeight / 2 - headerFontSize / 2 + 4,
         size: headerFontSize,
         font: fontBold,
         color: rgb(1, 1, 1),
       });
     });
     // Table rows
     let rowY = tableY - headerHeight;
     if (Array.isArray(data.tankMixing) && data.tankMixing.length > 0) {
       let rowIndex = 0;
       for (const row of data.tankMixing) {
         const seqText = String(row.sequence || '');
         const descLines = wrapTextToWidthPlain(row.description || '', font, cellFontSize, colWidths[1] - 2 * cellPaddingX);
         const prodLines = wrapTextToWidthPlain(row.products || '', font, cellFontSize, colWidths[2] - 2 * cellPaddingX);
         const notesLines = wrapTextToWidthPlain(row.notes || '', font, cellFontSize, colWidths[3] - 2 * cellPaddingX);
         const maxLines = Math.max(descLines.length, prodLines.length, notesLines.length, 1);
         const rowHeight = Math.max(minRowHeight, maxLines * (cellFontSize + 3) + 2 * cellPaddingY);
         // Alternate row background
         if (rowIndex % 2 === 0) {
           page2.drawRectangle({ x: tableX, y: rowY - rowHeight, width: 500, height: rowHeight, color: rgb(0.97, 0.98, 0.95) }); // Reduced width to 500
         }
         // Calculate vertical centering offsets for each cell
         const lineHeight = cellFontSize + 3; 
         // Sequence (always single line)
         const seqBlockHeight = lineHeight;
         const seqStartY = rowY - cellPaddingY - ((rowHeight - 2 * cellPaddingY - seqBlockHeight) / 2) - font.heightAtSize(cellFontSize) * 0.7;
         // Description
         const descBlockHeight = descLines.length * lineHeight;
         const descStartY = rowY - cellPaddingY - ((rowHeight - 2 * cellPaddingY - descBlockHeight) / 2) - font.heightAtSize(cellFontSize) * 0.7;
         // Products
         const prodBlockHeight = prodLines.length * lineHeight;
         const prodStartY = rowY - cellPaddingY - ((rowHeight - 2 * cellPaddingY - prodBlockHeight) / 2) - font.heightAtSize(cellFontSize) * 0.7;
         // Notes
         const notesBlockHeight = notesLines.length * lineHeight;
         const notesStartY = rowY - cellPaddingY - ((rowHeight - 2 * cellPaddingY - notesBlockHeight) / 2) - font.heightAtSize(cellFontSize) * 0.7;
         // Draw Sequence (always single line, vertically centered)
         page2.drawText(seqText, {
           x: colX[0] + cellPaddingX,
           y: seqStartY,
           size: cellFontSize,
           font,
           color: black
         });
         // Draw Description
         for (let i = 0; i < descLines.length; i++) {
           const y = descStartY - i * lineHeight;
           page2.drawText(descLines[i], { x: colX[1] + cellPaddingX, y, size: cellFontSize, font, color: black });
         }
         // Draw Products
         for (let i = 0; i < prodLines.length; i++) {
           const y = prodStartY - i * lineHeight;
           page2.drawText(prodLines[i], { x: colX[2] + cellPaddingX, y, size: cellFontSize, font, color: black });
         }
         // Draw Notes
         for (let i = 0; i < notesLines.length; i++) {
           const y = notesStartY - i * lineHeight;
           page2.drawText(notesLines[i], { x: colX[3] + cellPaddingX, y, size: cellFontSize, font, color: black });
         }
         // Draw cell borders (vertical and horizontal, lighter color)
         let cellT = rowY;
         let cellB = rowY - rowHeight;
         for (let c = 0; c < colX.length; c++) {
           page2.drawLine({ start: { x: colX[c] - 2, y: cellT }, end: { x: colX[c] - 2, y: cellB }, thickness: 0.4, color: rgb(0.85, 0.9, 0.8) });
         }
         // Fix rightmost border to match others
         page2.drawLine({ start: { x: tableX + 500, y: cellT }, end: { x: tableX + 500, y: cellB }, thickness: 0.4, color: rgb(0.85, 0.9, 0.8) }); // Updated to 500
         page2.drawLine({ start: { x: tableX, y: cellT }, end: { x: tableX + 500, y: cellT }, thickness: 0.4, color: rgb(0.85, 0.9, 0.8) }); // Updated to 500
         page2.drawLine({ start: { x: tableX, y: cellB }, end: { x: tableX + 500, y: cellB }, thickness: 0.4, color: rgb(0.85, 0.9, 0.8) }); // Updated to 500
         rowY -= rowHeight;
         rowIndex++;
         if (rowY < 120) break;
       }
     } else {
       page2.drawText('No tank mixing data.', { x: colX[0], y: rowY, size: 10, font, color: gray });
     }
     // --- Improved fixed bottom layout for score, signature, and disclaimer ---
     // Use full page width for centering
     const disclaimerBaseY = 45; // Keep footer position
     const signatureBaseY = disclaimerBaseY + 25; 
     const scoreY = signatureBaseY + 30; 
     const starY = signatureBaseY + 45;

     // Variables for score and stars
     const scoreValue = typeof data.plantHealthScore === 'number' ? data.plantHealthScore : 0;
     let stars = 1;
     if (scoreValue >= 80) stars = 5;
     else if (scoreValue >= 60) stars = 4;
     else if (scoreValue >= 40) stars = 3;
     else if (scoreValue >= 20) stars = 2;
     const filledStarUrl = '/NTS G.R.O.W Star Full.png';
     const emptyStarUrl = '/NTS G.R.O.W Star Empty.png';
     const filledStarBytes = await fetch(filledStarUrl).then(res => res.arrayBuffer());
     const emptyStarBytes = await fetch(emptyStarUrl).then(res => res.arrayBuffer());
     const filledStarImg = await pdfDoc.embedPng(filledStarBytes);
     const emptyStarImg = await pdfDoc.embedPng(emptyStarBytes);
     const starWidth = 18; 
     const starHeight = 18; 
     const starGap = 2; 

     // Disclaimer/footer (centered, bottom, small gray font)
     if (data.reportFooterText) {
       const disclaimerFontSize = 7;
       const disclaimerMaxWidth = 500; 
       const disclaimerX = (595.28 - disclaimerMaxWidth) / 2; 
       const disclaimerLines = wrapTextToWidthPlain(data.reportFooterText, font, disclaimerFontSize, disclaimerMaxWidth);
       let disclaimerY = disclaimerBaseY;
       for (let i = 0; i < disclaimerLines.length; i++) {
         const isLastLine = i === disclaimerLines.length - 1;
         // Use simple text drawing for disclaimer to avoid word spacing issues
         page2.drawText(disclaimerLines[i], {
           x: disclaimerX,
           y: disclaimerY,
           size: disclaimerFontSize,
           font: font,
           color: gray,
         });
         disclaimerY -= disclaimerFontSize + 1;
       }
     }
     // Signature block (centered, above disclaimer)
     if (data.agronomist && (data.agronomist.name || data.agronomist.role || data.agronomist.email)) {
       const name = data.agronomist.name || '';
       const nameFontSize = 9;
       const nameWidth = fontBold.widthOfTextAtSize(name, nameFontSize);
       page2.drawText(name, {
         x: (595.28 - nameWidth) / 2, // Use page width for centering
         y: signatureBaseY + 15, 
         size: nameFontSize,
         font: fontBold,
         color: black,
       });
       let roleY = signatureBaseY + 5; 
       if (data.agronomist.role) {
         const role = data.agronomist.role;
         const roleFontSize = 8;
         const roleWidth = font.widthOfTextAtSize(role, roleFontSize);
         page2.drawText(role, {
           x: (595.28 - roleWidth) / 2, // Use page width for centering
           y: roleY,
           size: roleFontSize,
           font: font,
           color: rgb(0.54, 0.54, 0.54),
         });
         roleY -= 10; 
       }
       if (data.agronomist.email) {
         const email = data.agronomist.email;
         const emailFontSize = 8;
         const emailWidth = font.widthOfTextAtSize(email, emailFontSize);
         page2.drawText(email, {
           x: (595.28 - emailWidth) / 2, // Use page width for centering
           y: roleY,
           size: emailFontSize,
           font: font,
           color: rgb(0.54, 0.54, 0.54),
         });
       }
     } else {
       const placeholder = 'Signature: ___________________';
       const phFontSize = 9;
       const phWidth = fontBold.widthOfTextAtSize(placeholder, phFontSize);
       page2.drawText(placeholder, {
         x: (595.28 - phWidth) / 2, 
         y: signatureBaseY + 15, 
         size: phFontSize,
         font: fontBold,
         color: rgb(0.7, 0.7, 0.7),
       });
     }
     // Plant health score and stars (above signature)
     const scoreLabelFontSize = 12; 
     const scoreValueFontSize = 12; 
     const scoreLabel = reportType === 'plant' ? 'Overall Plant Health Score:' : 'Overall Soil Health Score:';
     const scoreValueText = ` ${scoreValue.toFixed(1)} / 100`;
     const scoreLabelWidth = fontBold.widthOfTextAtSize(scoreLabel, scoreLabelFontSize);
     const scoreValueWidth = fontBold.widthOfTextAtSize(scoreValueText, scoreValueFontSize);
     page2.drawText(scoreLabel, {
       x: (595.28 - (scoreLabelWidth + scoreValueWidth)) / 2, // Use page width for centering
       y: scoreY,
       size: scoreLabelFontSize,
       font: fontBold,
       color: green,
     });
     page2.drawText(scoreValueText, {
       x: (595.28 - (scoreLabelWidth + scoreValueWidth)) / 2 + scoreLabelWidth, // Use page width for centering
       y: scoreY,
       size: scoreValueFontSize,
       font: fontBold,
       color: green,
     });
     // Draw 5 PNG stars, centered, with compact spacing, above the score
     const totalStarsWidth = 5 * starWidth + 4 * starGap;
     for (let i = 0; i < 5; i++) {
       const img = i < stars ? filledStarImg : emptyStarImg;
       page2.drawImage(img, {
         x: (595.28 - totalStarsWidth) / 2 + i * (starWidth + starGap), // Use page width for centering
         y: starY,
         width: starWidth,
         height: starHeight,
       });
     }
     // Page number
     // drawPageNumber(page2, 1, 2, font);
   }
   // --- Insert back attachments as pages at the end ---
   if (attachments && attachments.backAttachments && attachments.backAttachments.length > 0) {
     for (const att of attachments.backAttachments) {
       let url = '';
       if (att === 'humic') url = '/attachments/Humic Acid Recipe.pdf';
       if (att === 'cover-crop') url = '/attachments/Cover Crop Mix Table.pdf';
       if (att === 'fulvic') url = '/attachments/Fulvic Acid Recipe.pdf';
       if (att === 'bam') url = '/attachments/BAM Recipe.pdf';
       if (att === 'soil-therapy-general-guidelines') url = '/attachments/soil-therapy-general-guidelines.pdf';
       if (att === 'seed-treatment-instructions') url = '/attachments/seed-treatment-instructions.pdf';
       if (att === 'micro-force-brewing-recipe') url = '/attachments/micro-force-brewing-recipe.pdf';
       if (att === 'bam-brewing-recipe') url = '/attachments/bam-brewing-recipe.pdf';
       // Add more mappings as needed
       if (url) {
         try {
           const response = await fetch(url);
           if (!response.ok) {
             console.warn(`PDF file not found: ${url}`);
             continue;
           }
           const existingPdfBytes = await response.arrayBuffer();
           const existingPdf = await PDFDocument.load(existingPdfBytes);
           const copiedPages = await pdfDoc.copyPages(existingPdf, existingPdf.getPageIndices());
           copiedPages.forEach(page => pdfDoc.addPage(page));
         } catch (error) {
           console.warn(`Failed to load PDF: ${url}`, error);
           continue;
         }
       }
     }
   }

   // Download the PDF
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const rawName = Array.isArray(reportData)
      ? (reportData[0]?.client || 'Therapy_Report')
      : (reportData?.client || 'Therapy_Report');
    const safeName = String(rawName).replace(/[^a-zA-Z0-9 _-]/g, ' ').replace(/\s+/g, '_').slice(0, 80) || 'Therapy_Report';
    a.download = `${safeName}.pdf`;
    a.rel = 'noopener';
    a.target = '_blank';
    document.body.appendChild(a);
    // Try programmatic download first
    try {
      a.click();
    } catch (e) {
      // Ignore and fall through to open
    }
    // Aggressive fallback: also open the Blob URL in a new tab to bypass blockers
    try {
      setTimeout(() => {
        try { window.open(url, '_blank'); } catch {}
        // Cleanup
        try { document.body.removeChild(a); } catch {}
        setTimeout(() => URL.revokeObjectURL(url), 1500);
      }, 50);
    } catch {}
 } 