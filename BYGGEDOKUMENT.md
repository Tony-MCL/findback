# FindBack

> Never wonder where again.

## Om prosjektet

FindBack er en ekstremt enkel mobilapp fra Morning Coffee Labs.

Appen gjør kun én ting:

Den lar brukeren lagre ett sted de ønsker å finne tilbake til senere, og åpner telefonens foretrukne kartapp med navigasjon tilbake til dette stedet.

FindBack skal aldri forsøke å erstatte Google Maps, Apple Maps eller andre navigasjonsapper.

FindBack skal kun huske stedet.

---

# Produktfilosofi

FindBack bygger på noen enkle prinsipper.

## Gjør én ting

Appen skal kun løse ett problem.

«Hvor var det jeg parkerte?»

eller

«Hvordan finner jeg tilbake hit?»

Hvis en ny funksjon ikke gjør denne oppgaven enklere, skal den sannsynligvis ikke bygges.

## Ikke konkurrer med kartappene

Kartapper er allerede svært gode på:

- Kart
- Navigasjon
- Trafikk
- Rutevalg
- Satellittbilder

FindBack skal bruke disse.

FindBack skal aldri forsøke å lage egne kart eller egen navigasjon.

## Null friksjon

Brukeren skal aldri måtte tenke.

Når appen åpnes finnes bare de valgene brukeren faktisk trenger.

## Offline first

Appen skal fungere uten brukerprofil og uten server.

Kun én GPS-posisjon lagres lokalt på telefonen.

Ingen konto.

Ingen innlogging.

Ingen sky.

## Morning Coffee Labs

FindBack er en del av Morning Coffee Labs-porteføljen.

Målet er å bygge en app folk liker å bruke fordi den er enkel.

---

# MVP (v1)

FindBack har kun to tilstander.

## Tilstand 1

Ingen sted lagret.

Vis kun én knapp.

📍 Husk sted

Når brukeren trykker:

- hent GPS-posisjon
- lagre koordinat lokalt
- vis bekreftelse
- gå til Tilstand 2

## Tilstand 2

Et sted er lagret.

Vis to knapper.

🧭 Ta meg tilbake

Åpner Google Maps eller Apple Maps med navigasjon til lagret posisjon.

🗑️ Slett sted

Sletter lagret posisjon.

Går tilbake til Tilstand 1.

---

# Feilhåndtering

Ved vellykket lagring:

✅ Sted lagret

Ved manglende posisjon:

❌ Kunne ikke hente posisjonen

Ved manglende posisjonstillatelse:

Appen skal forklare hvorfor posisjonstilgang er nødvendig og tilby åpning av telefonens innstillinger.

---

# Det som IKKE skal være i v1

- Historikk
- Flere steder
- Navn på steder
- Bilder
- Notater
- Favoritter
- Mapper
- Deling
- Backup
- Sky
- Konto
- Innlogging
- Abonnement
- Reklame
- Widgets
- Egne kart
- Egen navigasjon

---

# Mulige fremtidige funksjoner

Disse vurderes først dersom appen får en aktiv brukerbase.

## FindBack Plus (engangskjøp)

Mulige funksjoner:

- Stedsbank
- Ubegrenset antall lagrede steder
- Favoritter
- Navngi steder
- Bilder
- Kategorier

Dette er ikke en del av MVP.

---

# Teknologi

Planlagt teknologistack:

- Expo
- React Native
- TypeScript
- expo-location
- AsyncStorage
- Deep Linking til Google Maps / Apple Maps

Ingen backend.

Ingen database.

Ingen server.

---

# Designfilosofi

Appen skal være så enkel at en førstegangsbruker forstår hele appen på under fem sekunder.

Hvis vi diskuterer en ny funksjon, skal vi alltid stille spørsmålet:

> Gjør dette appen enklere?

Hvis svaret er nei, skal funksjonen sannsynligvis ikke bygges.

---

# Suksesskriterier

FindBack er vellykket dersom brukeren kan:

1. Åpne appen.
2. Trykke én knapp.
3. Finne tilbake senere.

Mer trenger den ikke å gjøre.
