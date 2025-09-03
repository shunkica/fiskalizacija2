-- This is [CREATE] database script for DomiSML version: [5.0].
-- This file was generated using hibernate version [org.hibernate.dialect.MySQL5InnoDBDialect] with dialect [6.6.15.Final].
-- For more information, refer to the Hibernate dialect documentation.

    create table bdmsl_allowed_wildcard (
        scheme varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin not null,
        created_on datetime,
        last_updated_on datetime,
        fk_certificate_id bigint not null,
        primary key (fk_certificate_id, scheme)
    ) comment='This table identifies the SMP with their certificates and map them to schemes for which they can create wildcard records.' ENGINE=InnoDB DEFAULT CHARSET=utf8;

    create table bdmsl_allowed_wildcard_aud (
        fk_certificate_id bigint not null,
        scheme varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin not null,
        REV bigint not null,
        REVTYPE tinyint,
        created_on datetime,
        last_updated_on datetime,
        primary key (REV, fk_certificate_id, scheme)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    create table bdmsl_certificate (
        id bigint not null auto_increment,
        created_on datetime,
        last_updated_on datetime,
        certificate_id varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin not null comment 'The certificate_id is a key composed of the subject and the serial number of the certificate.',
        new_cert_change_date datetime comment 'The date of the change for the new certificate. Hour of change is defined in Configuration!',
        pem_encoding longtext comment 'PEM encoding for the certificate',
        valid_from datetime not null comment 'Start validity date of the certificate',
        valid_until datetime not null comment 'Expiry date of the certificate',
        new_cert_id bigint,
        primary key (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    create table bdmsl_certificate_aud (
        id bigint not null,
        REV bigint not null,
        REVTYPE tinyint,
        created_on datetime,
        last_updated_on datetime,
        certificate_id varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin,
        new_cert_change_date datetime,
        pem_encoding longtext,
        valid_from datetime,
        valid_until datetime,
        new_cert_id bigint,
        primary key (REV, id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    create table bdmsl_certificate_domain (
        id bigint not null auto_increment,
        created_on datetime,
        last_updated_on datetime,
        certificate varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin not null comment 'Legacy Certificate id.',
        crl_url varchar(1000)  CHARACTER SET utf8 COLLATE utf8_bin comment 'URL to the certificate revocation list (CRL)',
        is_admin bit not null comment 'Can certificate(s) call also the admin services. True only for nonroot certificates',
        is_root_ca bit not null comment 'Is certificate Root certificate.',
        pem_encoding longtext comment 'PEM encoding for the certificate',
        truststore_alias varchar(512)  CHARACTER SET utf8 COLLATE utf8_bin comment 'TrustStore alias',
        valid_from datetime comment 'Start validity date of the certificate',
        valid_until datetime comment 'Expiry date of the certificate',
        fk_subdomain_id bigint not null,
        primary key (id)
    ) comment='Table contains domain authorization certificate data for Issuer based authorization and Leaf certificate base authorization.' ENGINE=InnoDB DEFAULT CHARSET=utf8;

    create table bdmsl_certificate_domain_aud (
        id bigint not null,
        REV bigint not null,
        REVTYPE tinyint,
        created_on datetime,
        last_updated_on datetime,
        certificate varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin,
        crl_url varchar(1000)  CHARACTER SET utf8 COLLATE utf8_bin,
        is_admin bit,
        is_root_ca bit,
        pem_encoding longtext,
        truststore_alias varchar(512)  CHARACTER SET utf8 COLLATE utf8_bin,
        valid_from datetime,
        valid_until datetime,
        fk_subdomain_id bigint,
        primary key (REV, id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    create table bdmsl_configuration (
        property varchar(512)  CHARACTER SET utf8 COLLATE utf8_bin not null comment 'Property key/name',
        created_on datetime,
        last_updated_on datetime,
        description varchar(4000)  CHARACTER SET utf8 COLLATE utf8_bin comment 'Description of the property',
        value varchar(4000)  CHARACTER SET utf8 COLLATE utf8_bin comment 'Value of the property',
        primary key (property)
    ) comment='SML configuration properties' ENGINE=InnoDB DEFAULT CHARSET=utf8;

    create table bdmsl_configuration_aud (
        property varchar(512)  CHARACTER SET utf8 COLLATE utf8_bin not null,
        REV bigint not null,
        REVTYPE tinyint,
        created_on datetime,
        last_updated_on datetime,
        description varchar(4000)  CHARACTER SET utf8 COLLATE utf8_bin,
        value varchar(4000)  CHARACTER SET utf8 COLLATE utf8_bin,
        primary key (REV, property)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    create table bdmsl_dns_record (
        id bigint not null auto_increment comment 'Surrogate key for DNSRecord Entity',
        created_on datetime,
        last_updated_on datetime,
        dns_zone varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin not null comment 'Domain (dns zone) of dns server.',
        name varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin not null comment 'Dns name.',
        service varchar(32)  CHARACTER SET utf8 COLLATE utf8_bin comment 'Service - part of naptr record. If not given (for naptr) default value is: Meta:SMP.',
        type varchar(32)  CHARACTER SET utf8 COLLATE utf8_bin not null comment 'Record type: A, CNAME, NAPTR.',
        value varchar(512)  CHARACTER SET utf8 COLLATE utf8_bin comment 'Dns Value.  For A type it must be IP address, for CNAME it must valid Domain, for NAPTR it must be regular expresion.',
        primary key (id)
    ) comment='Contains custom DNS records' ENGINE=InnoDB DEFAULT CHARSET=utf8;

    create table bdmsl_dns_record_aud (
        id bigint not null,
        REV bigint not null,
        REVTYPE tinyint,
        created_on datetime,
        last_updated_on datetime,
        dns_zone varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin,
        name varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin,
        service varchar(32)  CHARACTER SET utf8 COLLATE utf8_bin,
        type varchar(32)  CHARACTER SET utf8 COLLATE utf8_bin,
        value varchar(512)  CHARACTER SET utf8 COLLATE utf8_bin,
        primary key (REV, id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    create table bdmsl_migrate (
        migration_key varchar(50)  CHARACTER SET utf8 COLLATE utf8_bin not null,
        participant_id varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin not null,
        scheme varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin not null,
        created_on datetime,
        last_updated_on datetime,
        migrated bit not null comment 'True if the migration is done',
        new_smp_id varchar(64)  CHARACTER SET utf8 COLLATE utf8_bin comment 'The id of the SMP after the migration',
        old_smp_id varchar(64)  CHARACTER SET utf8 COLLATE utf8_bin not null comment 'The id of the old SMP (before the migration)',
        primary key (migration_key, participant_id, scheme)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    create table bdmsl_migrate_aud (
        migration_key varchar(50)  CHARACTER SET utf8 COLLATE utf8_bin not null,
        participant_id varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin not null,
        scheme varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin not null,
        REV bigint not null,
        REVTYPE tinyint,
        created_on datetime,
        last_updated_on datetime,
        migrated bit,
        new_smp_id varchar(64)  CHARACTER SET utf8 COLLATE utf8_bin,
        old_smp_id varchar(64)  CHARACTER SET utf8 COLLATE utf8_bin,
        primary key (REV, migration_key, participant_id, scheme)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    create table bdmsl_participant_ident_aud (
        id bigint not null,
        REV bigint not null,
        REVTYPE tinyint,
        created_on datetime,
        last_updated_on datetime,
        cname_hash varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin,
        disabled bit,
        naptr_hash varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin,
        naptr_services varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin,
        participant_id varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin,
        scheme varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin,
        fk_smp_id bigint,
        primary key (REV, id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    create table bdmsl_participant_identifier (
        id bigint not null auto_increment,
        created_on datetime,
        last_updated_on datetime,
        cname_hash varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin comment 'MD5 hash value of participant identifier for cname value',
        disabled bit default 0 not null comment 'Is the participant disabled. If disabled, participant does not have record in dns.',
        naptr_hash varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin comment 'Base32 Sha256 hash value of participant identifier for naptr',
        naptr_services varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin comment ' The | separated list of naptr services.',
        participant_id varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin not null comment 'The participant identifier',
        scheme varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin comment 'The scheme of the participant identifier',
        fk_smp_id bigint,
        primary key (id)
    ) comment='Participant identifiers registered on SML' ENGINE=InnoDB DEFAULT CHARSET=utf8;

    create table bdmsl_rev_info (
        id bigint not null auto_increment,
        REVISION_DATE datetime,
        timestamp bigint not null,
        USERNAME varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin,
        primary key (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    create table bdmsl_smp (
        id bigint not null auto_increment comment 'Surrogate key for SMP entity',
        created_on datetime,
        last_updated_on datetime,
        smp_disabled bit default 0 not null comment 'Is the SMP disabled. If disabled, no new participant can be registered on the SMP.',
        dns_record_types varchar(128)  CHARACTER SET utf8 COLLATE utf8_bin comment 'Type of DNS Record when registering/updating participant, all means that both DNS record types are accepted as possible values: [cname,
        naptr,
        all].',
        endpoint_logical_address varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin comment 'URL of SMP server. Value is used for generating NAPTR and domain from URL for CNAME records.',
        endpoint_physical_address varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin comment 'The physical address of the endpoint server.',
        smp_id varchar(64)  CHARACTER SET utf8 COLLATE utf8_bin not null comment 'SMP identifier used by SMP instance to manage data',
        fk_certificate_id bigint not null,
        fk_subdomain_id bigint not null,
        primary key (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    create table bdmsl_smp_aud (
        id bigint not null,
        REV bigint not null,
        REVTYPE tinyint,
        created_on datetime,
        last_updated_on datetime,
        smp_disabled bit,
        dns_record_types varchar(128)  CHARACTER SET utf8 COLLATE utf8_bin,
        endpoint_logical_address varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin,
        endpoint_physical_address varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin,
        smp_id varchar(64)  CHARACTER SET utf8 COLLATE utf8_bin,
        fk_certificate_id bigint,
        fk_subdomain_id bigint,
        primary key (REV, id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    create table bdmsl_subdomain (
        subdomain_id bigint not null auto_increment,
        created_on datetime,
        last_updated_on datetime,
        description varchar(1024)  CHARACTER SET utf8 COLLATE utf8_bin comment 'Domain (short) description.',
        dns_record_types varchar(128)  CHARACTER SET utf8 COLLATE utf8_bin not null comment 'Type of DNS Record when registering/updating participant, all means that both DNS record types are accepted as possible values: [cname,
        naptr,
        all].',
        dns_zone varchar(512)  CHARACTER SET utf8 COLLATE utf8_bin not null comment 'Domain (dns zone) for subdomain.',
        domain_max_participant_count bigint comment 'Maximum number of participant allowed to be registered on the domain',
        smp_max_participant_count bigint comment 'Maximum number of participant allowed to be registered on the SMP',
        participant_id_regexp varchar(1024)  CHARACTER SET utf8 COLLATE utf8_bin not null comment 'Regular expression for the participant identifier validation.',
        smp_ia_cert_policy_oids varchar(1024)  CHARACTER SET utf8 COLLATE utf8_bin comment 'User with issuer-authorized SMP certificate is granted SMP_ROLE only if one of the certificate policy extension matches the list. Value is a list of certificate policy OIDs separated by ,.',
        smp_ia_cert_regexp varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin comment 'User with issuer-authorized SMP certificate is granted SMP_ROLE only if its certificate Subject DN matches configured regexp.',
        smp_url_schemas varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin not null comment 'Protocol that MUST be used for LogicalAddress when registering new SMP, all means both protocols are accepted possible values: [ http,
        https,
        all].',
        subdomain_name varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin not null comment 'subdomain name - part of domain',
        primary key (subdomain_id)
    ) comment='SML handle multiple business domains. This table contains domain specific data' ENGINE=InnoDB DEFAULT CHARSET=utf8;

    create table bdmsl_subdomain_aud (
        subdomain_id bigint not null,
        REV bigint not null,
        REVTYPE tinyint,
        created_on datetime,
        last_updated_on datetime,
        description varchar(1024)  CHARACTER SET utf8 COLLATE utf8_bin,
        dns_record_types varchar(128)  CHARACTER SET utf8 COLLATE utf8_bin,
        dns_zone varchar(512)  CHARACTER SET utf8 COLLATE utf8_bin,
        domain_max_participant_count bigint,
        smp_max_participant_count bigint,
        participant_id_regexp varchar(1024)  CHARACTER SET utf8 COLLATE utf8_bin,
        smp_ia_cert_policy_oids varchar(1024)  CHARACTER SET utf8 COLLATE utf8_bin,
        smp_ia_cert_regexp varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin,
        smp_url_schemas varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin,
        subdomain_name varchar(255)  CHARACTER SET utf8 COLLATE utf8_bin,
        primary key (REV, subdomain_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    alter table bdmsl_certificate 
       add constraint UKo3sq5i83tx8amcur4g4oet95w unique (certificate_id);

    alter table bdmsl_dns_record 
       add constraint sml_dns_record_idx unique (type, name, value);

    create index SML_PARTC_IDENT_ID_IDX 
       on bdmsl_participant_identifier (participant_id);

    create index SML_PARTC_IDENT_SCH_IDX 
       on bdmsl_participant_identifier (scheme);

    alter table bdmsl_participant_identifier 
       add constraint SML_PARTC_IDENT_NKEY_IDX unique (participant_id, scheme, fk_smp_id);

    alter table bdmsl_smp 
       add constraint UKf7ofiybgngnf5h9dfe4eurtcj unique (smp_id);

    alter table bdmsl_subdomain 
       add constraint bdmsl_subdomain_name_idx unique (subdomain_name);

    alter table bdmsl_allowed_wildcard 
       add constraint FK8adg88l4w3pno7yg7h8x5s7ix 
       foreign key (fk_certificate_id) 
       references bdmsl_certificate (id);

    alter table bdmsl_allowed_wildcard_aud 
       add constraint FKsnoxb79lxxpgfd2m3mjmsw8mr 
       foreign key (REV) 
       references bdmsl_rev_info (id);

    alter table bdmsl_certificate 
       add constraint FKinjtivxspwkk8evqch3wx961x 
       foreign key (new_cert_id) 
       references bdmsl_certificate (id);

    alter table bdmsl_certificate_aud 
       add constraint FKhn0pxsby9h6nph5uwe45f8bqf 
       foreign key (REV) 
       references bdmsl_rev_info (id);

    alter table bdmsl_certificate_domain 
       add constraint FKmqsugy77t3egjaifyvv4bqowm 
       foreign key (fk_subdomain_id) 
       references bdmsl_subdomain (subdomain_id);

    alter table bdmsl_certificate_domain_aud 
       add constraint FKe1jqwwrmqxh1qg3j4j838hw6f 
       foreign key (REV) 
       references bdmsl_rev_info (id);

    alter table bdmsl_configuration_aud 
       add constraint FK86tlud8xce1x5oeg200okcv3v 
       foreign key (REV) 
       references bdmsl_rev_info (id);

    alter table bdmsl_dns_record_aud 
       add constraint FKciofgw2b2jvv0tqsg2q7uyh4m 
       foreign key (REV) 
       references bdmsl_rev_info (id);

    alter table bdmsl_migrate_aud 
       add constraint FKqicrt1pfwntojycm43bfo9xof 
       foreign key (REV) 
       references bdmsl_rev_info (id);

    alter table bdmsl_participant_ident_aud 
       add constraint FKn1o91k0h87bxq4eo3kl8sgob5 
       foreign key (REV) 
       references bdmsl_rev_info (id);

    alter table bdmsl_participant_identifier 
       add constraint FK8ftyd77rtcanves77tp0jswrx 
       foreign key (fk_smp_id) 
       references bdmsl_smp (id);

    alter table bdmsl_smp 
       add constraint FKn5xnvpr86joyfsyam39y01o4c 
       foreign key (fk_certificate_id) 
       references bdmsl_certificate (id);

    alter table bdmsl_smp 
       add constraint FKpcty91ma3jiqrr6w0iix723u4 
       foreign key (fk_subdomain_id) 
       references bdmsl_subdomain (subdomain_id);

    alter table bdmsl_smp_aud 
       add constraint FKi5af66kb7j5jv86auhbg4hfl9 
       foreign key (REV) 
       references bdmsl_rev_info (id);

    alter table bdmsl_subdomain_aud 
       add constraint FKqxihyf6otws3f0tbflgomvic4 
       foreign key (REV) 
       references bdmsl_rev_info (id);
