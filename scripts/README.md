# Scripts

## migrate-to-edge-config.ts

Dit script uploadt lokale data bestanden naar Vercel Edge Config.

### Setup

1. Zorg dat je de Edge Config ID hebt:
   - Ga naar je Vercel project dashboard
   - Ga naar Storage → Edge Config
   - Maak een Edge Config aan als je die nog niet hebt
   - Kopieer de Edge Config ID (bijv. `ecfg_xxxxx`)

2. Maak een **Edge Config Token** aan:
   - Ga naar je Vercel project dashboard
   - Storage → Edge Config → je Edge Config store
   - Klik op "Tokens" tab
   - Klik "Create Token"
   - Geef het een naam (bijv. "Admin Write Access")
   - Selecteer "Read & Write" permissions
   - Kopieer de token (deze zie je maar 1 keer!)

3. Voeg de credentials toe aan je `.env.local`:
   ```
   EDGE_CONFIG_ID=ecfg_xxxxx
   EDGE_CONFIG_TOKEN=xxxxx (je Edge Config token)
   ```

3. Run het script:
   ```bash
   npx tsx scripts/migrate-to-edge-config.ts
   ```

### Wat doet het script?

Het script leest `data/testimonials.json` en upload deze naar Edge Config met de key `testimonials`.
Hierdoor worden je testimonials beschikbaar in productie.
