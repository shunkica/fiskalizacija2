# Pokretanje

```shell
docker compose up
```

# Postavljanje PMode fileova
Nakon prvog pokretanja potrebno je postaviti PMode fileove za obje domibus instance. (PMode -> Current -> Upload)

- instanca 1 (http://localhost:8081/domibus): `template/bus/pmode_blue.xml`
- instanca 2 (http://localhost:8082/domibus): `template/bus/pmode_red.xml`

# Defaultni Portovi

- `8081` - domibus instanca 1
- `8082` - domibus instanca 2
- `8083` - domismp
- `8084` - domisml
- `3000` - client

# URL-ovi

- `http://localhost:8081/domibus` - domibus instanca 1
- `http://localhost:8082/domibus` - domibus instanca 2
- `http://localhost:8083/smp/ui` - domismp
- `http://localhost:8084/bdmsl` - domisml
- `http://localhost:3000/` - client

# Korisnički računi

- domibus - `admin` / `123456`
- domismp - `system` / `123456` | `user` / `123456`

# Korištenje testnog klijenta za slanje poruka

Za `Payload XML File` mogu se koristiti primjeri eRačuna iz direktorija `@/docs/Primjeri_eRacuna`.

Po defaultu je konfiguriran participant `9934:00000000000` na instanci 1 (blue) i `9934:11111111111` na instanci 2 (red).
