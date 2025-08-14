insert into SMP_USER (ID, USERNAME, ACTIVE, APPLICATION_ROLE, EMAIL, CREATED_ON, LAST_UPDATED_ON)
values (1, 'system', 1, 'SYSTEM_ADMIN', 'system@mail-example.local', NOW(), NOW()),
       (2, 'user', 1, 'USER', 'user@mail-example.local', NOW(), NOW());

insert into SMP_CREDENTIAL (ID, FK_USER_ID, CREDENTIAL_ACTIVE, CREDENTIAL_NAME, CREDENTIAL_VALUE, CREDENTIAL_TYPE, CREDENTIAL_TARGET, CREATED_ON, LAST_UPDATED_ON, ACTIVE_FROM, CHANGED_ON, EXPIRE_ON)
values (1, 1, 1, 'system', '$2a$06$FDmjewn/do3C219uysNm9.XG8mIn.ubHnMydAzC8lsv61HsRpOR36', 'USERNAME_PASSWORD', 'UI', NOW(), NOW(), NOW(), NOW(), NOW() + INTERVAL 1 YEAR),
       (2, 2, 1, 'user', '$2a$06$FDmjewn/do3C219uysNm9.XG8mIn.ubHnMydAzC8lsv61HsRpOR36', 'USERNAME_PASSWORD', 'UI', NOW(), NOW(), NOW(), NOW(), NOW() + INTERVAL 1 YEAR);

insert into SMP_EXTENSION (ID, IDENTIFIER, IMPLEMENTATION_NAME, NAME, VERSION, DESCRIPTION, CREATED_ON, LAST_UPDATED_ON)
values (1, 'edelivery-oasis-smp-extension', 'OasisSMPExtension', 'Oasis SMP 1.0 and 2.0', '1.0', 'Oasis SMP 1.0 and 2.0 extension', NOW(), NOW());

INSERT INTO SMP_RESOURCE_DEF (ID, CREATED_ON, LAST_UPDATED_ON, DESCRIPTION, HANDLER_IMPL_NAME, IDENTIFIER, MIME_TYPE, NAME, URL_SEGMENT, FK_EXTENSION_ID)
VALUES (1, NOW(), NOW(), 'Oasis SMP 1.0 Service group resource handler', 'OasisSMPResource10Handler', 'edelivery-oasis-smp-1.0-servicegroup', 'text/xml', 'Oasis SMP 1.0 ServiceGroup', 'smp-1', 1);

INSERT INTO SMP_SUBRESOURCE_DEF (ID, FK_RESOURCE_DEF_ID, URL_SEGMENT, IDENTIFIER, DESCRIPTION, MIME_TYPE, NAME, CREATED_ON, LAST_UPDATED_ON)
VALUES (1, 1, 'services', 'edelivery-oasis-smp-1.0-servicemetadata', 'ServiceMetadata', 'text/xml', 'Oasis SMP ServiceMetadata', NOW(), NOW());
