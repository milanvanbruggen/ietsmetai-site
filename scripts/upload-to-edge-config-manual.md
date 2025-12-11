# Handmatig data uploaden naar Edge Config

Als het automatische script niet werkt, kun je de data handmatig uploaden via de Vercel dashboard.

## Stappen:

1. **Ga naar je Vercel project dashboard**
   - Open https://vercel.com
   - Selecteer je project

2. **Ga naar Storage → Edge Config**
   - Klik op je Edge Config store
   - Of maak een nieuwe aan als je die nog niet hebt

3. **Voeg een nieuwe item toe**
   - Klik op "Edit Items" of "Add Item"
   - Key: `testimonials`
   - Value: Kopieer de HELE inhoud van het bestand hieronder

4. **Kopieer deze data:**

```json
{
  "testimonials": [
    {
      "id": 1765377961798,
      "clientName": "SEO-bureau Onder",
      "personName": "Martijn Hoving",
      "personRole": "Founder",
      "personPhoto": "https://onder.nl/site/uploads/2022/11/Martijn-Hoving-1-e1722587079417-1100x822.jpg",
      "focalPoint": "center",
      "testimonial": "Milan heeft ons geholpen om AI op een praktische manier in onze organisatie te implementeren. Zijn nuchtere aanpak en focus op directe resultaten was precies wat we nodig hadden. We zien nu al significante tijdswinst in onze dagelijkse processen. Het traject was duidelijk, overzichtelijk en leverde direct concrete waarde.",
      "visible": true,
      "order": 0
    },
    {
      "id": 1765378404322,
      "clientName": "Online Plastics Group",
      "personName": "Jonathan Opdam",
      "personRole": "Founder en CEO",
      "personPhoto": "https://onlineplasticsgroup.com/wp-content/uploads/2024/07/2024_07_OPG_ARNHEM_32.jpg",
      "focalPoint": "top-center",
      "testimonial": "Uitstekend werk! Milan begrijpt echt wat er nodig is om AI succesvol in te zetten. Nog meer tekst om ervoor te zorgen dat de testimonials mooi uitgelijnd worden.",
      "visible": true,
      "order": 1
    }
  ]
}
```

5. **Klik op "Save"**

6. **Controleer in Vercel Settings → Environment Variables dat deze variabelen bestaan:**
   - `EDGE_CONFIG` (wordt automatisch toegevoegd wanneer je Edge Config verbindt met je project)
   - `EDGE_CONFIG_ID` (bijv. `ecfg_xxxxx`)
   - `EDGE_CONFIG_TOKEN` (je Vercel API token - alleen nodig voor schrijven via admin panel)

7. **Test je admin panel**
   - Ga naar https://ietsmetai.com/admin/testimonials
   - Je zou nu de testimonials moeten zien

## Belangrijk voor het admin panel

Als je wilt dat het admin panel ook wijzigingen kan opslaan in productie, moet je de volgende environment variables toevoegen in Vercel:

- `EDGE_CONFIG_ID` - Je Edge Config ID
- `EDGE_CONFIG_TOKEN` - Je Vercel API token (met write permissies)

Anders kun je alleen lokaal wijzigingen maken en deze handmatig via de Vercel dashboard uploaden.
