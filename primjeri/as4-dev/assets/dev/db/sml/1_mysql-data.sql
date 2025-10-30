insert into bdmsl_configuration(property, value)
values ('sml.security.folder', '/opt/sml/security/'),
       ('keystoreFileName', 'keystore.p12'),
       ('keystoreType', 'PKCS12'),
       ('keystorePassword', '+YBGH2GTtGvgBH95KW6lFDEtphIIC98='),
       ('keystoreAlias', 'bdmsl'),
       ('truststoreFileName', 'truststore.p12'),
       ('truststoreType', 'PKCS12'),
       ('truststorePassword', '+YBGH2GTtGvgBH95KW6lFDEtphIIC98='),
       ('unsecureLoginAllowed', 'true'),
       ('authentication.bluecoat.enabled', 'true'),
       ('adminPassword', '$2a$10$TuDVoARflZbs9Jee4AdcY.RvGhsfvSkPui1tNvaFfo6vEowZX1p7C'),
       ('dnsClient.server', 'bind9'),
       ('dnsClient.publisherPrefix', 'publisher'),
       ('dnsClient.enabled', 'true'),
       ('dnsClient.show.entries', 'true'),
       ('dnsClient.TSIGEnabled', 'true'),
       ('dnsClient.TSIGKeyName', 'test.domisml.local.'),
       ('dnsClient.TSIGKeyValue', 'yA6R8MTU9tZDDIjfVG1auRpgC3reJCeFVsNDLccky+I21/tTCIvNj0K/ohRUvpg6'),
       ('dnsClient.TSIGAlgorithm', 'hmac-sha256'),
       ('authentication.sslclientcert.enabled', 'false'),
       ('authorization.smp.certSubjectRegex', '^.*(CN=SMP_|OU=PEPPOL TEST SMP).*$'),
       ('authorization.domain.legacy.enabled', 'true'),
       ('certificateChangeCronExpression', '0 0 2 ? * *'),
       ('certificateChangeCronExpression.serverInstance', 'localhost'),
       ('cert.revocation.validation.graceful', 'true'),
       ('cert.revocation.validation.crl.protocols', 'http://,https://'),
       ('cert.revocation.validation.strategy', 'CRL_ONLY'),
       ('dataInconsistencyAnalyzer.cronJobExpression', '0 0 3 ? * *'),
       ('dataInconsistencyAnalyzer.recipientEmail', 'email@domain.com'),
       ('dataInconsistencyAnalyzer.senderEmail', 'automated-notifications@nsome-mail.eu'),
       ('dataInconsistencyAnalyzer.serverInstance', 'localhost'),
       ('mail.smtp.host', 'mail.server.com'),
       ('mail.smtp.port', '25'),
       ('mail.smtp.protocol', 'smtp'),
       ('dnsClient.SIG0Enabled', 'false'),
       ('useProxy', 'false'),
       ('httpNoProxyHosts', 'localhost|127.0.0.1'),
       ('sml.property.refresh.cronJobExpression', '0 53 */1 * * *'),
       ('paginationListRequest', '100'),
       ('signResponse', 'false'),
       ('smp.update.max.part.size', '10000'),
       ('report.expiredSMPCertificates.cron', '0 22 6 ? * *'),
       ('report.expiredSMPCertificates.recipientEmail', 'email@domain.com'),
       ('report.expiredSMPCertificates.senderEmail', 'automated-notifications@nsome-mail.eu'),
       ('report.expiredSMPCertificates.serverInstance', 'localhost'),
       ('vault.enabled', 'false');

insert into bdmsl_subdomain (subdomain_id, subdomain_name, dns_zone, description, participant_id_regexp, dns_record_types, smp_url_schemas, created_on, last_updated_on)
values (1, 'hr.test.eracun.local', 'test.eracun.local', 'Domain for HR ', '^(((9934:).*)|(\\*))$', 'all', 'all', NOW(), NOW()),
       (2, 'any.test.eracun.local', 'test.eracun.local', 'Domain for any ', '^.*$', 'all', 'all', NOW(), NOW());

INSERT INTO bdmsl_certificate_domain(certificate, crl_url, is_root_ca, fk_subdomain_id, created_on, last_updated_on, is_admin)
VALUES ('CN=CA_SMP_TEST,O=Company,C=HR', '', 1, 1, NOW(), NOW(), 1),
       ('CN=domisml-admin,O=Company,C=HR', '', 0, 1, NOW(), NOW(), 1);

INSERT INTO bdmsl_certificate (id, created_on, last_updated_on, certificate_id, new_cert_change_date, pem_encoding, valid_from, valid_until, new_cert_id)
VALUES (1, NOW(), NOW(), 'CN=SMP_TEST,O=Company,C=HR:000000000000000089cd1b54b1b3f591', null, null, '2025-06-11 11:04:14', '2056-06-11 11:04:14', null);

INSERT INTO bdmsl_smp (id, created_on, last_updated_on, smp_disabled, dns_record_types, endpoint_logical_address, endpoint_physical_address, smp_id, fk_certificate_id, fk_subdomain_id)
VALUES (1, NOW(), NOW(), false, 'all', 'http://domismp:8080/smp/', '0.0.0.0', 'domismp1', 1, 1);

INSERT INTO bdmsl_participant_identifier (id, created_on, last_updated_on, cname_hash, disabled, naptr_hash, naptr_services, participant_id, scheme, fk_smp_id)
VALUES (1, NOW(), NOW(), 'f0cd33a02775d9f108bf01359ece875d', false, 'NKWM764QK7IENID74UTU7RFKMJAZAU7GUBMMUYFMWFF6UXLPJM6A', 'Meta:SMP', '9934:00000000001', 'iso6523-actorid-upis', 1),
       (2, NOW(), NOW(), 'a66df1049fc35d51cc77ae84bd06ba14', false, '5UZQY5SM4DGC5UFOLJX57NRW567D2BSDYMCGWXAQVH37LP5HUYCQ', 'Meta:SMP', '9934:11111111119', 'iso6523-actorid-upis', 1);
