# Scripts

## migrate-to-edge-config.ts

Dit script uploadt lokale data bestanden naar Vercel Edge Config.

### Setup

1. Zorg dat je de Edge Config ID hebt:
   - Ga naar je Vercel project dashboard
   - Ga naar Storage → Edge Config
   - Maak een Edge Config aan als je die nog niet hebt
   - Kopieer de Edge Config ID (bijv. `ecfg_xxxxx`)

2. Maak een **Vercel API Token** aan (BELANGRIJK: Dit is NIET een Edge Config token!):
   - Ga naar je Vercel account settings: https://vercel.com/account/tokens
   - Klik op "Create Token"
   - Geef het een naam (bijv. "Edge Config Migration")
   - Selecteer de juiste scope (minimaal write access voor je project)
   - Kopieer de token (deze zie je maar 1 keer!)

3. Voeg de credentials toe aan je `.env.local`:
   ```
   EDGE_CONFIG_ID=ecfg_xxxxx
   EDGE_CONFIG_TOKEN=vercel_token_hier (je Vercel API token, begint vaak met vercel_)
   ```

3. Run het script:
   ```bash
   npx tsx scripts/migrate-to-edge-config.ts
   ```

### Wat doet het script?

Het script leest `data/testimonials.json` en upload deze naar Edge Config met de key `testimonials`.
Hierdoor worden je testimonials beschikbaar in productie.
