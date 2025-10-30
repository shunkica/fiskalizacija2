# Pokretanje

```shell
sh build.sh
docker compose -f docker-compose.dev.yml up
```

# URL-ovi

- `http://localhost:8081/domibus` - domibus instanca 1
- `http://localhost:8082/domibus` - domibus instanca 2
- `http://localhost:8083/smp/ui` - domismp
- `http://localhost:8084/bdmsl` - domisml
- `http://localhost:3000/` - client

# Korisnički računi

- domibus - `admin` / `123456`
- domismp - `system` / `123456` | `user` / `123456`

# Logovi

Logovi i poruke koje backend prima od domibusa, nalaze se u `logs` direktoriju.

# Korištenje testnog klijenta za slanje poruka

Za `Payload XML File` mogu se koristiti primjeri eRačuna iz direktorija `@/docs/Primjeri_eRacuna`.

Po defaultu je konfiguriran participant `9934:00000000001` na instanci 1 (blue) i `9934:11111111119` na instanci 2 (red).

# Napomene



Ovdje se koristi Agreement koji je definiran u specifikaciji, no u ovom trenutnku na DEMO okolini porezne, taj agreement se ne koristi zbog pogrešne konfiguracije na njihovoj strani.
Za slanje računa na demo okolini potrebno je maknuti AgreementRef element iz headera, te maknuti agreement iz process konfiguracije u PMODE-u.
