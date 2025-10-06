-- MySQL dump 10.13  Distrib 8.4.6, for Linux (x86_64)
--
-- Host: localhost    Database: domibus
-- ------------------------------------------------------
-- Server version	8.4.6

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `TB_PM_ACTION`
--

LOCK TABLES `TB_PM_ACTION` WRITE;
/*!40000 ALTER TABLE `TB_PM_ACTION` DISABLE KEYS */;
INSERT INTO `TB_PM_ACTION` VALUES (251006080000001000,'en16931CiiInvoiceAction','busdox-docid-qns::urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100::CrossIndustryInvoice##urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0::2.1::D16B',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin'),(251006080000001001,'en16931UblCreditNoteAction','busdox-docid-qns::urn:oasis:names:specification:ubl:schema:xsd:CreditNote-2::CreditNote##urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0::2.1',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin'),(251006080000001002,'en16931UblInvoiceAction','busdox-docid-qns::urn:oasis:names:specification:ubl:schema:xsd:Invoice-2::Invoice##urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0::2.1',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_ACTION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_AGREEMENT`
--

LOCK TABLES `TB_PM_AGREEMENT` WRITE;
/*!40000 ALTER TABLE `TB_PM_AGREEMENT` DISABLE KEYS */;
INSERT INTO `TB_PM_AGREEMENT` VALUES (251006080000001000,'hrAgreement','','urn:fdc:eracun.hr:2023:agreements:ap_provider',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_AGREEMENT` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_BUSINESS_PROCESS`
--

LOCK TABLES `TB_PM_BUSINESS_PROCESS` WRITE;
/*!40000 ALTER TABLE `TB_PM_BUSINESS_PROCESS` DISABLE KEYS */;
INSERT INTO `TB_PM_BUSINESS_PROCESS` VALUES (251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_BUSINESS_PROCESS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_CONFIGURATION`
--

LOCK TABLES `TB_PM_CONFIGURATION` WRITE;
/*!40000 ALTER TABLE `TB_PM_CONFIGURATION` DISABLE KEYS */;
INSERT INTO `TB_PM_CONFIGURATION` VALUES (251006080000001000,251006080000001000,251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_CONFIGURATION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_CONFIGURATION_AUD`
--

LOCK TABLES `TB_PM_CONFIGURATION_AUD` WRITE;
/*!40000 ALTER TABLE `TB_PM_CONFIGURATION_AUD` DISABLE KEYS */;
INSERT INTO `TB_PM_CONFIGURATION_AUD` VALUES (251001070000001000,251001070000001051,0,NULL,NULL,NULL,NULL),(251001070000001000,251006080000001051,2,NULL,NULL,NULL,NULL),(251006080000001000,251006080000001051,0,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `TB_PM_CONFIGURATION_AUD` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_CONFIGURATION_RAW`
--

LOCK TABLES `TB_PM_CONFIGURATION_RAW` WRITE;
/*!40000 ALTER TABLE `TB_PM_CONFIGURATION_RAW` DISABLE KEYS */;
INSERT INTO `TB_PM_CONFIGURATION_RAW` VALUES (251001070000001000,'2025-10-01 07:22:40',_binary '<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<ns2:configuration xmlns:ns2=\"http://domibus.eu/configuration\" party=\"blue_party\">\n  <businessProcesses>\n    <roles>\n      <role name=\"defaultInitiatorRole\"\n            value=\"http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/ns/core/200704/initiator\"/>\n      <role name=\"defaultResponderRole\"\n            value=\"http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/ns/core/200704/responder\"/>\n    </roles>\n    <parties>\n      <partyIdTypes>\n        <partyIdType name=\"partyTypeUrn\"\n                     value=\"urn:oasis:names:tc:ebcore:partyid-type:unregistered\"/>\n      </partyIdTypes>\n      <party name=\"blue_party\"\n             endpoint=\"http://domibus-blue:8080/domibus/services/msh\">\n        <identifier partyId=\"blue_cn\"\n                    partyIdType=\"partyTypeUrn\"/>\n      </party>\n    </parties>\n    <meps>\n      <mep name=\"oneway\"\n           value=\"http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/ns/core/200704/oneWay\"\n           legs=\"0\"/>\n      <binding name=\"push\"\n               value=\"http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/ns/core/200704/push\"/>\n    </meps>\n    <properties>\n      <property name=\"originalSenderProperty\"\n                key=\"originalSender\"\n                datatype=\"string\"\n                required=\"true\"/>\n      <property name=\"finalRecipientProperty\"\n                key=\"finalRecipient\"\n                datatype=\"string\"\n                required=\"true\"/>\n      <propertySet name=\"eDeliveryPropertySet\">\n        <propertyRef property=\"finalRecipientProperty\"/>\n        <propertyRef property=\"originalSenderProperty\"/>\n      </propertySet>\n    </properties>\n    <payloadProfiles>\n      <payload name=\"businessContentPayload\"\n               cid=\"cid:message\"\n               mimeType=\"text/xml\"\n               maxSize=\"0\"\n               required=\"true\"\n               inBody=\"false\"/>\n      <payload name=\"businessContentAttachment\"\n               cid=\"cid:attachment\"\n               mimeType=\"application/octet-stream\"\n               maxSize=\"0\"\n               required=\"false\"\n               inBody=\"false\"/>\n      <payloadProfile name=\"en16931UblInvoiceProfile\"\n                      maxSize=\"40894464\">\n        <attachment name=\"businessContentPayload\"/>\n        <attachment name=\"businessContentAttachment\"/>\n      </payloadProfile>\n      <payloadProfile name=\"en16931UblCreditNoteProfile\"\n                      maxSize=\"40894464\">\n        <attachment name=\"businessContentPayload\"/>\n        <attachment name=\"businessContentAttachment\"/>\n      </payloadProfile>\n      <payloadProfile name=\"en16931CiiInvoiceProfile\"\n                      maxSize=\"40894464\">\n        <attachment name=\"businessContentPayload\"/>\n        <attachment name=\"businessContentAttachment\"/>\n      </payloadProfile>\n    </payloadProfiles>\n    <securities>\n      <security name=\"eDeliveryAS4Policy\"\n                policy=\"eDeliveryAS4Policy.xml\"\n                signatureMethod=\"RSA_SHA256\"/>\n    </securities>\n    <errorHandlings>\n      <errorHandling name=\"demoErrorHandling\"\n                     errorAsResponse=\"true\"\n                     businessErrorNotifyProducer=\"false\"\n                     businessErrorNotifyConsumer=\"false\"\n                     deliveryFailureNotifyProducer=\"false\"/>\n    </errorHandlings>\n    <agreements>\n      <agreement name=\"hrAgreement\"\n                 value=\"urn:fdc:eracun.hr:2023:agreements:ap_provider\"\n                 type=\"\"/>\n    </agreements>\n    <services>\n      <service name=\"hrBillingService\"\n               value=\"urn:fdc:eracun.hr:poacc:en16931:any\"\n               type=\"cenbii-procid-ubl\"/>\n    </services>\n    <actions>\n      <action name=\"en16931UblInvoiceAction\"\n              value=\"busdox-docid-qns::urn:oasis:names:specification:ubl:schema:xsd:Invoice-2::Invoice##urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0::2.1\"/>\n      <action name=\"en16931UblCreditNoteAction\"\n              value=\"busdox-docid-qns::urn:oasis:names:specification:ubl:schema:xsd:CreditNote-2::CreditNote##urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0::2.1\"/>\n      <action name=\"en16931CiiInvoiceAction\"\n              value=\"busdox-docid-qns::urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100::CrossIndustryInvoice##urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0::2.1::D16B\"/>\n    </actions>\n    <as4>\n      <receptionAwareness name=\"receptionAwareness\"\n                          retry=\"12;4;CONSTANT\"\n                          duplicateDetection=\"true\"/>\n      <reliability name=\"AS4Reliability\"\n                   replyPattern=\"response\"\n                   nonRepudiation=\"true\"/>\n    </as4>\n    <legConfigurations>\n      <legConfiguration name=\"en16931UblInvoiceLeg\"\n                        reliability=\"AS4Reliability\"\n                        security=\"eDeliveryAS4Policy\"\n                        receptionAwareness=\"receptionAwareness\"\n                        service=\"hrBillingService\"\n                        action=\"en16931UblInvoiceAction\"\n                        defaultMpc=\"defaultMpc\"\n                        propertySet=\"eDeliveryPropertySet\"\n                        payloadProfile=\"en16931UblInvoiceProfile\"\n                        errorHandling=\"demoErrorHandling\"\n                        compressPayloads=\"true\"/>\n      <legConfiguration name=\"en16931UblCreditNoteLeg\"\n                        reliability=\"AS4Reliability\"\n                        security=\"eDeliveryAS4Policy\"\n                        receptionAwareness=\"receptionAwareness\"\n                        service=\"hrBillingService\"\n                        action=\"en16931UblCreditNoteAction\"\n                        defaultMpc=\"defaultMpc\"\n                        propertySet=\"eDeliveryPropertySet\"\n                        payloadProfile=\"en16931UblCreditNoteProfile\"\n                        errorHandling=\"demoErrorHandling\"\n                        compressPayloads=\"true\"/>\n      <legConfiguration name=\"en16931CiiInvoiceLeg\"\n                        reliability=\"AS4Reliability\"\n                        security=\"eDeliveryAS4Policy\"\n                        receptionAwareness=\"receptionAwareness\"\n                        service=\"hrBillingService\"\n                        action=\"en16931CiiInvoiceAction\"\n                        defaultMpc=\"defaultMpc\"\n                        propertySet=\"eDeliveryPropertySet\"\n                        payloadProfile=\"en16931CiiInvoiceProfile\"\n                        errorHandling=\"demoErrorHandling\"\n                        compressPayloads=\"true\"/>\n    </legConfigurations>\n    <process name=\"hrSendProcess\"\n             initiatorRole=\"defaultInitiatorRole\"\n             responderRole=\"defaultResponderRole\"\n             mep=\"oneway\"\n             binding=\"push\">\n      <initiatorParties>\n        <initiatorParty name=\"blue_party\"/>\n      </initiatorParties>\n      <legs>\n        <leg name=\"en16931UblInvoiceLeg\"/>\n        <leg name=\"en16931UblCreditNoteLeg\"/>\n        <leg name=\"en16931CiiInvoiceLeg\"/>\n      </legs>\n    </process>\n    <process name=\"hrReceiveProcess\"\n             initiatorRole=\"defaultInitiatorRole\"\n             responderRole=\"defaultResponderRole\"\n             mep=\"oneway\"\n             binding=\"push\">\n      <responderParties>\n        <responderParty name=\"blue_party\"/>\n      </responderParties>\n      <legs>\n        <leg name=\"en16931UblInvoiceLeg\"/>\n        <leg name=\"en16931UblCreditNoteLeg\"/>\n        <leg name=\"en16931CiiInvoiceLeg\"/>\n      </legs>\n    </process>\n  </businessProcesses>\n  <mpcs>\n    <mpc name=\"defaultMpc\"\n         retention_downloaded=\"0\"\n         retention_undownloaded=\"-1\"\n         retention_sent=\"-1\"\n         retention_metadata_offset=\"0\"\n         delete_message_metadata=\"false\"\n         max_batch_delete=\"-1\"\n         default=\"true\"\n         enabled=\"true\"\n         qualifiedName=\"http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/ns/core/200704/defaultMPC\"/>\n  </mpcs>\n</ns2:configuration>\n','r','2025-10-01 07:22:40','admin','2025-10-01 07:22:40','admin'),(251006080000001000,'2025-10-06 08:24:02',_binary '<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<ns2:configuration xmlns:ns2=\"http://domibus.eu/configuration\" party=\"blue_party\">\n  <businessProcesses>\n    <roles>\n      <role name=\"defaultInitiatorRole\"\n            value=\"http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/ns/core/200704/initiator\"/>\n      <role name=\"defaultResponderRole\"\n            value=\"http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/ns/core/200704/responder\"/>\n    </roles>\n    <parties>\n      <partyIdTypes>\n        <partyIdType name=\"partyTypeUrn\"\n                     value=\"urn:oasis:names:tc:ebcore:partyid-type:unregistered\"/>\n      </partyIdTypes>\n      <party name=\"blue_party\"\n             endpoint=\"http://domibus-blue:8080/domibus/services/msh\">\n        <identifier partyId=\"blue_cn\"\n                    partyIdType=\"partyTypeUrn\"/>\n      </party>\n    </parties>\n    <meps>\n      <mep name=\"oneway\"\n           value=\"http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/ns/core/200704/oneWay\"\n           legs=\"0\"/>\n      <binding name=\"push\"\n               value=\"http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/ns/core/200704/push\"/>\n    </meps>\n    <properties>\n      <property name=\"originalSenderProperty\"\n                key=\"originalSender\"\n                datatype=\"string\"\n                required=\"true\"/>\n      <property name=\"finalRecipientProperty\"\n                key=\"finalRecipient\"\n                datatype=\"string\"\n                required=\"true\"/>\n      <propertySet name=\"eDeliveryPropertySet\">\n        <propertyRef property=\"finalRecipientProperty\"/>\n        <propertyRef property=\"originalSenderProperty\"/>\n      </propertySet>\n    </properties>\n    <payloadProfiles>\n      <payload name=\"businessContentPayload\"\n               cid=\"cid:message\"\n               mimeType=\"text/xml\"\n               maxSize=\"0\"\n               required=\"true\"\n               inBody=\"false\"/>\n      <payload name=\"businessContentAttachment\"\n               cid=\"cid:attachment\"\n               mimeType=\"application/octet-stream\"\n               maxSize=\"0\"\n               required=\"false\"\n               inBody=\"false\"/>\n      <payloadProfile name=\"en16931UblInvoiceProfile\"\n                      maxSize=\"40894464\">\n        <attachment name=\"businessContentPayload\"/>\n        <attachment name=\"businessContentAttachment\"/>\n      </payloadProfile>\n      <payloadProfile name=\"en16931UblCreditNoteProfile\"\n                      maxSize=\"40894464\">\n        <attachment name=\"businessContentPayload\"/>\n        <attachment name=\"businessContentAttachment\"/>\n      </payloadProfile>\n      <payloadProfile name=\"en16931CiiInvoiceProfile\"\n                      maxSize=\"40894464\">\n        <attachment name=\"businessContentPayload\"/>\n        <attachment name=\"businessContentAttachment\"/>\n      </payloadProfile>\n    </payloadProfiles>\n    <securities>\n      <security name=\"eDeliveryAS4Policy\"\n                policy=\"eDeliveryAS4Policy.xml\"\n                signatureMethod=\"RSA_SHA256\"/>\n    </securities>\n    <errorHandlings>\n      <errorHandling name=\"demoErrorHandling\"\n                     errorAsResponse=\"true\"\n                     businessErrorNotifyProducer=\"false\"\n                     businessErrorNotifyConsumer=\"false\"\n                     deliveryFailureNotifyProducer=\"false\"/>\n    </errorHandlings>\n    <agreements>\n      <agreement name=\"hrAgreement\"\n                 value=\"urn:fdc:eracun.hr:2023:agreements:ap_provider\"\n                 type=\"\"/>\n    </agreements>\n    <services>\n      <service name=\"hrBillingService\"\n               value=\"urn:fdc:eracun.hr:poacc:en16931:any\"\n               type=\"cenbii-procid-ubl\"/>\n    </services>\n    <actions>\n      <action name=\"en16931UblInvoiceAction\"\n              value=\"busdox-docid-qns::urn:oasis:names:specification:ubl:schema:xsd:Invoice-2::Invoice##urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0::2.1\"/>\n      <action name=\"en16931UblCreditNoteAction\"\n              value=\"busdox-docid-qns::urn:oasis:names:specification:ubl:schema:xsd:CreditNote-2::CreditNote##urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0::2.1\"/>\n      <action name=\"en16931CiiInvoiceAction\"\n              value=\"busdox-docid-qns::urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100::CrossIndustryInvoice##urn:cen.eu:en16931:2017#compliant#urn:mfin.gov.hr:cius-2025:1.0#conformant#urn:mfin.gov.hr:ext-2025:1.0::2.1::D16B\"/>\n    </actions>\n    <as4>\n      <receptionAwareness name=\"receptionAwareness\"\n                          retry=\"12;4;CONSTANT\"\n                          duplicateDetection=\"true\"/>\n      <reliability name=\"AS4Reliability\"\n                   replyPattern=\"response\"\n                   nonRepudiation=\"true\"/>\n    </as4>\n    <legConfigurations>\n      <legConfiguration name=\"en16931UblInvoiceLeg\"\n                        reliability=\"AS4Reliability\"\n                        security=\"eDeliveryAS4Policy\"\n                        receptionAwareness=\"receptionAwareness\"\n                        service=\"hrBillingService\"\n                        action=\"en16931UblInvoiceAction\"\n                        defaultMpc=\"defaultMpc\"\n                        propertySet=\"eDeliveryPropertySet\"\n                        payloadProfile=\"en16931UblInvoiceProfile\"\n                        errorHandling=\"demoErrorHandling\"\n                        compressPayloads=\"true\"/>\n      <legConfiguration name=\"en16931UblCreditNoteLeg\"\n                        reliability=\"AS4Reliability\"\n                        security=\"eDeliveryAS4Policy\"\n                        receptionAwareness=\"receptionAwareness\"\n                        service=\"hrBillingService\"\n                        action=\"en16931UblCreditNoteAction\"\n                        defaultMpc=\"defaultMpc\"\n                        propertySet=\"eDeliveryPropertySet\"\n                        payloadProfile=\"en16931UblCreditNoteProfile\"\n                        errorHandling=\"demoErrorHandling\"\n                        compressPayloads=\"true\"/>\n      <legConfiguration name=\"en16931CiiInvoiceLeg\"\n                        reliability=\"AS4Reliability\"\n                        security=\"eDeliveryAS4Policy\"\n                        receptionAwareness=\"receptionAwareness\"\n                        service=\"hrBillingService\"\n                        action=\"en16931CiiInvoiceAction\"\n                        defaultMpc=\"defaultMpc\"\n                        propertySet=\"eDeliveryPropertySet\"\n                        payloadProfile=\"en16931CiiInvoiceProfile\"\n                        errorHandling=\"demoErrorHandling\"\n                        compressPayloads=\"true\"/>\n    </legConfigurations>\n    <process name=\"hrSendProcess\"\n             agreement=\"hrAgreement\"\n             initiatorRole=\"defaultInitiatorRole\"\n             responderRole=\"defaultResponderRole\"\n             mep=\"oneway\"\n             binding=\"push\">\n      <initiatorParties>\n        <initiatorParty name=\"blue_party\"/>\n      </initiatorParties>\n      <legs>\n        <leg name=\"en16931UblInvoiceLeg\"/>\n        <leg name=\"en16931UblCreditNoteLeg\"/>\n        <leg name=\"en16931CiiInvoiceLeg\"/>\n      </legs>\n    </process>\n    <process name=\"hrReceiveProcess\"\n             agreement=\"hrAgreement\"\n             initiatorRole=\"defaultInitiatorRole\"\n             responderRole=\"defaultResponderRole\"\n             mep=\"oneway\"\n             binding=\"push\">\n      <responderParties>\n        <responderParty name=\"blue_party\"/>\n      </responderParties>\n      <legs>\n        <leg name=\"en16931UblInvoiceLeg\"/>\n        <leg name=\"en16931UblCreditNoteLeg\"/>\n        <leg name=\"en16931CiiInvoiceLeg\"/>\n      </legs>\n    </process>\n  </businessProcesses>\n  <mpcs>\n    <mpc name=\"defaultMpc\"\n         retention_downloaded=\"0\"\n         retention_undownloaded=\"-1\"\n         retention_sent=\"-1\"\n         retention_metadata_offset=\"0\"\n         delete_message_metadata=\"false\"\n         max_batch_delete=\"-1\"\n         default=\"true\"\n         enabled=\"true\"\n         qualifiedName=\"http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/ns/core/200704/defaultMPC\"/>\n  </mpcs>\n</ns2:configuration>\n','agr','2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_CONFIGURATION_RAW` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_CONFIGURATION_RAW_AUD`
--

LOCK TABLES `TB_PM_CONFIGURATION_RAW_AUD` WRITE;
/*!40000 ALTER TABLE `TB_PM_CONFIGURATION_RAW_AUD` DISABLE KEYS */;
INSERT INTO `TB_PM_CONFIGURATION_RAW_AUD` VALUES (251001070000001000,251001070000001051,0,'2025-10-01 07:22:40',_binary '','r','1',NULL,NULL),(251006080000001000,251006080000001051,0,'2025-10-06 08:24:02',_binary '','agr','1',NULL,NULL);
/*!40000 ALTER TABLE `TB_PM_CONFIGURATION_RAW_AUD` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_ERROR_HANDLING`
--

LOCK TABLES `TB_PM_ERROR_HANDLING` WRITE;
/*!40000 ALTER TABLE `TB_PM_ERROR_HANDLING` DISABLE KEYS */;
INSERT INTO `TB_PM_ERROR_HANDLING` VALUES (251006080000001000,_binary '\0',_binary '\0',_binary '\0',_binary '','demoErrorHandling',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_ERROR_HANDLING` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_JOIN_PAYLOAD_PROFILE`
--

LOCK TABLES `TB_PM_JOIN_PAYLOAD_PROFILE` WRITE;
/*!40000 ALTER TABLE `TB_PM_JOIN_PAYLOAD_PROFILE` DISABLE KEYS */;
INSERT INTO `TB_PM_JOIN_PAYLOAD_PROFILE` VALUES (251006080000001000,251006080000001000,'2025-10-06 08:24:02','DOMIBUS',NULL,NULL,7),(251006080000001000,251006080000001001,'2025-10-06 08:24:02','DOMIBUS',NULL,NULL,8),(251006080000001001,251006080000001000,'2025-10-06 08:24:02','DOMIBUS',NULL,NULL,9),(251006080000001001,251006080000001001,'2025-10-06 08:24:02','DOMIBUS',NULL,NULL,10),(251006080000001002,251006080000001000,'2025-10-06 08:24:02','DOMIBUS',NULL,NULL,11),(251006080000001002,251006080000001001,'2025-10-06 08:24:02','DOMIBUS',NULL,NULL,12);
/*!40000 ALTER TABLE `TB_PM_JOIN_PAYLOAD_PROFILE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_JOIN_PROCESS_INIT_PARTY`
--

LOCK TABLES `TB_PM_JOIN_PROCESS_INIT_PARTY` WRITE;
/*!40000 ALTER TABLE `TB_PM_JOIN_PROCESS_INIT_PARTY` DISABLE KEYS */;
INSERT INTO `TB_PM_JOIN_PROCESS_INIT_PARTY` VALUES (251006080000001000,251006080000001000,'2025-10-06 08:24:02','DOMIBUS',NULL,NULL,5);
/*!40000 ALTER TABLE `TB_PM_JOIN_PROCESS_INIT_PARTY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_JOIN_PROCESS_LEG`
--

LOCK TABLES `TB_PM_JOIN_PROCESS_LEG` WRITE;
/*!40000 ALTER TABLE `TB_PM_JOIN_PROCESS_LEG` DISABLE KEYS */;
INSERT INTO `TB_PM_JOIN_PROCESS_LEG` VALUES (251006080000001000,251006080000001000,'2025-10-06 08:24:02','DOMIBUS',NULL,NULL,7),(251006080000001000,251006080000001001,'2025-10-06 08:24:02','DOMIBUS',NULL,NULL,8),(251006080000001000,251006080000001002,'2025-10-06 08:24:02','DOMIBUS',NULL,NULL,9),(251006080000001001,251006080000001000,'2025-10-06 08:24:02','DOMIBUS',NULL,NULL,10),(251006080000001001,251006080000001001,'2025-10-06 08:24:02','DOMIBUS',NULL,NULL,11),(251006080000001001,251006080000001002,'2025-10-06 08:24:02','DOMIBUS',NULL,NULL,12);
/*!40000 ALTER TABLE `TB_PM_JOIN_PROCESS_LEG` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_JOIN_PROCESS_RESP_PARTY`
--

LOCK TABLES `TB_PM_JOIN_PROCESS_RESP_PARTY` WRITE;
/*!40000 ALTER TABLE `TB_PM_JOIN_PROCESS_RESP_PARTY` DISABLE KEYS */;
INSERT INTO `TB_PM_JOIN_PROCESS_RESP_PARTY` VALUES (251006080000001001,251006080000001000,'2025-10-06 08:24:02','DOMIBUS',NULL,NULL,5);
/*!40000 ALTER TABLE `TB_PM_JOIN_PROCESS_RESP_PARTY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_JOIN_PROPERTY_SET`
--

LOCK TABLES `TB_PM_JOIN_PROPERTY_SET` WRITE;
/*!40000 ALTER TABLE `TB_PM_JOIN_PROPERTY_SET` DISABLE KEYS */;
INSERT INTO `TB_PM_JOIN_PROPERTY_SET` VALUES (251006080000001000,251006080000001000,'2025-10-06 08:24:02','DOMIBUS',NULL,NULL,3),(251006080000001000,251006080000001001,'2025-10-06 08:24:02','DOMIBUS',NULL,NULL,4);
/*!40000 ALTER TABLE `TB_PM_JOIN_PROPERTY_SET` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_LEG`
--

LOCK TABLES `TB_PM_LEG` WRITE;
/*!40000 ALTER TABLE `TB_PM_LEG` DISABLE KEYS */;
INSERT INTO `TB_PM_LEG` VALUES (251006080000001000,_binary '','en16931CiiInvoiceLeg',251006080000001000,251006080000001000,251006080000001000,251006080000001001,251006080000001000,251006080000001000,251006080000001000,251006080000001000,251006080000001000,251006080000001000,NULL,NULL,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin'),(251006080000001001,_binary '','en16931UblCreditNoteLeg',251006080000001001,251006080000001000,251006080000001000,251006080000001000,251006080000001000,251006080000001000,251006080000001000,251006080000001000,251006080000001000,251006080000001000,NULL,NULL,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin'),(251006080000001002,_binary '','en16931UblInvoiceLeg',251006080000001002,251006080000001000,251006080000001000,251006080000001002,251006080000001000,251006080000001000,251006080000001000,251006080000001000,251006080000001000,251006080000001000,NULL,NULL,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_LEG` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_LEG_MPC`
--

LOCK TABLES `TB_PM_LEG_MPC` WRITE;
/*!40000 ALTER TABLE `TB_PM_LEG_MPC` DISABLE KEYS */;
/*!40000 ALTER TABLE `TB_PM_LEG_MPC` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_MEP`
--

LOCK TABLES `TB_PM_MEP` WRITE;
/*!40000 ALTER TABLE `TB_PM_MEP` DISABLE KEYS */;
INSERT INTO `TB_PM_MEP` VALUES (251006080000001000,0,'oneway','http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/ns/core/200704/oneWay',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_MEP` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_MEP_BINDING`
--

LOCK TABLES `TB_PM_MEP_BINDING` WRITE;
/*!40000 ALTER TABLE `TB_PM_MEP_BINDING` DISABLE KEYS */;
INSERT INTO `TB_PM_MEP_BINDING` VALUES (251006080000001000,'push','http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/ns/core/200704/push',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_MEP_BINDING` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_MESSAGE_PROPERTY`
--

LOCK TABLES `TB_PM_MESSAGE_PROPERTY` WRITE;
/*!40000 ALTER TABLE `TB_PM_MESSAGE_PROPERTY` DISABLE KEYS */;
INSERT INTO `TB_PM_MESSAGE_PROPERTY` VALUES (251006080000001000,'string','finalRecipient','finalRecipientProperty',_binary '',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin'),(251006080000001001,'string','originalSender','originalSenderProperty',_binary '',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_MESSAGE_PROPERTY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_MESSAGE_PROPERTY_SET`
--

LOCK TABLES `TB_PM_MESSAGE_PROPERTY_SET` WRITE;
/*!40000 ALTER TABLE `TB_PM_MESSAGE_PROPERTY_SET` DISABLE KEYS */;
INSERT INTO `TB_PM_MESSAGE_PROPERTY_SET` VALUES (251006080000001000,'eDeliveryPropertySet',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_MESSAGE_PROPERTY_SET` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_MPC`
--

LOCK TABLES `TB_PM_MPC` WRITE;
/*!40000 ALTER TABLE `TB_PM_MPC` DISABLE KEYS */;
INSERT INTO `TB_PM_MPC` VALUES (251006080000001000,_binary '',_binary '','defaultMpc','http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/ns/core/200704/defaultMPC',0,-1,-1,_binary '\0',0,-1,251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_MPC` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_PARTY`
--

LOCK TABLES `TB_PM_PARTY` WRITE;
/*!40000 ALTER TABLE `TB_PM_PARTY` DISABLE KEYS */;
INSERT INTO `TB_PM_PARTY` VALUES (251006080000001000,'http://domibus-blue:8080/domibus/services/msh','blue_party',NULL,NULL,251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_PARTY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_PARTY_AUD`
--

LOCK TABLES `TB_PM_PARTY_AUD` WRITE;
/*!40000 ALTER TABLE `TB_PM_PARTY_AUD` DISABLE KEYS */;
INSERT INTO `TB_PM_PARTY_AUD` VALUES (251001070000001000,251001070000001051,0,'http://domibus-blue:8080/domibus/services/msh',_binary '','blue_party',_binary '',NULL,_binary '\0',NULL,_binary '\0'),(251001070000001000,251006080000001051,2,NULL,_binary '',NULL,_binary '',NULL,_binary '\0',NULL,_binary '\0'),(251006080000001000,251006080000001051,0,'http://domibus-blue:8080/domibus/services/msh',_binary '','blue_party',_binary '',NULL,_binary '\0',NULL,_binary '\0');
/*!40000 ALTER TABLE `TB_PM_PARTY_AUD` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_PARTY_IDENTIFIER`
--

LOCK TABLES `TB_PM_PARTY_IDENTIFIER` WRITE;
/*!40000 ALTER TABLE `TB_PM_PARTY_IDENTIFIER` DISABLE KEYS */;
INSERT INTO `TB_PM_PARTY_IDENTIFIER` VALUES (251006080000001000,'blue_cn',251006080000001000,251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_PARTY_IDENTIFIER` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_PARTY_IDENTIFIER_AUD`
--

LOCK TABLES `TB_PM_PARTY_IDENTIFIER_AUD` WRITE;
/*!40000 ALTER TABLE `TB_PM_PARTY_IDENTIFIER_AUD` DISABLE KEYS */;
INSERT INTO `TB_PM_PARTY_IDENTIFIER_AUD` VALUES (251001070000001000,251001070000001051,0,251001070000001000),(251001070000001000,251006080000001051,2,251001070000001000),(251006080000001000,251006080000001051,0,251006080000001000);
/*!40000 ALTER TABLE `TB_PM_PARTY_IDENTIFIER_AUD` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_PARTY_ID_TYPE`
--

LOCK TABLES `TB_PM_PARTY_ID_TYPE` WRITE;
/*!40000 ALTER TABLE `TB_PM_PARTY_ID_TYPE` DISABLE KEYS */;
INSERT INTO `TB_PM_PARTY_ID_TYPE` VALUES (251006080000001000,'partyTypeUrn','urn:oasis:names:tc:ebcore:partyid-type:unregistered',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_PARTY_ID_TYPE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_PARTY_ID_TYPE_AUD`
--

LOCK TABLES `TB_PM_PARTY_ID_TYPE_AUD` WRITE;
/*!40000 ALTER TABLE `TB_PM_PARTY_ID_TYPE_AUD` DISABLE KEYS */;
INSERT INTO `TB_PM_PARTY_ID_TYPE_AUD` VALUES (251001070000001000,251001070000001051,0,'partyTypeUrn',_binary '','urn:oasis:names:tc:ebcore:partyid-type:unregistered',_binary ''),(251001070000001000,251006080000001051,2,NULL,_binary '',NULL,_binary ''),(251006080000001000,251006080000001051,0,'partyTypeUrn',_binary '','urn:oasis:names:tc:ebcore:partyid-type:unregistered',_binary '');
/*!40000 ALTER TABLE `TB_PM_PARTY_ID_TYPE_AUD` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_PAYLOAD`
--

LOCK TABLES `TB_PM_PAYLOAD` WRITE;
/*!40000 ALTER TABLE `TB_PM_PAYLOAD` DISABLE KEYS */;
INSERT INTO `TB_PM_PAYLOAD` VALUES (251006080000001000,'cid:attachment',_binary '\0',0,'application/octet-stream','businessContentAttachment',_binary '\0',NULL,251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin'),(251006080000001001,'cid:message',_binary '\0',0,'text/xml','businessContentPayload',_binary '',NULL,251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_PAYLOAD` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_PAYLOAD_PROFILE`
--

LOCK TABLES `TB_PM_PAYLOAD_PROFILE` WRITE;
/*!40000 ALTER TABLE `TB_PM_PAYLOAD_PROFILE` DISABLE KEYS */;
INSERT INTO `TB_PM_PAYLOAD_PROFILE` VALUES (251006080000001000,40894464,'en16931UblCreditNoteProfile',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin'),(251006080000001001,40894464,'en16931CiiInvoiceProfile',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin'),(251006080000001002,40894464,'en16931UblInvoiceProfile',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_PAYLOAD_PROFILE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_PROCESS`
--

LOCK TABLES `TB_PM_PROCESS` WRITE;
/*!40000 ALTER TABLE `TB_PM_PROCESS` DISABLE KEYS */;
INSERT INTO `TB_PM_PROCESS` VALUES (251006080000001000,'hrSendProcess',251006080000001000,251006080000001000,251006080000001000,251006080000001000,251006080000001001,251006080000001000,_binary '\0',_binary '','2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin'),(251006080000001001,'hrReceiveProcess',251006080000001000,251006080000001000,251006080000001000,251006080000001000,251006080000001001,251006080000001000,_binary '',_binary '\0','2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_PROCESS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_RECEPTION_AWARENESS`
--

LOCK TABLES `TB_PM_RECEPTION_AWARENESS` WRITE;
/*!40000 ALTER TABLE `TB_PM_RECEPTION_AWARENESS` DISABLE KEYS */;
INSERT INTO `TB_PM_RECEPTION_AWARENESS` VALUES (251006080000001000,_binary '','receptionAwareness',4,12,0,0,'CONSTANT',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_RECEPTION_AWARENESS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_RELIABILITY`
--

LOCK TABLES `TB_PM_RELIABILITY` WRITE;
/*!40000 ALTER TABLE `TB_PM_RELIABILITY` DISABLE KEYS */;
INSERT INTO `TB_PM_RELIABILITY` VALUES (251006080000001000,'AS4Reliability',_binary '','RESPONSE',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_RELIABILITY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_ROLE`
--

LOCK TABLES `TB_PM_ROLE` WRITE;
/*!40000 ALTER TABLE `TB_PM_ROLE` DISABLE KEYS */;
INSERT INTO `TB_PM_ROLE` VALUES (251006080000001000,'defaultInitiatorRole','http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/ns/core/200704/initiator',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin'),(251006080000001001,'defaultResponderRole','http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/ns/core/200704/responder',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_ROLE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_SECURITY`
--

LOCK TABLES `TB_PM_SECURITY` WRITE;
/*!40000 ALTER TABLE `TB_PM_SECURITY` DISABLE KEYS */;
INSERT INTO `TB_PM_SECURITY` VALUES (251006080000001000,'eDeliveryAS4Policy','eDeliveryAS4Policy.xml','RSA_SHA256',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin',NULL);
/*!40000 ALTER TABLE `TB_PM_SECURITY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_SERVICE`
--

LOCK TABLES `TB_PM_SERVICE` WRITE;
/*!40000 ALTER TABLE `TB_PM_SERVICE` DISABLE KEYS */;
INSERT INTO `TB_PM_SERVICE` VALUES (251006080000001000,'hrBillingService','cenbii-procid-ubl','urn:fdc:eracun.hr:poacc:en16931:any',251006080000001000,'2025-10-06 08:24:02','admin','2025-10-06 08:24:02','admin');
/*!40000 ALTER TABLE `TB_PM_SERVICE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `TB_PM_SPLITTING`
--

LOCK TABLES `TB_PM_SPLITTING` WRITE;
/*!40000 ALTER TABLE `TB_PM_SPLITTING` DISABLE KEYS */;
/*!40000 ALTER TABLE `TB_PM_SPLITTING` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-06  8:32:33
