# Evidencija zapažanja promjena u službenoj dokumentaciji

## 2025-07-29

- Tehnicka_specifikacija_eRacun_AMS.pdf
  - Ažuriranje poglavlja 5.3. dodani primjeri formiranja DNS upita

## 2025-07-28

 - Tehnicka_specifikacija_eRacun_MPS.pdf
   - Dodan prilog 2 sa primjerom odgovora MPS-a
   - Izmjena poglavlja 3. promjena navoda AMS i MPS su bazirani na standardu eDelivery BDXL 1.61 
 - Tehnicka_specifikacija_eRacun_AMS.pdf
   - Izmjena poglavlja 4. promjena navoda AMS i MPS su bazirani na standardu eDelivery BDXL 1.61
   - Ažurirano poglavlje 5.3. dodani su linkovi za AMS produkcijsku okolinu, linkovi AMS-a unutar Portala za testiranje sukladnosti 
     - Demo:
       - dig +short @dns1.hitronet.hr 3IC5RWEJIATNSZ5UY56HVGWEIH4NMQZL5UXVNSYQFJSH5Z6SEJKA.iso6523-actorid-upis.demo.ams.porezna-uprava.hr. NAPTR
       - AMS: https://cis.porezna-uprava.hr:8515/proxy
     - Produkcija:
       - dig +short @dns1.hitronet.hr 3IC5RWEJIATNSZ5UY56HVGWEIH4NMQZL5UXVNSYQFJSH5Z6SEJKA.iso6523-actorid-upis.prod.ams.porezna-uprava.hr. NAPTR
       - AMS: https://cis.porezna-uprava.hr:8512/proxy
