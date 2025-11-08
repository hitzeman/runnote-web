import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-preview',
  imports: [CommonModule],
  templateUrl: './theme-preview.html',
  styleUrl: './theme-preview.css',
})
export class ThemePreview {
  themes = [
    {
      name: 'Energetic Sport',
      description: 'Orange/Blue - Energy and activity meets trust and clarity',
      prefix: 'energetic',
    },
    {
      name: 'Modern Athletic',
      description: 'Indigo/Slate - Modern, tech-forward and professional',
      prefix: 'modern',
    },
    {
      name: 'Nature Runner',
      description: 'Green/Earth - Outdoors and nature with grounding neutrals',
      prefix: 'nature',
    },
    {
      name: 'Bold Performance',
      description: 'Red/Dark - Passion and energy with sophistication',
      prefix: 'bold',
    },
  ];

  fontPairings = [
    {
      name: 'Modern & Clean',
      headingClass: 'font-modern-heading',
      bodyClass: 'font-modern-body',
      description: 'Inter - Clean and modern for both headings and body',
    },
    {
      name: 'Athletic & Bold',
      headingClass: 'font-athletic-heading',
      bodyClass: 'font-athletic-body',
      description: 'Montserrat headings with Lato body',
    },
    {
      name: 'Tech Forward',
      headingClass: 'font-tech-heading',
      bodyClass: 'font-tech-body',
      description: 'Space Grotesk headings with DM Sans body',
    },
  ];

  shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
}
