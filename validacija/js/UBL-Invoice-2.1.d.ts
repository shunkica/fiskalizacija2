// Generated TypeScript interfaces from XSD schema
// Schema TargetNamespace: urn:oasis:names:specification:ubl:schema:xsd:Invoice-2

export type Invoice = InvoiceType;

// --- Type Definitions ---

export interface InvoiceType {
  UBLExtensions?: ext_UBLExtensionsType;
  UBLVersionID?: cbc_UBLVersionIDType;
  CustomizationID?: cbc_CustomizationIDType;
  ProfileID?: cbc_ProfileIDType;
  ProfileExecutionID?: cbc_ProfileExecutionIDType;
  ID: cbc_IDType;
  CopyIndicator?: cbc_CopyIndicatorType;
  UUID?: cbc_UUIDType;
  IssueDate: cbc_IssueDateType;
  IssueTime?: cbc_IssueTimeType;
  DueDate?: cbc_DueDateType;
  InvoiceTypeCode?: cbc_InvoiceTypeCodeType;
  Note?: cbc_NoteType | cbc_NoteType[];
  TaxPointDate?: cbc_TaxPointDateType;
  DocumentCurrencyCode?: cbc_DocumentCurrencyCodeType;
  TaxCurrencyCode?: cbc_TaxCurrencyCodeType;
  PricingCurrencyCode?: cbc_PricingCurrencyCodeType;
  PaymentCurrencyCode?: cbc_PaymentCurrencyCodeType;
  PaymentAlternativeCurrencyCode?: cbc_PaymentAlternativeCurrencyCodeType;
  AccountingCostCode?: cbc_AccountingCostCodeType;
  AccountingCost?: cbc_AccountingCostType;
  LineCountNumeric?: cbc_LineCountNumericType;
  BuyerReference?: cbc_BuyerReferenceType;
  InvoicePeriod?: cac_PeriodType | cac_PeriodType[];
  OrderReference?: cac_OrderReferenceType;
  BillingReference?: cac_BillingReferenceType | cac_BillingReferenceType[];
  DespatchDocumentReference?: cac_DocumentReferenceType | cac_DocumentReferenceType[];
  ReceiptDocumentReference?: cac_DocumentReferenceType | cac_DocumentReferenceType[];
  StatementDocumentReference?: cac_DocumentReferenceType | cac_DocumentReferenceType[];
  OriginatorDocumentReference?: cac_DocumentReferenceType | cac_DocumentReferenceType[];
  ContractDocumentReference?: cac_DocumentReferenceType | cac_DocumentReferenceType[];
  AdditionalDocumentReference?: cac_DocumentReferenceType | cac_DocumentReferenceType[];
  ProjectReference?: cac_ProjectReferenceType | cac_ProjectReferenceType[];
  Signature?: cac_SignatureType | cac_SignatureType[];
  AccountingSupplierParty: cac_SupplierPartyType;
  AccountingCustomerParty: cac_CustomerPartyType;
  PayeeParty?: cac_PartyType;
  BuyerCustomerParty?: cac_CustomerPartyType;
  SellerSupplierParty?: cac_SupplierPartyType;
  TaxRepresentativeParty?: cac_PartyType;
  Delivery?: cac_DeliveryType | cac_DeliveryType[];
  DeliveryTerms?: cac_DeliveryTermsType;
  PaymentMeans?: cac_PaymentMeansType | cac_PaymentMeansType[];
  PaymentTerms?: cac_PaymentTermsType | cac_PaymentTermsType[];
  PrepaidPayment?: cac_PaymentType | cac_PaymentType[];
  AllowanceCharge?: cac_AllowanceChargeType | cac_AllowanceChargeType[];
  TaxExchangeRate?: cac_ExchangeRateType;
  PricingExchangeRate?: cac_ExchangeRateType;
  PaymentExchangeRate?: cac_ExchangeRateType;
  PaymentAlternativeExchangeRate?: cac_ExchangeRateType;
  TaxTotal?: cac_TaxTotalType | cac_TaxTotalType[];
  WithholdingTaxTotal?: cac_TaxTotalType | cac_TaxTotalType[];
  LegalMonetaryTotal: cac_MonetaryTotalType;
  InvoiceLine: cac_InvoiceLineType | cac_InvoiceLineType[];
}

export interface cac_AddressLineType {
  Line: cbc_LineType;
}

export interface cac_AddressType {
  ID?: cbc_IDType;
  AddressTypeCode?: cbc_AddressTypeCodeType;
  AddressFormatCode?: cbc_AddressFormatCodeType;
  Postbox?: cbc_PostboxType;
  Floor?: cbc_FloorType;
  Room?: cbc_RoomType;
  StreetName?: cbc_StreetNameType;
  AdditionalStreetName?: cbc_AdditionalStreetNameType;
  BlockName?: cbc_BlockNameType;
  BuildingName?: cbc_BuildingNameType;
  BuildingNumber?: cbc_BuildingNumberType;
  InhouseMail?: cbc_InhouseMailType;
  Department?: cbc_DepartmentType;
  MarkAttention?: cbc_MarkAttentionType;
  MarkCare?: cbc_MarkCareType;
  PlotIdentification?: cbc_PlotIdentificationType;
  CitySubdivisionName?: cbc_CitySubdivisionNameType;
  CityName?: cbc_CityNameType;
  PostalZone?: cbc_PostalZoneType;
  CountrySubentity?: cbc_CountrySubentityType;
  CountrySubentityCode?: cbc_CountrySubentityCodeType;
  Region?: cbc_RegionType;
  District?: cbc_DistrictType;
  TimezoneOffset?: cbc_TimezoneOffsetType;
  AddressLine?: cac_AddressLineType | cac_AddressLineType[];
  Country?: cac_CountryType;
  LocationCoordinate?: cac_LocationCoordinateType | cac_LocationCoordinateType[];
}

export interface cac_AirTransportType {
  AircraftID: cbc_AircraftIDType;
}

export interface cac_AllowanceChargeType {
  ID?: cbc_IDType;
  ChargeIndicator: cbc_ChargeIndicatorType;
  AllowanceChargeReasonCode?: cbc_AllowanceChargeReasonCodeType;
  AllowanceChargeReason?: cbc_AllowanceChargeReasonType | cbc_AllowanceChargeReasonType[];
  MultiplierFactorNumeric?: cbc_MultiplierFactorNumericType;
  PrepaidIndicator?: cbc_PrepaidIndicatorType;
  SequenceNumeric?: cbc_SequenceNumericType;
  Amount: cbc_AmountType;
  BaseAmount?: cbc_BaseAmountType;
  AccountingCostCode?: cbc_AccountingCostCodeType;
  AccountingCost?: cbc_AccountingCostType;
  PerUnitAmount?: cbc_PerUnitAmountType;
  TaxCategory?: cac_TaxCategoryType | cac_TaxCategoryType[];
  TaxTotal?: cac_TaxTotalType;
  PaymentMeans?: cac_PaymentMeansType | cac_PaymentMeansType[];
}

export interface cac_AttachmentType {
  EmbeddedDocumentBinaryObject?: cbc_EmbeddedDocumentBinaryObjectType;
  ExternalReference?: cac_ExternalReferenceType;
}

export interface cac_BillingReferenceLineType {
  ID: cbc_IDType;
  Amount?: cbc_AmountType;
  AllowanceCharge?: cac_AllowanceChargeType | cac_AllowanceChargeType[];
}

export interface cac_BillingReferenceType {
  InvoiceDocumentReference?: cac_DocumentReferenceType;
  SelfBilledInvoiceDocumentReference?: cac_DocumentReferenceType;
  CreditNoteDocumentReference?: cac_DocumentReferenceType;
  SelfBilledCreditNoteDocumentReference?: cac_DocumentReferenceType;
  DebitNoteDocumentReference?: cac_DocumentReferenceType;
  ReminderDocumentReference?: cac_DocumentReferenceType;
  AdditionalDocumentReference?: cac_DocumentReferenceType;
  BillingReferenceLine?: cac_BillingReferenceLineType | cac_BillingReferenceLineType[];
}

export interface cac_BranchType {
  ID?: cbc_IDType;
  Name?: cbc_NameType;
  FinancialInstitution?: cac_FinancialInstitutionType;
  Address?: cac_AddressType;
}

export interface cac_CardAccountType {
  PrimaryAccountNumberID: cbc_PrimaryAccountNumberIDType;
  NetworkID: cbc_NetworkIDType;
  CardTypeCode?: cbc_CardTypeCodeType;
  ValidityStartDate?: cbc_ValidityStartDateType;
  ExpiryDate?: cbc_ExpiryDateType;
  IssuerID?: cbc_IssuerIDType;
  IssueNumberID?: cbc_IssueNumberIDType;
  CV2ID?: cbc_CV2IDType;
  CardChipCode?: cbc_CardChipCodeType;
  ChipApplicationID?: cbc_ChipApplicationIDType;
  HolderName?: cbc_HolderNameType;
}

export interface cac_CertificateType {
  ID: cbc_IDType;
  CertificateTypeCode: cbc_CertificateTypeCodeType;
  CertificateType: cbc_CertificateTypeType;
  Remarks?: cbc_RemarksType | cbc_RemarksType[];
  IssuerParty: cac_PartyType;
  DocumentReference?: cac_DocumentReferenceType | cac_DocumentReferenceType[];
  Signature?: cac_SignatureType | cac_SignatureType[];
}

export interface cac_ClauseType {
  ID?: cbc_IDType;
  Content?: cbc_ContentType | cbc_ContentType[];
}

export interface cac_CommodityClassificationType {
  NatureCode?: cbc_NatureCodeType;
  CargoTypeCode?: cbc_CargoTypeCodeType;
  CommodityCode?: cbc_CommodityCodeType;
  ItemClassificationCode?: cbc_ItemClassificationCodeType;
}

export interface cac_CommunicationType {
  ChannelCode?: cbc_ChannelCodeType;
  Channel?: cbc_ChannelType;
  Value?: cbc_ValueType;
}

export interface cac_ConditionType {
  AttributeID: cbc_AttributeIDType;
  Measure?: cbc_MeasureType;
  Description?: cbc_DescriptionType | cbc_DescriptionType[];
  MinimumMeasure?: cbc_MinimumMeasureType;
  MaximumMeasure?: cbc_MaximumMeasureType;
}

export interface cac_ConsignmentType {
  ID: cbc_IDType;
  CarrierAssignedID?: cbc_CarrierAssignedIDType;
  ConsigneeAssignedID?: cbc_ConsigneeAssignedIDType;
  ConsignorAssignedID?: cbc_ConsignorAssignedIDType;
  FreightForwarderAssignedID?: cbc_FreightForwarderAssignedIDType;
  BrokerAssignedID?: cbc_BrokerAssignedIDType;
  ContractedCarrierAssignedID?: cbc_ContractedCarrierAssignedIDType;
  PerformingCarrierAssignedID?: cbc_PerformingCarrierAssignedIDType;
  SummaryDescription?: cbc_SummaryDescriptionType | cbc_SummaryDescriptionType[];
  TotalInvoiceAmount?: cbc_TotalInvoiceAmountType;
  DeclaredCustomsValueAmount?: cbc_DeclaredCustomsValueAmountType;
  TariffDescription?: cbc_TariffDescriptionType | cbc_TariffDescriptionType[];
  TariffCode?: cbc_TariffCodeType;
  InsurancePremiumAmount?: cbc_InsurancePremiumAmountType;
  GrossWeightMeasure?: cbc_GrossWeightMeasureType;
  NetWeightMeasure?: cbc_NetWeightMeasureType;
  NetNetWeightMeasure?: cbc_NetNetWeightMeasureType;
  ChargeableWeightMeasure?: cbc_ChargeableWeightMeasureType;
  GrossVolumeMeasure?: cbc_GrossVolumeMeasureType;
  NetVolumeMeasure?: cbc_NetVolumeMeasureType;
  LoadingLengthMeasure?: cbc_LoadingLengthMeasureType;
  Remarks?: cbc_RemarksType | cbc_RemarksType[];
  HazardousRiskIndicator?: cbc_HazardousRiskIndicatorType;
  AnimalFoodIndicator?: cbc_AnimalFoodIndicatorType;
  HumanFoodIndicator?: cbc_HumanFoodIndicatorType;
  LivestockIndicator?: cbc_LivestockIndicatorType;
  BulkCargoIndicator?: cbc_BulkCargoIndicatorType;
  ContainerizedIndicator?: cbc_ContainerizedIndicatorType;
  GeneralCargoIndicator?: cbc_GeneralCargoIndicatorType;
  SpecialSecurityIndicator?: cbc_SpecialSecurityIndicatorType;
  ThirdPartyPayerIndicator?: cbc_ThirdPartyPayerIndicatorType;
  CarrierServiceInstructions?: cbc_CarrierServiceInstructionsType | cbc_CarrierServiceInstructionsType[];
  CustomsClearanceServiceInstructions?: cbc_CustomsClearanceServiceInstructionsType | cbc_CustomsClearanceServiceInstructionsType[];
  ForwarderServiceInstructions?: cbc_ForwarderServiceInstructionsType | cbc_ForwarderServiceInstructionsType[];
  SpecialServiceInstructions?: cbc_SpecialServiceInstructionsType | cbc_SpecialServiceInstructionsType[];
  SequenceID?: cbc_SequenceIDType;
  ShippingPriorityLevelCode?: cbc_ShippingPriorityLevelCodeType;
  HandlingCode?: cbc_HandlingCodeType;
  HandlingInstructions?: cbc_HandlingInstructionsType | cbc_HandlingInstructionsType[];
  Information?: cbc_InformationType | cbc_InformationType[];
  TotalGoodsItemQuantity?: cbc_TotalGoodsItemQuantityType;
  TotalTransportHandlingUnitQuantity?: cbc_TotalTransportHandlingUnitQuantityType;
  InsuranceValueAmount?: cbc_InsuranceValueAmountType;
  DeclaredForCarriageValueAmount?: cbc_DeclaredForCarriageValueAmountType;
  DeclaredStatisticsValueAmount?: cbc_DeclaredStatisticsValueAmountType;
  FreeOnBoardValueAmount?: cbc_FreeOnBoardValueAmountType;
  SpecialInstructions?: cbc_SpecialInstructionsType | cbc_SpecialInstructionsType[];
  SplitConsignmentIndicator?: cbc_SplitConsignmentIndicatorType;
  DeliveryInstructions?: cbc_DeliveryInstructionsType | cbc_DeliveryInstructionsType[];
  ConsignmentQuantity?: cbc_ConsignmentQuantityType;
  ConsolidatableIndicator?: cbc_ConsolidatableIndicatorType;
  HaulageInstructions?: cbc_HaulageInstructionsType | cbc_HaulageInstructionsType[];
  LoadingSequenceID?: cbc_LoadingSequenceIDType;
  ChildConsignmentQuantity?: cbc_ChildConsignmentQuantityType;
  TotalPackagesQuantity?: cbc_TotalPackagesQuantityType;
  ConsolidatedShipment?: cac_ShipmentType | cac_ShipmentType[];
  CustomsDeclaration?: cac_CustomsDeclarationType | cac_CustomsDeclarationType[];
  RequestedPickupTransportEvent?: cac_TransportEventType;
  RequestedDeliveryTransportEvent?: cac_TransportEventType;
  PlannedPickupTransportEvent?: cac_TransportEventType;
  PlannedDeliveryTransportEvent?: cac_TransportEventType;
  Status?: cac_StatusType | cac_StatusType[];
  ChildConsignment?: cac_ConsignmentType | cac_ConsignmentType[];
  ConsigneeParty?: cac_PartyType;
  ExporterParty?: cac_PartyType;
  ConsignorParty?: cac_PartyType;
  ImporterParty?: cac_PartyType;
  CarrierParty?: cac_PartyType;
  FreightForwarderParty?: cac_PartyType;
  NotifyParty?: cac_PartyType;
  OriginalDespatchParty?: cac_PartyType;
  FinalDeliveryParty?: cac_PartyType;
  PerformingCarrierParty?: cac_PartyType;
  SubstituteCarrierParty?: cac_PartyType;
  LogisticsOperatorParty?: cac_PartyType;
  TransportAdvisorParty?: cac_PartyType;
  HazardousItemNotificationParty?: cac_PartyType;
  InsuranceParty?: cac_PartyType;
  MortgageHolderParty?: cac_PartyType;
  BillOfLadingHolderParty?: cac_PartyType;
  OriginalDepartureCountry?: cac_CountryType;
  FinalDestinationCountry?: cac_CountryType;
  TransitCountry?: cac_CountryType | cac_CountryType[];
  TransportContract?: cac_ContractType;
  TransportEvent?: cac_TransportEventType | cac_TransportEventType[];
  OriginalDespatchTransportationService?: cac_TransportationServiceType;
  FinalDeliveryTransportationService?: cac_TransportationServiceType;
  DeliveryTerms?: cac_DeliveryTermsType;
  PaymentTerms?: cac_PaymentTermsType;
  CollectPaymentTerms?: cac_PaymentTermsType;
  DisbursementPaymentTerms?: cac_PaymentTermsType;
  PrepaidPaymentTerms?: cac_PaymentTermsType;
  FreightAllowanceCharge?: cac_AllowanceChargeType | cac_AllowanceChargeType[];
  ExtraAllowanceCharge?: cac_AllowanceChargeType | cac_AllowanceChargeType[];
  MainCarriageShipmentStage?: cac_ShipmentStageType | cac_ShipmentStageType[];
  PreCarriageShipmentStage?: cac_ShipmentStageType | cac_ShipmentStageType[];
  OnCarriageShipmentStage?: cac_ShipmentStageType | cac_ShipmentStageType[];
  TransportHandlingUnit?: cac_TransportHandlingUnitType | cac_TransportHandlingUnitType[];
  FirstArrivalPortLocation?: cac_LocationType;
  LastExitPortLocation?: cac_LocationType;
}

export interface cac_ContactType {
  ID?: cbc_IDType;
  Name?: cbc_NameType;
  Telephone?: cbc_TelephoneType;
  Telefax?: cbc_TelefaxType;
  ElectronicMail?: cbc_ElectronicMailType;
  Note?: cbc_NoteType | cbc_NoteType[];
  OtherCommunication?: cac_CommunicationType | cac_CommunicationType[];
}

export interface cac_ContractType {
  ID?: cbc_IDType;
  IssueDate?: cbc_IssueDateType;
  IssueTime?: cbc_IssueTimeType;
  NominationDate?: cbc_NominationDateType;
  NominationTime?: cbc_NominationTimeType;
  ContractTypeCode?: cbc_ContractTypeCodeType;
  ContractType?: cbc_ContractTypeType;
  Note?: cbc_NoteType | cbc_NoteType[];
  VersionID?: cbc_VersionIDType;
  Description?: cbc_DescriptionType | cbc_DescriptionType[];
  ValidityPeriod?: cac_PeriodType;
  ContractDocumentReference?: cac_DocumentReferenceType | cac_DocumentReferenceType[];
  NominationPeriod?: cac_PeriodType;
  ContractualDelivery?: cac_DeliveryType;
}

export interface cac_CorporateRegistrationSchemeType {
  ID?: cbc_IDType;
  Name?: cbc_NameType;
  CorporateRegistrationTypeCode?: cbc_CorporateRegistrationTypeCodeType;
  JurisdictionRegionAddress?: cac_AddressType | cac_AddressType[];
}

export interface cac_CountryType {
  IdentificationCode?: cbc_IdentificationCodeType;
  Name?: cbc_NameType;
}

export interface cac_CreditAccountType {
  AccountID: cbc_AccountIDType;
}

export interface cac_CustomerPartyType {
  CustomerAssignedAccountID?: cbc_CustomerAssignedAccountIDType;
  SupplierAssignedAccountID?: cbc_SupplierAssignedAccountIDType;
  AdditionalAccountID?: cbc_AdditionalAccountIDType | cbc_AdditionalAccountIDType[];
  Party?: cac_PartyType;
  DeliveryContact?: cac_ContactType;
  AccountingContact?: cac_ContactType;
  BuyerContact?: cac_ContactType;
}

export interface cac_CustomsDeclarationType {
  ID: cbc_IDType;
  IssuerParty?: cac_PartyType;
}

export interface cac_DeliveryTermsType {
  ID?: cbc_IDType;
  SpecialTerms?: cbc_SpecialTermsType | cbc_SpecialTermsType[];
  LossRiskResponsibilityCode?: cbc_LossRiskResponsibilityCodeType;
  LossRisk?: cbc_LossRiskType | cbc_LossRiskType[];
  Amount?: cbc_AmountType;
  DeliveryLocation?: cac_LocationType;
  AllowanceCharge?: cac_AllowanceChargeType;
}

export interface cac_DeliveryType {
  ID?: cbc_IDType;
  Quantity?: cbc_QuantityType;
  MinimumQuantity?: cbc_MinimumQuantityType;
  MaximumQuantity?: cbc_MaximumQuantityType;
  ActualDeliveryDate?: cbc_ActualDeliveryDateType;
  ActualDeliveryTime?: cbc_ActualDeliveryTimeType;
  LatestDeliveryDate?: cbc_LatestDeliveryDateType;
  LatestDeliveryTime?: cbc_LatestDeliveryTimeType;
  ReleaseID?: cbc_ReleaseIDType;
  TrackingID?: cbc_TrackingIDType;
  DeliveryAddress?: cac_AddressType;
  DeliveryLocation?: cac_LocationType;
  AlternativeDeliveryLocation?: cac_LocationType;
  RequestedDeliveryPeriod?: cac_PeriodType;
  PromisedDeliveryPeriod?: cac_PeriodType;
  EstimatedDeliveryPeriod?: cac_PeriodType;
  CarrierParty?: cac_PartyType;
  DeliveryParty?: cac_PartyType;
  NotifyParty?: cac_PartyType | cac_PartyType[];
  Despatch?: cac_DespatchType;
  DeliveryTerms?: cac_DeliveryTermsType | cac_DeliveryTermsType[];
  MinimumDeliveryUnit?: cac_DeliveryUnitType;
  MaximumDeliveryUnit?: cac_DeliveryUnitType;
  Shipment?: cac_ShipmentType;
}

export interface cac_DeliveryUnitType {
  BatchQuantity: cbc_BatchQuantityType;
  ConsumerUnitQuantity?: cbc_ConsumerUnitQuantityType;
  HazardousRiskIndicator?: cbc_HazardousRiskIndicatorType;
}

export interface cac_DependentPriceReferenceType {
  Percent?: cbc_PercentType;
  LocationAddress?: cac_AddressType;
  DependentLineReference?: cac_LineReferenceType;
}

export interface cac_DespatchLineType {
  ID: cbc_IDType;
  UUID?: cbc_UUIDType;
  Note?: cbc_NoteType | cbc_NoteType[];
  LineStatusCode?: cbc_LineStatusCodeType;
  DeliveredQuantity?: cbc_DeliveredQuantityType;
  BackorderQuantity?: cbc_BackorderQuantityType;
  BackorderReason?: cbc_BackorderReasonType | cbc_BackorderReasonType[];
  OutstandingQuantity?: cbc_OutstandingQuantityType;
  OutstandingReason?: cbc_OutstandingReasonType | cbc_OutstandingReasonType[];
  OversupplyQuantity?: cbc_OversupplyQuantityType;
  OrderLineReference: cac_OrderLineReferenceType | cac_OrderLineReferenceType[];
  DocumentReference?: cac_DocumentReferenceType | cac_DocumentReferenceType[];
  Item: cac_ItemType;
  Shipment?: cac_ShipmentType | cac_ShipmentType[];
}

export interface cac_DespatchType {
  ID?: cbc_IDType;
  RequestedDespatchDate?: cbc_RequestedDespatchDateType;
  RequestedDespatchTime?: cbc_RequestedDespatchTimeType;
  EstimatedDespatchDate?: cbc_EstimatedDespatchDateType;
  EstimatedDespatchTime?: cbc_EstimatedDespatchTimeType;
  ActualDespatchDate?: cbc_ActualDespatchDateType;
  ActualDespatchTime?: cbc_ActualDespatchTimeType;
  GuaranteedDespatchDate?: cbc_GuaranteedDespatchDateType;
  GuaranteedDespatchTime?: cbc_GuaranteedDespatchTimeType;
  ReleaseID?: cbc_ReleaseIDType;
  Instructions?: cbc_InstructionsType | cbc_InstructionsType[];
  DespatchAddress?: cac_AddressType;
  DespatchLocation?: cac_LocationType;
  DespatchParty?: cac_PartyType;
  CarrierParty?: cac_PartyType;
  NotifyParty?: cac_PartyType | cac_PartyType[];
  Contact?: cac_ContactType;
  EstimatedDespatchPeriod?: cac_PeriodType;
  RequestedDespatchPeriod?: cac_PeriodType;
}

export interface cac_DimensionType {
  AttributeID: cbc_AttributeIDType;
  Measure?: cbc_MeasureType;
  Description?: cbc_DescriptionType | cbc_DescriptionType[];
  MinimumMeasure?: cbc_MinimumMeasureType;
  MaximumMeasure?: cbc_MaximumMeasureType;
}

export interface cac_DocumentReferenceType {
  ID: cbc_IDType;
  CopyIndicator?: cbc_CopyIndicatorType;
  UUID?: cbc_UUIDType;
  IssueDate?: cbc_IssueDateType;
  IssueTime?: cbc_IssueTimeType;
  DocumentTypeCode?: cbc_DocumentTypeCodeType;
  DocumentType?: cbc_DocumentTypeType;
  XPath?: cbc_XPathType | cbc_XPathType[];
  LanguageID?: cbc_LanguageIDType;
  LocaleCode?: cbc_LocaleCodeType;
  VersionID?: cbc_VersionIDType;
  DocumentStatusCode?: cbc_DocumentStatusCodeType;
  DocumentDescription?: cbc_DocumentDescriptionType | cbc_DocumentDescriptionType[];
  Attachment?: cac_AttachmentType;
  ValidityPeriod?: cac_PeriodType;
  IssuerParty?: cac_PartyType;
  ResultOfVerification?: cac_ResultOfVerificationType;
}

export interface cac_EmissionCalculationMethodType {
  CalculationMethodCode?: cbc_CalculationMethodCodeType;
  FullnessIndicationCode?: cbc_FullnessIndicationCodeType;
  MeasurementFromLocation?: cac_LocationType;
  MeasurementToLocation?: cac_LocationType;
}

export interface cac_EnvironmentalEmissionType {
  EnvironmentalEmissionTypeCode: cbc_EnvironmentalEmissionTypeCodeType;
  ValueMeasure: cbc_ValueMeasureType;
  Description?: cbc_DescriptionType | cbc_DescriptionType[];
  EmissionCalculationMethod?: cac_EmissionCalculationMethodType | cac_EmissionCalculationMethodType[];
}

export interface cac_ExchangeRateType {
  SourceCurrencyCode: cbc_SourceCurrencyCodeType;
  SourceCurrencyBaseRate?: cbc_SourceCurrencyBaseRateType;
  TargetCurrencyCode: cbc_TargetCurrencyCodeType;
  TargetCurrencyBaseRate?: cbc_TargetCurrencyBaseRateType;
  ExchangeMarketID?: cbc_ExchangeMarketIDType;
  CalculationRate?: cbc_CalculationRateType;
  MathematicOperatorCode?: cbc_MathematicOperatorCodeType;
  Date?: cbc_DateType;
  ForeignExchangeContract?: cac_ContractType;
}

export interface cac_ExternalReferenceType {
  URI?: cbc_URIType;
  DocumentHash?: cbc_DocumentHashType;
  HashAlgorithmMethod?: cbc_HashAlgorithmMethodType;
  ExpiryDate?: cbc_ExpiryDateType;
  ExpiryTime?: cbc_ExpiryTimeType;
  MimeCode?: cbc_MimeCodeType;
  FormatCode?: cbc_FormatCodeType;
  EncodingCode?: cbc_EncodingCodeType;
  CharacterSetCode?: cbc_CharacterSetCodeType;
  FileName?: cbc_FileNameType;
  Description?: cbc_DescriptionType | cbc_DescriptionType[];
}

export interface cac_FinancialAccountType {
  ID?: cbc_IDType;
  Name?: cbc_NameType;
  AliasName?: cbc_AliasNameType;
  AccountTypeCode?: cbc_AccountTypeCodeType;
  AccountFormatCode?: cbc_AccountFormatCodeType;
  CurrencyCode?: cbc_CurrencyCodeType;
  PaymentNote?: cbc_PaymentNoteType | cbc_PaymentNoteType[];
  FinancialInstitutionBranch?: cac_BranchType;
  Country?: cac_CountryType;
}

export interface cac_FinancialInstitutionType {
  ID?: cbc_IDType;
  Name?: cbc_NameType;
  Address?: cac_AddressType;
}

export interface cac_GoodsItemContainerType {
  ID: cbc_IDType;
  Quantity?: cbc_QuantityType;
  TransportEquipment?: cac_TransportEquipmentType | cac_TransportEquipmentType[];
}

export interface cac_GoodsItemType {
  ID?: cbc_IDType;
  SequenceNumberID?: cbc_SequenceNumberIDType;
  Description?: cbc_DescriptionType | cbc_DescriptionType[];
  HazardousRiskIndicator?: cbc_HazardousRiskIndicatorType;
  DeclaredCustomsValueAmount?: cbc_DeclaredCustomsValueAmountType;
  DeclaredForCarriageValueAmount?: cbc_DeclaredForCarriageValueAmountType;
  DeclaredStatisticsValueAmount?: cbc_DeclaredStatisticsValueAmountType;
  FreeOnBoardValueAmount?: cbc_FreeOnBoardValueAmountType;
  InsuranceValueAmount?: cbc_InsuranceValueAmountType;
  ValueAmount?: cbc_ValueAmountType;
  GrossWeightMeasure?: cbc_GrossWeightMeasureType;
  NetWeightMeasure?: cbc_NetWeightMeasureType;
  NetNetWeightMeasure?: cbc_NetNetWeightMeasureType;
  ChargeableWeightMeasure?: cbc_ChargeableWeightMeasureType;
  GrossVolumeMeasure?: cbc_GrossVolumeMeasureType;
  NetVolumeMeasure?: cbc_NetVolumeMeasureType;
  Quantity?: cbc_QuantityType;
  PreferenceCriterionCode?: cbc_PreferenceCriterionCodeType;
  RequiredCustomsID?: cbc_RequiredCustomsIDType;
  CustomsStatusCode?: cbc_CustomsStatusCodeType;
  CustomsTariffQuantity?: cbc_CustomsTariffQuantityType;
  CustomsImportClassifiedIndicator?: cbc_CustomsImportClassifiedIndicatorType;
  ChargeableQuantity?: cbc_ChargeableQuantityType;
  ReturnableQuantity?: cbc_ReturnableQuantityType;
  TraceID?: cbc_TraceIDType;
  Item?: cac_ItemType | cac_ItemType[];
  GoodsItemContainer?: cac_GoodsItemContainerType | cac_GoodsItemContainerType[];
  FreightAllowanceCharge?: cac_AllowanceChargeType | cac_AllowanceChargeType[];
  InvoiceLine?: cac_InvoiceLineType | cac_InvoiceLineType[];
  Temperature?: cac_TemperatureType | cac_TemperatureType[];
  ContainedGoodsItem?: cac_GoodsItemType | cac_GoodsItemType[];
  OriginAddress?: cac_AddressType;
  Delivery?: cac_DeliveryType;
  Pickup?: cac_PickupType;
  Despatch?: cac_DespatchType;
  MeasurementDimension?: cac_DimensionType | cac_DimensionType[];
  ContainingPackage?: cac_PackageType | cac_PackageType[];
  ShipmentDocumentReference?: cac_DocumentReferenceType;
  MinimumTemperature?: cac_TemperatureType;
  MaximumTemperature?: cac_TemperatureType;
}

export interface cac_HazardousGoodsTransitType {
  TransportEmergencyCardCode?: cbc_TransportEmergencyCardCodeType;
  PackingCriteriaCode?: cbc_PackingCriteriaCodeType;
  HazardousRegulationCode?: cbc_HazardousRegulationCodeType;
  InhalationToxicityZoneCode?: cbc_InhalationToxicityZoneCodeType;
  TransportAuthorizationCode?: cbc_TransportAuthorizationCodeType;
  MaximumTemperature?: cac_TemperatureType;
  MinimumTemperature?: cac_TemperatureType;
}

export interface cac_HazardousItemType {
  ID?: cbc_IDType;
  PlacardNotation?: cbc_PlacardNotationType;
  PlacardEndorsement?: cbc_PlacardEndorsementType;
  AdditionalInformation?: cbc_AdditionalInformationType | cbc_AdditionalInformationType[];
  UNDGCode?: cbc_UNDGCodeType;
  EmergencyProceduresCode?: cbc_EmergencyProceduresCodeType;
  MedicalFirstAidGuideCode?: cbc_MedicalFirstAidGuideCodeType;
  TechnicalName?: cbc_TechnicalNameType;
  CategoryName?: cbc_CategoryNameType;
  HazardousCategoryCode?: cbc_HazardousCategoryCodeType;
  UpperOrangeHazardPlacardID?: cbc_UpperOrangeHazardPlacardIDType;
  LowerOrangeHazardPlacardID?: cbc_LowerOrangeHazardPlacardIDType;
  MarkingID?: cbc_MarkingIDType;
  HazardClassID?: cbc_HazardClassIDType;
  NetWeightMeasure?: cbc_NetWeightMeasureType;
  NetVolumeMeasure?: cbc_NetVolumeMeasureType;
  Quantity?: cbc_QuantityType;
  ContactParty?: cac_PartyType;
  SecondaryHazard?: cac_SecondaryHazardType | cac_SecondaryHazardType[];
  HazardousGoodsTransit?: cac_HazardousGoodsTransitType | cac_HazardousGoodsTransitType[];
  EmergencyTemperature?: cac_TemperatureType;
  FlashpointTemperature?: cac_TemperatureType;
  AdditionalTemperature?: cac_TemperatureType | cac_TemperatureType[];
}

export interface cac_InvoiceLineType {
  ID: cbc_IDType;
  UUID?: cbc_UUIDType;
  Note?: cbc_NoteType | cbc_NoteType[];
  InvoicedQuantity?: cbc_InvoicedQuantityType;
  LineExtensionAmount: cbc_LineExtensionAmountType;
  TaxPointDate?: cbc_TaxPointDateType;
  AccountingCostCode?: cbc_AccountingCostCodeType;
  AccountingCost?: cbc_AccountingCostType;
  PaymentPurposeCode?: cbc_PaymentPurposeCodeType;
  FreeOfChargeIndicator?: cbc_FreeOfChargeIndicatorType;
  InvoicePeriod?: cac_PeriodType | cac_PeriodType[];
  OrderLineReference?: cac_OrderLineReferenceType | cac_OrderLineReferenceType[];
  DespatchLineReference?: cac_LineReferenceType | cac_LineReferenceType[];
  ReceiptLineReference?: cac_LineReferenceType | cac_LineReferenceType[];
  BillingReference?: cac_BillingReferenceType | cac_BillingReferenceType[];
  DocumentReference?: cac_DocumentReferenceType | cac_DocumentReferenceType[];
  PricingReference?: cac_PricingReferenceType;
  OriginatorParty?: cac_PartyType;
  Delivery?: cac_DeliveryType | cac_DeliveryType[];
  PaymentTerms?: cac_PaymentTermsType | cac_PaymentTermsType[];
  AllowanceCharge?: cac_AllowanceChargeType | cac_AllowanceChargeType[];
  TaxTotal?: cac_TaxTotalType | cac_TaxTotalType[];
  WithholdingTaxTotal?: cac_TaxTotalType | cac_TaxTotalType[];
  Item: cac_ItemType;
  Price?: cac_PriceType;
  DeliveryTerms?: cac_DeliveryTermsType;
  SubInvoiceLine?: cac_InvoiceLineType | cac_InvoiceLineType[];
  ItemPriceExtension?: cac_PriceExtensionType;
}

export interface cac_ItemIdentificationType {
  ID: cbc_IDType;
  ExtendedID?: cbc_ExtendedIDType;
  BarcodeSymbologyID?: cbc_BarcodeSymbologyIDType;
  PhysicalAttribute?: cac_PhysicalAttributeType | cac_PhysicalAttributeType[];
  MeasurementDimension?: cac_DimensionType | cac_DimensionType[];
  IssuerParty?: cac_PartyType;
}

export interface cac_ItemInstanceType {
  ProductTraceID?: cbc_ProductTraceIDType;
  ManufactureDate?: cbc_ManufactureDateType;
  ManufactureTime?: cbc_ManufactureTimeType;
  BestBeforeDate?: cbc_BestBeforeDateType;
  RegistrationID?: cbc_RegistrationIDType;
  SerialID?: cbc_SerialIDType;
  AdditionalItemProperty?: cac_ItemPropertyType | cac_ItemPropertyType[];
  LotIdentification?: cac_LotIdentificationType;
}

export interface cac_ItemLocationQuantityType {
  LeadTimeMeasure?: cbc_LeadTimeMeasureType;
  MinimumQuantity?: cbc_MinimumQuantityType;
  MaximumQuantity?: cbc_MaximumQuantityType;
  HazardousRiskIndicator?: cbc_HazardousRiskIndicatorType;
  TradingRestrictions?: cbc_TradingRestrictionsType | cbc_TradingRestrictionsType[];
  ApplicableTerritoryAddress?: cac_AddressType | cac_AddressType[];
  Price?: cac_PriceType;
  DeliveryUnit?: cac_DeliveryUnitType | cac_DeliveryUnitType[];
  ApplicableTaxCategory?: cac_TaxCategoryType | cac_TaxCategoryType[];
  Package?: cac_PackageType;
  AllowanceCharge?: cac_AllowanceChargeType | cac_AllowanceChargeType[];
  DependentPriceReference?: cac_DependentPriceReferenceType;
}

export interface cac_ItemPropertyGroupType {
  ID: cbc_IDType;
  Name?: cbc_NameType;
  ImportanceCode?: cbc_ImportanceCodeType;
}

export interface cac_ItemPropertyRangeType {
  MinimumValue?: cbc_MinimumValueType;
  MaximumValue?: cbc_MaximumValueType;
}

export interface cac_ItemPropertyType {
  ID?: cbc_IDType;
  Name: cbc_NameType;
  NameCode?: cbc_NameCodeType;
  TestMethod?: cbc_TestMethodType;
  Value?: cbc_ValueType;
  ValueQuantity?: cbc_ValueQuantityType;
  ValueQualifier?: cbc_ValueQualifierType | cbc_ValueQualifierType[];
  ImportanceCode?: cbc_ImportanceCodeType;
  ListValue?: cbc_ListValueType | cbc_ListValueType[];
  UsabilityPeriod?: cac_PeriodType;
  ItemPropertyGroup?: cac_ItemPropertyGroupType | cac_ItemPropertyGroupType[];
  RangeDimension?: cac_DimensionType;
  ItemPropertyRange?: cac_ItemPropertyRangeType;
}

export interface cac_ItemType {
  Description?: cbc_DescriptionType | cbc_DescriptionType[];
  PackQuantity?: cbc_PackQuantityType;
  PackSizeNumeric?: cbc_PackSizeNumericType;
  CatalogueIndicator?: cbc_CatalogueIndicatorType;
  Name?: cbc_NameType;
  HazardousRiskIndicator?: cbc_HazardousRiskIndicatorType;
  AdditionalInformation?: cbc_AdditionalInformationType | cbc_AdditionalInformationType[];
  Keyword?: cbc_KeywordType | cbc_KeywordType[];
  BrandName?: cbc_BrandNameType | cbc_BrandNameType[];
  ModelName?: cbc_ModelNameType | cbc_ModelNameType[];
  BuyersItemIdentification?: cac_ItemIdentificationType;
  SellersItemIdentification?: cac_ItemIdentificationType;
  ManufacturersItemIdentification?: cac_ItemIdentificationType | cac_ItemIdentificationType[];
  StandardItemIdentification?: cac_ItemIdentificationType;
  CatalogueItemIdentification?: cac_ItemIdentificationType;
  AdditionalItemIdentification?: cac_ItemIdentificationType | cac_ItemIdentificationType[];
  CatalogueDocumentReference?: cac_DocumentReferenceType;
  ItemSpecificationDocumentReference?: cac_DocumentReferenceType | cac_DocumentReferenceType[];
  OriginCountry?: cac_CountryType;
  CommodityClassification?: cac_CommodityClassificationType | cac_CommodityClassificationType[];
  TransactionConditions?: cac_TransactionConditionsType | cac_TransactionConditionsType[];
  HazardousItem?: cac_HazardousItemType | cac_HazardousItemType[];
  ClassifiedTaxCategory?: cac_TaxCategoryType | cac_TaxCategoryType[];
  AdditionalItemProperty?: cac_ItemPropertyType | cac_ItemPropertyType[];
  ManufacturerParty?: cac_PartyType | cac_PartyType[];
  InformationContentProviderParty?: cac_PartyType;
  OriginAddress?: cac_AddressType | cac_AddressType[];
  ItemInstance?: cac_ItemInstanceType | cac_ItemInstanceType[];
  Certificate?: cac_CertificateType | cac_CertificateType[];
  Dimension?: cac_DimensionType | cac_DimensionType[];
}

export interface cac_LanguageType {
  ID?: cbc_IDType;
  Name?: cbc_NameType;
  LocaleCode?: cbc_LocaleCodeType;
}

export interface cac_LineReferenceType {
  LineID: cbc_LineIDType;
  UUID?: cbc_UUIDType;
  LineStatusCode?: cbc_LineStatusCodeType;
  DocumentReference?: cac_DocumentReferenceType;
}

export interface cac_LocationCoordinateType {
  CoordinateSystemCode?: cbc_CoordinateSystemCodeType;
  LatitudeDegreesMeasure?: cbc_LatitudeDegreesMeasureType;
  LatitudeMinutesMeasure?: cbc_LatitudeMinutesMeasureType;
  LatitudeDirectionCode?: cbc_LatitudeDirectionCodeType;
  LongitudeDegreesMeasure?: cbc_LongitudeDegreesMeasureType;
  LongitudeMinutesMeasure?: cbc_LongitudeMinutesMeasureType;
  LongitudeDirectionCode?: cbc_LongitudeDirectionCodeType;
  AltitudeMeasure?: cbc_AltitudeMeasureType;
}

export interface cac_LocationType {
  ID?: cbc_IDType;
  Description?: cbc_DescriptionType | cbc_DescriptionType[];
  Conditions?: cbc_ConditionsType | cbc_ConditionsType[];
  CountrySubentity?: cbc_CountrySubentityType;
  CountrySubentityCode?: cbc_CountrySubentityCodeType;
  LocationTypeCode?: cbc_LocationTypeCodeType;
  InformationURI?: cbc_InformationURIType;
  Name?: cbc_NameType;
  ValidityPeriod?: cac_PeriodType | cac_PeriodType[];
  Address?: cac_AddressType;
  SubsidiaryLocation?: cac_LocationType | cac_LocationType[];
  LocationCoordinate?: cac_LocationCoordinateType | cac_LocationCoordinateType[];
}

export interface cac_LotIdentificationType {
  LotNumberID?: cbc_LotNumberIDType;
  ExpiryDate?: cbc_ExpiryDateType;
  AdditionalItemProperty?: cac_ItemPropertyType | cac_ItemPropertyType[];
}

export interface cac_MaritimeTransportType {
  VesselID?: cbc_VesselIDType;
  VesselName?: cbc_VesselNameType;
  RadioCallSignID?: cbc_RadioCallSignIDType;
  ShipsRequirements?: cbc_ShipsRequirementsType | cbc_ShipsRequirementsType[];
  GrossTonnageMeasure?: cbc_GrossTonnageMeasureType;
  NetTonnageMeasure?: cbc_NetTonnageMeasureType;
  RegistryCertificateDocumentReference?: cac_DocumentReferenceType;
  RegistryPortLocation?: cac_LocationType;
}

export interface cac_MonetaryTotalType {
  LineExtensionAmount?: cbc_LineExtensionAmountType;
  TaxExclusiveAmount?: cbc_TaxExclusiveAmountType;
  TaxInclusiveAmount?: cbc_TaxInclusiveAmountType;
  AllowanceTotalAmount?: cbc_AllowanceTotalAmountType;
  ChargeTotalAmount?: cbc_ChargeTotalAmountType;
  PrepaidAmount?: cbc_PrepaidAmountType;
  PayableRoundingAmount?: cbc_PayableRoundingAmountType;
  PayableAmount: cbc_PayableAmountType;
  PayableAlternativeAmount?: cbc_PayableAlternativeAmountType;
}

export interface cac_OrderLineReferenceType {
  LineID: cbc_LineIDType;
  SalesOrderLineID?: cbc_SalesOrderLineIDType;
  UUID?: cbc_UUIDType;
  LineStatusCode?: cbc_LineStatusCodeType;
  OrderReference?: cac_OrderReferenceType;
}

export interface cac_OrderReferenceType {
  ID: cbc_IDType;
  SalesOrderID?: cbc_SalesOrderIDType;
  CopyIndicator?: cbc_CopyIndicatorType;
  UUID?: cbc_UUIDType;
  IssueDate?: cbc_IssueDateType;
  IssueTime?: cbc_IssueTimeType;
  CustomerReference?: cbc_CustomerReferenceType;
  OrderTypeCode?: cbc_OrderTypeCodeType;
  DocumentReference?: cac_DocumentReferenceType;
}

export interface cac_PackageType {
  ID?: cbc_IDType;
  Quantity?: cbc_QuantityType;
  ReturnableMaterialIndicator?: cbc_ReturnableMaterialIndicatorType;
  PackageLevelCode?: cbc_PackageLevelCodeType;
  PackagingTypeCode?: cbc_PackagingTypeCodeType;
  PackingMaterial?: cbc_PackingMaterialType | cbc_PackingMaterialType[];
  TraceID?: cbc_TraceIDType;
  ContainedPackage?: cac_PackageType | cac_PackageType[];
  ContainingTransportEquipment?: cac_TransportEquipmentType;
  GoodsItem?: cac_GoodsItemType | cac_GoodsItemType[];
  MeasurementDimension?: cac_DimensionType | cac_DimensionType[];
  DeliveryUnit?: cac_DeliveryUnitType | cac_DeliveryUnitType[];
  Delivery?: cac_DeliveryType;
  Pickup?: cac_PickupType;
  Despatch?: cac_DespatchType;
}

export interface cac_PartyIdentificationType {
  ID: cbc_IDType;
}

export interface cac_PartyLegalEntityType {
  RegistrationName?: cbc_RegistrationNameType;
  CompanyID?: cbc_CompanyIDType;
  RegistrationDate?: cbc_RegistrationDateType;
  RegistrationExpirationDate?: cbc_RegistrationExpirationDateType;
  CompanyLegalFormCode?: cbc_CompanyLegalFormCodeType;
  CompanyLegalForm?: cbc_CompanyLegalFormType;
  SoleProprietorshipIndicator?: cbc_SoleProprietorshipIndicatorType;
  CompanyLiquidationStatusCode?: cbc_CompanyLiquidationStatusCodeType;
  CorporateStockAmount?: cbc_CorporateStockAmountType;
  FullyPaidSharesIndicator?: cbc_FullyPaidSharesIndicatorType;
  RegistrationAddress?: cac_AddressType;
  CorporateRegistrationScheme?: cac_CorporateRegistrationSchemeType;
  HeadOfficeParty?: cac_PartyType;
  ShareholderParty?: cac_ShareholderPartyType | cac_ShareholderPartyType[];
}

export interface cac_PartyNameType {
  Name: cbc_NameType;
}

export interface cac_PartyTaxSchemeType {
  RegistrationName?: cbc_RegistrationNameType;
  CompanyID?: cbc_CompanyIDType;
  TaxLevelCode?: cbc_TaxLevelCodeType;
  ExemptionReasonCode?: cbc_ExemptionReasonCodeType;
  ExemptionReason?: cbc_ExemptionReasonType | cbc_ExemptionReasonType[];
  RegistrationAddress?: cac_AddressType;
  TaxScheme: cac_TaxSchemeType;
}

export interface cac_PartyType {
  MarkCareIndicator?: cbc_MarkCareIndicatorType;
  MarkAttentionIndicator?: cbc_MarkAttentionIndicatorType;
  WebsiteURI?: cbc_WebsiteURIType;
  LogoReferenceID?: cbc_LogoReferenceIDType;
  EndpointID?: cbc_EndpointIDType;
  IndustryClassificationCode?: cbc_IndustryClassificationCodeType;
  PartyIdentification?: cac_PartyIdentificationType | cac_PartyIdentificationType[];
  PartyName?: cac_PartyNameType | cac_PartyNameType[];
  Language?: cac_LanguageType;
  PostalAddress?: cac_AddressType;
  PhysicalLocation?: cac_LocationType;
  PartyTaxScheme?: cac_PartyTaxSchemeType | cac_PartyTaxSchemeType[];
  PartyLegalEntity?: cac_PartyLegalEntityType | cac_PartyLegalEntityType[];
  Contact?: cac_ContactType;
  Person?: cac_PersonType | cac_PersonType[];
  AgentParty?: cac_PartyType;
  ServiceProviderParty?: cac_ServiceProviderPartyType | cac_ServiceProviderPartyType[];
  PowerOfAttorney?: cac_PowerOfAttorneyType | cac_PowerOfAttorneyType[];
  FinancialAccount?: cac_FinancialAccountType;
}

export interface cac_PaymentMandateType {
  ID?: cbc_IDType;
  MandateTypeCode?: cbc_MandateTypeCodeType;
  MaximumPaymentInstructionsNumeric?: cbc_MaximumPaymentInstructionsNumericType;
  MaximumPaidAmount?: cbc_MaximumPaidAmountType;
  SignatureID?: cbc_SignatureIDType;
  PayerParty?: cac_PartyType;
  PayerFinancialAccount?: cac_FinancialAccountType;
  ValidityPeriod?: cac_PeriodType;
  PaymentReversalPeriod?: cac_PeriodType;
  Clause?: cac_ClauseType | cac_ClauseType[];
}

export interface cac_PaymentMeansType {
  ID?: cbc_IDType;
  PaymentMeansCode: cbc_PaymentMeansCodeType;
  PaymentDueDate?: cbc_PaymentDueDateType;
  PaymentChannelCode?: cbc_PaymentChannelCodeType;
  InstructionID?: cbc_InstructionIDType;
  InstructionNote?: cbc_InstructionNoteType | cbc_InstructionNoteType[];
  PaymentID?: cbc_PaymentIDType | cbc_PaymentIDType[];
  CardAccount?: cac_CardAccountType;
  PayerFinancialAccount?: cac_FinancialAccountType;
  PayeeFinancialAccount?: cac_FinancialAccountType;
  CreditAccount?: cac_CreditAccountType;
  PaymentMandate?: cac_PaymentMandateType;
  TradeFinancing?: cac_TradeFinancingType;
}

export interface cac_PaymentTermsType {
  ID?: cbc_IDType;
  PaymentMeansID?: cbc_PaymentMeansIDType | cbc_PaymentMeansIDType[];
  PrepaidPaymentReferenceID?: cbc_PrepaidPaymentReferenceIDType;
  Note?: cbc_NoteType | cbc_NoteType[];
  ReferenceEventCode?: cbc_ReferenceEventCodeType;
  SettlementDiscountPercent?: cbc_SettlementDiscountPercentType;
  PenaltySurchargePercent?: cbc_PenaltySurchargePercentType;
  PaymentPercent?: cbc_PaymentPercentType;
  Amount?: cbc_AmountType;
  SettlementDiscountAmount?: cbc_SettlementDiscountAmountType;
  PenaltyAmount?: cbc_PenaltyAmountType;
  PaymentTermsDetailsURI?: cbc_PaymentTermsDetailsURIType;
  PaymentDueDate?: cbc_PaymentDueDateType;
  InstallmentDueDate?: cbc_InstallmentDueDateType;
  InvoicingPartyReference?: cbc_InvoicingPartyReferenceType;
  SettlementPeriod?: cac_PeriodType;
  PenaltyPeriod?: cac_PeriodType;
  ExchangeRate?: cac_ExchangeRateType;
  ValidityPeriod?: cac_PeriodType;
}

export interface cac_PaymentType {
  ID?: cbc_IDType;
  PaidAmount?: cbc_PaidAmountType;
  ReceivedDate?: cbc_ReceivedDateType;
  PaidDate?: cbc_PaidDateType;
  PaidTime?: cbc_PaidTimeType;
  InstructionID?: cbc_InstructionIDType;
}

export interface cac_PeriodType {
  StartDate?: cbc_StartDateType;
  StartTime?: cbc_StartTimeType;
  EndDate?: cbc_EndDateType;
  EndTime?: cbc_EndTimeType;
  DurationMeasure?: cbc_DurationMeasureType;
  DescriptionCode?: cbc_DescriptionCodeType | cbc_DescriptionCodeType[];
  Description?: cbc_DescriptionType | cbc_DescriptionType[];
}

export interface cac_PersonType {
  ID?: cbc_IDType;
  FirstName?: cbc_FirstNameType;
  FamilyName?: cbc_FamilyNameType;
  Title?: cbc_TitleType;
  MiddleName?: cbc_MiddleNameType;
  OtherName?: cbc_OtherNameType;
  NameSuffix?: cbc_NameSuffixType;
  JobTitle?: cbc_JobTitleType;
  NationalityID?: cbc_NationalityIDType;
  GenderCode?: cbc_GenderCodeType;
  BirthDate?: cbc_BirthDateType;
  BirthplaceName?: cbc_BirthplaceNameType;
  OrganizationDepartment?: cbc_OrganizationDepartmentType;
  Contact?: cac_ContactType;
  FinancialAccount?: cac_FinancialAccountType;
  IdentityDocumentReference?: cac_DocumentReferenceType | cac_DocumentReferenceType[];
  ResidenceAddress?: cac_AddressType;
}

export interface cac_PhysicalAttributeType {
  AttributeID: cbc_AttributeIDType;
  PositionCode?: cbc_PositionCodeType;
  DescriptionCode?: cbc_DescriptionCodeType;
  Description?: cbc_DescriptionType | cbc_DescriptionType[];
}

export interface cac_PickupType {
  ID?: cbc_IDType;
  ActualPickupDate?: cbc_ActualPickupDateType;
  ActualPickupTime?: cbc_ActualPickupTimeType;
  EarliestPickupDate?: cbc_EarliestPickupDateType;
  EarliestPickupTime?: cbc_EarliestPickupTimeType;
  LatestPickupDate?: cbc_LatestPickupDateType;
  LatestPickupTime?: cbc_LatestPickupTimeType;
  PickupLocation?: cac_LocationType;
  PickupParty?: cac_PartyType;
}

export interface cac_PowerOfAttorneyType {
  ID?: cbc_IDType;
  IssueDate?: cbc_IssueDateType;
  IssueTime?: cbc_IssueTimeType;
  Description?: cbc_DescriptionType | cbc_DescriptionType[];
  NotaryParty?: cac_PartyType;
  AgentParty: cac_PartyType;
  WitnessParty?: cac_PartyType | cac_PartyType[];
  MandateDocumentReference?: cac_DocumentReferenceType | cac_DocumentReferenceType[];
}

export interface cac_PriceExtensionType {
  Amount: cbc_AmountType;
  TaxTotal?: cac_TaxTotalType | cac_TaxTotalType[];
}

export interface cac_PriceListType {
  ID?: cbc_IDType;
  StatusCode?: cbc_StatusCodeType;
  ValidityPeriod?: cac_PeriodType | cac_PeriodType[];
  PreviousPriceList?: cac_PriceListType;
}

export interface cac_PriceType {
  PriceAmount: cbc_PriceAmountType;
  BaseQuantity?: cbc_BaseQuantityType;
  PriceChangeReason?: cbc_PriceChangeReasonType | cbc_PriceChangeReasonType[];
  PriceTypeCode?: cbc_PriceTypeCodeType;
  PriceType?: cbc_PriceTypeType;
  OrderableUnitFactorRate?: cbc_OrderableUnitFactorRateType;
  ValidityPeriod?: cac_PeriodType | cac_PeriodType[];
  PriceList?: cac_PriceListType;
  AllowanceCharge?: cac_AllowanceChargeType | cac_AllowanceChargeType[];
  PricingExchangeRate?: cac_ExchangeRateType;
}

export interface cac_PricingReferenceType {
  OriginalItemLocationQuantity?: cac_ItemLocationQuantityType;
  AlternativeConditionPrice?: cac_PriceType | cac_PriceType[];
}

export interface cac_ProjectReferenceType {
  ID: cbc_IDType;
  UUID?: cbc_UUIDType;
  IssueDate?: cbc_IssueDateType;
  WorkPhaseReference?: cac_WorkPhaseReferenceType | cac_WorkPhaseReferenceType[];
}

export interface cac_RailTransportType {
  TrainID: cbc_TrainIDType;
  RailCarID?: cbc_RailCarIDType;
}

export interface cac_ReceiptLineType {
  ID: cbc_IDType;
  UUID?: cbc_UUIDType;
  Note?: cbc_NoteType | cbc_NoteType[];
  ReceivedQuantity?: cbc_ReceivedQuantityType;
  ShortQuantity?: cbc_ShortQuantityType;
  ShortageActionCode?: cbc_ShortageActionCodeType;
  RejectedQuantity?: cbc_RejectedQuantityType;
  RejectReasonCode?: cbc_RejectReasonCodeType;
  RejectReason?: cbc_RejectReasonType | cbc_RejectReasonType[];
  RejectActionCode?: cbc_RejectActionCodeType;
  QuantityDiscrepancyCode?: cbc_QuantityDiscrepancyCodeType;
  OversupplyQuantity?: cbc_OversupplyQuantityType;
  ReceivedDate?: cbc_ReceivedDateType;
  TimingComplaintCode?: cbc_TimingComplaintCodeType;
  TimingComplaint?: cbc_TimingComplaintType;
  OrderLineReference?: cac_OrderLineReferenceType;
  DespatchLineReference?: cac_LineReferenceType | cac_LineReferenceType[];
  DocumentReference?: cac_DocumentReferenceType | cac_DocumentReferenceType[];
  Item?: cac_ItemType | cac_ItemType[];
  Shipment?: cac_ShipmentType | cac_ShipmentType[];
}

export interface cac_ResultOfVerificationType {
  ValidatorID?: cbc_ValidatorIDType;
  ValidationResultCode?: cbc_ValidationResultCodeType;
  ValidationDate?: cbc_ValidationDateType;
  ValidationTime?: cbc_ValidationTimeType;
  ValidateProcess?: cbc_ValidateProcessType;
  ValidateTool?: cbc_ValidateToolType;
  ValidateToolVersion?: cbc_ValidateToolVersionType;
  SignatoryParty?: cac_PartyType;
}

export interface cac_RoadTransportType {
  LicensePlateID: cbc_LicensePlateIDType;
}

export interface cac_SecondaryHazardType {
  ID?: cbc_IDType;
  PlacardNotation?: cbc_PlacardNotationType;
  PlacardEndorsement?: cbc_PlacardEndorsementType;
  EmergencyProceduresCode?: cbc_EmergencyProceduresCodeType;
  Extension?: cbc_ExtensionType | cbc_ExtensionType[];
}

export interface cac_ServiceFrequencyType {
  WeekDayCode: cbc_WeekDayCodeType;
}

export interface cac_ServiceProviderPartyType {
  ID?: cbc_IDType;
  ServiceTypeCode?: cbc_ServiceTypeCodeType;
  ServiceType?: cbc_ServiceTypeType | cbc_ServiceTypeType[];
  Party: cac_PartyType;
  SellerContact?: cac_ContactType;
}

export interface cac_ShareholderPartyType {
  PartecipationPercent?: cbc_PartecipationPercentType;
  Party?: cac_PartyType;
}

export interface cac_ShipmentStageType {
  ID?: cbc_IDType;
  TransportModeCode?: cbc_TransportModeCodeType;
  TransportMeansTypeCode?: cbc_TransportMeansTypeCodeType;
  TransitDirectionCode?: cbc_TransitDirectionCodeType;
  PreCarriageIndicator?: cbc_PreCarriageIndicatorType;
  OnCarriageIndicator?: cbc_OnCarriageIndicatorType;
  EstimatedDeliveryDate?: cbc_EstimatedDeliveryDateType;
  EstimatedDeliveryTime?: cbc_EstimatedDeliveryTimeType;
  RequiredDeliveryDate?: cbc_RequiredDeliveryDateType;
  RequiredDeliveryTime?: cbc_RequiredDeliveryTimeType;
  LoadingSequenceID?: cbc_LoadingSequenceIDType;
  SuccessiveSequenceID?: cbc_SuccessiveSequenceIDType;
  Instructions?: cbc_InstructionsType | cbc_InstructionsType[];
  DemurrageInstructions?: cbc_DemurrageInstructionsType | cbc_DemurrageInstructionsType[];
  CrewQuantity?: cbc_CrewQuantityType;
  PassengerQuantity?: cbc_PassengerQuantityType;
  TransitPeriod?: cac_PeriodType;
  CarrierParty?: cac_PartyType | cac_PartyType[];
  TransportMeans?: cac_TransportMeansType;
  LoadingPortLocation?: cac_LocationType;
  UnloadingPortLocation?: cac_LocationType;
  TransshipPortLocation?: cac_LocationType;
  LoadingTransportEvent?: cac_TransportEventType;
  ExaminationTransportEvent?: cac_TransportEventType;
  AvailabilityTransportEvent?: cac_TransportEventType;
  ExportationTransportEvent?: cac_TransportEventType;
  DischargeTransportEvent?: cac_TransportEventType;
  WarehousingTransportEvent?: cac_TransportEventType;
  TakeoverTransportEvent?: cac_TransportEventType;
  OptionalTakeoverTransportEvent?: cac_TransportEventType;
  DropoffTransportEvent?: cac_TransportEventType;
  ActualPickupTransportEvent?: cac_TransportEventType;
  DeliveryTransportEvent?: cac_TransportEventType;
  ReceiptTransportEvent?: cac_TransportEventType;
  StorageTransportEvent?: cac_TransportEventType;
  AcceptanceTransportEvent?: cac_TransportEventType;
  TerminalOperatorParty?: cac_PartyType;
  CustomsAgentParty?: cac_PartyType;
  EstimatedTransitPeriod?: cac_PeriodType;
  FreightAllowanceCharge?: cac_AllowanceChargeType | cac_AllowanceChargeType[];
  FreightChargeLocation?: cac_LocationType;
  DetentionTransportEvent?: cac_TransportEventType | cac_TransportEventType[];
  RequestedDepartureTransportEvent?: cac_TransportEventType;
  RequestedArrivalTransportEvent?: cac_TransportEventType;
  RequestedWaypointTransportEvent?: cac_TransportEventType | cac_TransportEventType[];
  PlannedDepartureTransportEvent?: cac_TransportEventType;
  PlannedArrivalTransportEvent?: cac_TransportEventType;
  PlannedWaypointTransportEvent?: cac_TransportEventType | cac_TransportEventType[];
  ActualDepartureTransportEvent?: cac_TransportEventType;
  ActualWaypointTransportEvent?: cac_TransportEventType;
  ActualArrivalTransportEvent?: cac_TransportEventType;
  TransportEvent?: cac_TransportEventType | cac_TransportEventType[];
  EstimatedDepartureTransportEvent?: cac_TransportEventType;
  EstimatedArrivalTransportEvent?: cac_TransportEventType;
  PassengerPerson?: cac_PersonType | cac_PersonType[];
  DriverPerson?: cac_PersonType | cac_PersonType[];
  ReportingPerson?: cac_PersonType;
  CrewMemberPerson?: cac_PersonType | cac_PersonType[];
  SecurityOfficerPerson?: cac_PersonType;
  MasterPerson?: cac_PersonType;
  ShipsSurgeonPerson?: cac_PersonType;
}

export interface cac_ShipmentType {
  ID: cbc_IDType;
  ShippingPriorityLevelCode?: cbc_ShippingPriorityLevelCodeType;
  HandlingCode?: cbc_HandlingCodeType;
  HandlingInstructions?: cbc_HandlingInstructionsType | cbc_HandlingInstructionsType[];
  Information?: cbc_InformationType | cbc_InformationType[];
  GrossWeightMeasure?: cbc_GrossWeightMeasureType;
  NetWeightMeasure?: cbc_NetWeightMeasureType;
  NetNetWeightMeasure?: cbc_NetNetWeightMeasureType;
  GrossVolumeMeasure?: cbc_GrossVolumeMeasureType;
  NetVolumeMeasure?: cbc_NetVolumeMeasureType;
  TotalGoodsItemQuantity?: cbc_TotalGoodsItemQuantityType;
  TotalTransportHandlingUnitQuantity?: cbc_TotalTransportHandlingUnitQuantityType;
  InsuranceValueAmount?: cbc_InsuranceValueAmountType;
  DeclaredCustomsValueAmount?: cbc_DeclaredCustomsValueAmountType;
  DeclaredForCarriageValueAmount?: cbc_DeclaredForCarriageValueAmountType;
  DeclaredStatisticsValueAmount?: cbc_DeclaredStatisticsValueAmountType;
  FreeOnBoardValueAmount?: cbc_FreeOnBoardValueAmountType;
  SpecialInstructions?: cbc_SpecialInstructionsType | cbc_SpecialInstructionsType[];
  DeliveryInstructions?: cbc_DeliveryInstructionsType | cbc_DeliveryInstructionsType[];
  SplitConsignmentIndicator?: cbc_SplitConsignmentIndicatorType;
  ConsignmentQuantity?: cbc_ConsignmentQuantityType;
  Consignment?: cac_ConsignmentType | cac_ConsignmentType[];
  GoodsItem?: cac_GoodsItemType | cac_GoodsItemType[];
  ShipmentStage?: cac_ShipmentStageType | cac_ShipmentStageType[];
  Delivery?: cac_DeliveryType;
  TransportHandlingUnit?: cac_TransportHandlingUnitType | cac_TransportHandlingUnitType[];
  ReturnAddress?: cac_AddressType;
  OriginAddress?: cac_AddressType;
  FirstArrivalPortLocation?: cac_LocationType;
  LastExitPortLocation?: cac_LocationType;
  ExportCountry?: cac_CountryType;
  FreightAllowanceCharge?: cac_AllowanceChargeType | cac_AllowanceChargeType[];
}

export interface cac_SignatureType {
  ID: cbc_IDType;
  Note?: cbc_NoteType | cbc_NoteType[];
  ValidationDate?: cbc_ValidationDateType;
  ValidationTime?: cbc_ValidationTimeType;
  ValidatorID?: cbc_ValidatorIDType;
  CanonicalizationMethod?: cbc_CanonicalizationMethodType;
  SignatureMethod?: cbc_SignatureMethodType;
  SignatoryParty?: cac_PartyType;
  DigitalSignatureAttachment?: cac_AttachmentType;
  OriginalDocumentReference?: cac_DocumentReferenceType;
}

export interface cac_StatusType {
  ConditionCode?: cbc_ConditionCodeType;
  ReferenceDate?: cbc_ReferenceDateType;
  ReferenceTime?: cbc_ReferenceTimeType;
  Description?: cbc_DescriptionType | cbc_DescriptionType[];
  StatusReasonCode?: cbc_StatusReasonCodeType;
  StatusReason?: cbc_StatusReasonType | cbc_StatusReasonType[];
  SequenceID?: cbc_SequenceIDType;
  Text?: cbc_TextType | cbc_TextType[];
  IndicationIndicator?: cbc_IndicationIndicatorType;
  Percent?: cbc_PercentType;
  ReliabilityPercent?: cbc_ReliabilityPercentType;
  Condition?: cac_ConditionType | cac_ConditionType[];
}

export interface cac_StowageType {
  LocationID?: cbc_LocationIDType;
  Location?: cbc_LocationType | cbc_LocationType[];
  MeasurementDimension?: cac_DimensionType | cac_DimensionType[];
}

export interface cac_SupplierPartyType {
  CustomerAssignedAccountID?: cbc_CustomerAssignedAccountIDType;
  AdditionalAccountID?: cbc_AdditionalAccountIDType | cbc_AdditionalAccountIDType[];
  DataSendingCapability?: cbc_DataSendingCapabilityType;
  Party?: cac_PartyType;
  DespatchContact?: cac_ContactType;
  AccountingContact?: cac_ContactType;
  SellerContact?: cac_ContactType;
}

export interface cac_TaxCategoryType {
  ID?: cbc_IDType;
  Name?: cbc_NameType;
  Percent?: cbc_PercentType;
  BaseUnitMeasure?: cbc_BaseUnitMeasureType;
  PerUnitAmount?: cbc_PerUnitAmountType;
  TaxExemptionReasonCode?: cbc_TaxExemptionReasonCodeType;
  TaxExemptionReason?: cbc_TaxExemptionReasonType | cbc_TaxExemptionReasonType[];
  TierRange?: cbc_TierRangeType;
  TierRatePercent?: cbc_TierRatePercentType;
  TaxScheme: cac_TaxSchemeType;
}

export interface cac_TaxSchemeType {
  ID?: cbc_IDType;
  Name?: cbc_NameType;
  TaxTypeCode?: cbc_TaxTypeCodeType;
  CurrencyCode?: cbc_CurrencyCodeType;
  JurisdictionRegionAddress?: cac_AddressType | cac_AddressType[];
}

export interface cac_TaxSubtotalType {
  TaxableAmount?: cbc_TaxableAmountType;
  TaxAmount: cbc_TaxAmountType;
  CalculationSequenceNumeric?: cbc_CalculationSequenceNumericType;
  TransactionCurrencyTaxAmount?: cbc_TransactionCurrencyTaxAmountType;
  Percent?: cbc_PercentType;
  BaseUnitMeasure?: cbc_BaseUnitMeasureType;
  PerUnitAmount?: cbc_PerUnitAmountType;
  TierRange?: cbc_TierRangeType;
  TierRatePercent?: cbc_TierRatePercentType;
  TaxCategory: cac_TaxCategoryType;
}

export interface cac_TaxTotalType {
  TaxAmount: cbc_TaxAmountType;
  RoundingAmount?: cbc_RoundingAmountType;
  TaxEvidenceIndicator?: cbc_TaxEvidenceIndicatorType;
  TaxIncludedIndicator?: cbc_TaxIncludedIndicatorType;
  TaxSubtotal?: cac_TaxSubtotalType | cac_TaxSubtotalType[];
}

export interface cac_TemperatureType {
  AttributeID: cbc_AttributeIDType;
  Measure: cbc_MeasureType;
  Description?: cbc_DescriptionType | cbc_DescriptionType[];
}

export interface cac_TradeFinancingType {
  ID?: cbc_IDType;
  FinancingInstrumentCode?: cbc_FinancingInstrumentCodeType;
  ContractDocumentReference?: cac_DocumentReferenceType;
  DocumentReference?: cac_DocumentReferenceType | cac_DocumentReferenceType[];
  FinancingParty: cac_PartyType;
  FinancingFinancialAccount?: cac_FinancialAccountType;
  Clause?: cac_ClauseType | cac_ClauseType[];
}

export interface cac_TradingTermsType {
  Information?: cbc_InformationType | cbc_InformationType[];
  Reference?: cbc_ReferenceType;
  ApplicableAddress?: cac_AddressType;
}

export interface cac_TransactionConditionsType {
  ID?: cbc_IDType;
  ActionCode?: cbc_ActionCodeType;
  Description?: cbc_DescriptionType | cbc_DescriptionType[];
  DocumentReference?: cac_DocumentReferenceType | cac_DocumentReferenceType[];
}

export interface cac_TransportEquipmentSealType {
  ID: cbc_IDType;
  SealIssuerTypeCode?: cbc_SealIssuerTypeCodeType;
  Condition?: cbc_ConditionType;
  SealStatusCode?: cbc_SealStatusCodeType;
  SealingPartyType?: cbc_SealingPartyTypeType;
}

export interface cac_TransportEquipmentType {
  ID?: cbc_IDType;
  ReferencedConsignmentID?: cbc_ReferencedConsignmentIDType | cbc_ReferencedConsignmentIDType[];
  TransportEquipmentTypeCode?: cbc_TransportEquipmentTypeCodeType;
  ProviderTypeCode?: cbc_ProviderTypeCodeType;
  OwnerTypeCode?: cbc_OwnerTypeCodeType;
  SizeTypeCode?: cbc_SizeTypeCodeType;
  DispositionCode?: cbc_DispositionCodeType;
  FullnessIndicationCode?: cbc_FullnessIndicationCodeType;
  RefrigerationOnIndicator?: cbc_RefrigerationOnIndicatorType;
  Information?: cbc_InformationType | cbc_InformationType[];
  ReturnabilityIndicator?: cbc_ReturnabilityIndicatorType;
  LegalStatusIndicator?: cbc_LegalStatusIndicatorType;
  AirFlowPercent?: cbc_AirFlowPercentType;
  HumidityPercent?: cbc_HumidityPercentType;
  AnimalFoodApprovedIndicator?: cbc_AnimalFoodApprovedIndicatorType;
  HumanFoodApprovedIndicator?: cbc_HumanFoodApprovedIndicatorType;
  DangerousGoodsApprovedIndicator?: cbc_DangerousGoodsApprovedIndicatorType;
  RefrigeratedIndicator?: cbc_RefrigeratedIndicatorType;
  Characteristics?: cbc_CharacteristicsType;
  DamageRemarks?: cbc_DamageRemarksType | cbc_DamageRemarksType[];
  Description?: cbc_DescriptionType | cbc_DescriptionType[];
  SpecialTransportRequirements?: cbc_SpecialTransportRequirementsType | cbc_SpecialTransportRequirementsType[];
  GrossWeightMeasure?: cbc_GrossWeightMeasureType;
  GrossVolumeMeasure?: cbc_GrossVolumeMeasureType;
  TareWeightMeasure?: cbc_TareWeightMeasureType;
  TrackingDeviceCode?: cbc_TrackingDeviceCodeType;
  PowerIndicator?: cbc_PowerIndicatorType;
  TraceID?: cbc_TraceIDType;
  MeasurementDimension?: cac_DimensionType | cac_DimensionType[];
  TransportEquipmentSeal?: cac_TransportEquipmentSealType | cac_TransportEquipmentSealType[];
  MinimumTemperature?: cac_TemperatureType;
  MaximumTemperature?: cac_TemperatureType;
  ProviderParty?: cac_PartyType;
  LoadingProofParty?: cac_PartyType;
  SupplierParty?: cac_SupplierPartyType;
  OwnerParty?: cac_PartyType;
  OperatingParty?: cac_PartyType;
  LoadingLocation?: cac_LocationType;
  UnloadingLocation?: cac_LocationType;
  StorageLocation?: cac_LocationType;
  PositioningTransportEvent?: cac_TransportEventType | cac_TransportEventType[];
  QuarantineTransportEvent?: cac_TransportEventType | cac_TransportEventType[];
  DeliveryTransportEvent?: cac_TransportEventType | cac_TransportEventType[];
  PickupTransportEvent?: cac_TransportEventType | cac_TransportEventType[];
  HandlingTransportEvent?: cac_TransportEventType | cac_TransportEventType[];
  LoadingTransportEvent?: cac_TransportEventType | cac_TransportEventType[];
  TransportEvent?: cac_TransportEventType | cac_TransportEventType[];
  ApplicableTransportMeans?: cac_TransportMeansType;
  HaulageTradingTerms?: cac_TradingTermsType | cac_TradingTermsType[];
  HazardousGoodsTransit?: cac_HazardousGoodsTransitType | cac_HazardousGoodsTransitType[];
  PackagedTransportHandlingUnit?: cac_TransportHandlingUnitType | cac_TransportHandlingUnitType[];
  ServiceAllowanceCharge?: cac_AllowanceChargeType | cac_AllowanceChargeType[];
  FreightAllowanceCharge?: cac_AllowanceChargeType | cac_AllowanceChargeType[];
  AttachedTransportEquipment?: cac_TransportEquipmentType | cac_TransportEquipmentType[];
  Delivery?: cac_DeliveryType;
  Pickup?: cac_PickupType;
  Despatch?: cac_DespatchType;
  ShipmentDocumentReference?: cac_DocumentReferenceType | cac_DocumentReferenceType[];
  ContainedInTransportEquipment?: cac_TransportEquipmentType | cac_TransportEquipmentType[];
  Package?: cac_PackageType | cac_PackageType[];
  GoodsItem?: cac_GoodsItemType | cac_GoodsItemType[];
}

export interface cac_TransportEventType {
  IdentificationID?: cbc_IdentificationIDType;
  OccurrenceDate?: cbc_OccurrenceDateType;
  OccurrenceTime?: cbc_OccurrenceTimeType;
  TransportEventTypeCode?: cbc_TransportEventTypeCodeType;
  Description?: cbc_DescriptionType | cbc_DescriptionType[];
  CompletionIndicator?: cbc_CompletionIndicatorType;
  ReportedShipment?: cac_ShipmentType;
  CurrentStatus?: cac_StatusType | cac_StatusType[];
  Contact?: cac_ContactType | cac_ContactType[];
  Location?: cac_LocationType;
  Signature?: cac_SignatureType;
  Period?: cac_PeriodType | cac_PeriodType[];
}

export interface cac_TransportHandlingUnitType {
  ID?: cbc_IDType;
  TransportHandlingUnitTypeCode?: cbc_TransportHandlingUnitTypeCodeType;
  HandlingCode?: cbc_HandlingCodeType;
  HandlingInstructions?: cbc_HandlingInstructionsType | cbc_HandlingInstructionsType[];
  HazardousRiskIndicator?: cbc_HazardousRiskIndicatorType;
  TotalGoodsItemQuantity?: cbc_TotalGoodsItemQuantityType;
  TotalPackageQuantity?: cbc_TotalPackageQuantityType;
  DamageRemarks?: cbc_DamageRemarksType | cbc_DamageRemarksType[];
  ShippingMarks?: cbc_ShippingMarksType | cbc_ShippingMarksType[];
  TraceID?: cbc_TraceIDType;
  HandlingUnitDespatchLine?: cac_DespatchLineType | cac_DespatchLineType[];
  ActualPackage?: cac_PackageType | cac_PackageType[];
  ReceivedHandlingUnitReceiptLine?: cac_ReceiptLineType | cac_ReceiptLineType[];
  TransportEquipment?: cac_TransportEquipmentType | cac_TransportEquipmentType[];
  TransportMeans?: cac_TransportMeansType | cac_TransportMeansType[];
  HazardousGoodsTransit?: cac_HazardousGoodsTransitType | cac_HazardousGoodsTransitType[];
  MeasurementDimension?: cac_DimensionType | cac_DimensionType[];
  MinimumTemperature?: cac_TemperatureType;
  MaximumTemperature?: cac_TemperatureType;
  GoodsItem?: cac_GoodsItemType | cac_GoodsItemType[];
  FloorSpaceMeasurementDimension?: cac_DimensionType;
  PalletSpaceMeasurementDimension?: cac_DimensionType;
  ShipmentDocumentReference?: cac_DocumentReferenceType | cac_DocumentReferenceType[];
  Status?: cac_StatusType | cac_StatusType[];
  CustomsDeclaration?: cac_CustomsDeclarationType | cac_CustomsDeclarationType[];
  ReferencedShipment?: cac_ShipmentType | cac_ShipmentType[];
  Package?: cac_PackageType | cac_PackageType[];
}

export interface cac_TransportMeansType {
  JourneyID?: cbc_JourneyIDType;
  RegistrationNationalityID?: cbc_RegistrationNationalityIDType;
  RegistrationNationality?: cbc_RegistrationNationalityType | cbc_RegistrationNationalityType[];
  DirectionCode?: cbc_DirectionCodeType;
  TransportMeansTypeCode?: cbc_TransportMeansTypeCodeType;
  TradeServiceCode?: cbc_TradeServiceCodeType;
  Stowage?: cac_StowageType;
  AirTransport?: cac_AirTransportType;
  RoadTransport?: cac_RoadTransportType;
  RailTransport?: cac_RailTransportType;
  MaritimeTransport?: cac_MaritimeTransportType;
  OwnerParty?: cac_PartyType;
  MeasurementDimension?: cac_DimensionType | cac_DimensionType[];
}

export interface cac_TransportationServiceType {
  TransportServiceCode: cbc_TransportServiceCodeType;
  TariffClassCode?: cbc_TariffClassCodeType;
  Priority?: cbc_PriorityType;
  FreightRateClassCode?: cbc_FreightRateClassCodeType;
  TransportationServiceDescription?: cbc_TransportationServiceDescriptionType | cbc_TransportationServiceDescriptionType[];
  TransportationServiceDetailsURI?: cbc_TransportationServiceDetailsURIType;
  NominationDate?: cbc_NominationDateType;
  NominationTime?: cbc_NominationTimeType;
  Name?: cbc_NameType;
  SequenceNumeric?: cbc_SequenceNumericType;
  TransportEquipment?: cac_TransportEquipmentType | cac_TransportEquipmentType[];
  SupportedTransportEquipment?: cac_TransportEquipmentType | cac_TransportEquipmentType[];
  UnsupportedTransportEquipment?: cac_TransportEquipmentType | cac_TransportEquipmentType[];
  CommodityClassification?: cac_CommodityClassificationType | cac_CommodityClassificationType[];
  SupportedCommodityClassification?: cac_CommodityClassificationType | cac_CommodityClassificationType[];
  UnsupportedCommodityClassification?: cac_CommodityClassificationType | cac_CommodityClassificationType[];
  TotalCapacityDimension?: cac_DimensionType;
  ShipmentStage?: cac_ShipmentStageType | cac_ShipmentStageType[];
  TransportEvent?: cac_TransportEventType | cac_TransportEventType[];
  ResponsibleTransportServiceProviderParty?: cac_PartyType;
  EnvironmentalEmission?: cac_EnvironmentalEmissionType | cac_EnvironmentalEmissionType[];
  EstimatedDurationPeriod?: cac_PeriodType;
  ScheduledServiceFrequency?: cac_ServiceFrequencyType | cac_ServiceFrequencyType[];
}

export interface cac_WorkPhaseReferenceType {
  ID?: cbc_IDType;
  WorkPhaseCode?: cbc_WorkPhaseCodeType;
  WorkPhase?: cbc_WorkPhaseType | cbc_WorkPhaseType[];
  ProgressPercent?: cbc_ProgressPercentType;
  StartDate?: cbc_StartDateType;
  EndDate?: cbc_EndDateType;
  WorkOrderDocumentReference?: cac_DocumentReferenceType | cac_DocumentReferenceType[];
}

export type cbc_AccountFormatCodeType = udt_CodeType;

export type cbc_AccountIDType = udt_IdentifierType;

export type cbc_AccountTypeCodeType = udt_CodeType;

export type cbc_AccountingCostCodeType = udt_CodeType;

export type cbc_AccountingCostType = udt_TextType;

export type cbc_ActionCodeType = udt_CodeType;

export type cbc_ActualDeliveryDateType = udt_DateType;

export type cbc_ActualDeliveryTimeType = udt_TimeType;

export type cbc_ActualDespatchDateType = udt_DateType;

export type cbc_ActualDespatchTimeType = udt_TimeType;

export type cbc_ActualPickupDateType = udt_DateType;

export type cbc_ActualPickupTimeType = udt_TimeType;

export type cbc_AdditionalAccountIDType = udt_IdentifierType;

export type cbc_AdditionalInformationType = udt_TextType;

export type cbc_AdditionalStreetNameType = udt_NameType;

export type cbc_AddressFormatCodeType = udt_CodeType;

export type cbc_AddressTypeCodeType = udt_CodeType;

export type cbc_AirFlowPercentType = udt_PercentType;

export type cbc_AircraftIDType = udt_IdentifierType;

export type cbc_AliasNameType = udt_NameType;

export type cbc_AllowanceChargeReasonCodeType = udt_CodeType;

export type cbc_AllowanceChargeReasonType = udt_TextType;

export type cbc_AllowanceTotalAmountType = udt_AmountType;

export type cbc_AltitudeMeasureType = udt_MeasureType;

export type cbc_AmountType = udt_AmountType;

export type cbc_AnimalFoodApprovedIndicatorType = udt_IndicatorType;

export type cbc_AnimalFoodIndicatorType = udt_IndicatorType;

export type cbc_AttributeIDType = udt_IdentifierType;

export type cbc_BackorderQuantityType = udt_QuantityType;

export type cbc_BackorderReasonType = udt_TextType;

export type cbc_BarcodeSymbologyIDType = udt_IdentifierType;

export type cbc_BaseAmountType = udt_AmountType;

export type cbc_BaseQuantityType = udt_QuantityType;

export type cbc_BaseUnitMeasureType = udt_MeasureType;

export type cbc_BatchQuantityType = udt_QuantityType;

export type cbc_BestBeforeDateType = udt_DateType;

export type cbc_BirthDateType = udt_DateType;

export type cbc_BirthplaceNameType = udt_TextType;

export type cbc_BlockNameType = udt_NameType;

export type cbc_BrandNameType = udt_NameType;

export type cbc_BrokerAssignedIDType = udt_IdentifierType;

export type cbc_BuildingNameType = udt_NameType;

export type cbc_BuildingNumberType = udt_TextType;

export type cbc_BulkCargoIndicatorType = udt_IndicatorType;

export type cbc_BuyerReferenceType = udt_TextType;

export type cbc_CV2IDType = udt_IdentifierType;

export type cbc_CalculationMethodCodeType = udt_CodeType;

export type cbc_CalculationRateType = udt_RateType;

export type cbc_CalculationSequenceNumericType = udt_NumericType;

export type cbc_CanonicalizationMethodType = udt_TextType;

export type cbc_CardChipCodeType = udt_CodeType;

export type cbc_CardTypeCodeType = udt_CodeType;

export type cbc_CargoTypeCodeType = udt_CodeType;

export type cbc_CarrierAssignedIDType = udt_IdentifierType;

export type cbc_CarrierServiceInstructionsType = udt_TextType;

export type cbc_CatalogueIndicatorType = udt_IndicatorType;

export type cbc_CategoryNameType = udt_NameType;

export type cbc_CertificateTypeCodeType = udt_CodeType;

export type cbc_CertificateTypeType = udt_TextType;

export type cbc_ChannelCodeType = udt_CodeType;

export type cbc_ChannelType = udt_TextType;

export type cbc_CharacterSetCodeType = udt_CodeType;

export type cbc_CharacteristicsType = udt_TextType;

export type cbc_ChargeIndicatorType = udt_IndicatorType;

export type cbc_ChargeTotalAmountType = udt_AmountType;

export type cbc_ChargeableQuantityType = udt_QuantityType;

export type cbc_ChargeableWeightMeasureType = udt_MeasureType;

export type cbc_ChildConsignmentQuantityType = udt_QuantityType;

export type cbc_ChipApplicationIDType = udt_IdentifierType;

export type cbc_CityNameType = udt_NameType;

export type cbc_CitySubdivisionNameType = udt_NameType;

export type cbc_CommodityCodeType = udt_CodeType;

export type cbc_CompanyIDType = udt_IdentifierType;

export type cbc_CompanyLegalFormCodeType = udt_CodeType;

export type cbc_CompanyLegalFormType = udt_TextType;

export type cbc_CompanyLiquidationStatusCodeType = udt_CodeType;

export type cbc_CompletionIndicatorType = udt_IndicatorType;

export type cbc_ConditionCodeType = udt_CodeType;

export type cbc_ConditionType = udt_TextType;

export type cbc_ConditionsType = udt_TextType;

export type cbc_ConsigneeAssignedIDType = udt_IdentifierType;

export type cbc_ConsignmentQuantityType = udt_QuantityType;

export type cbc_ConsignorAssignedIDType = udt_IdentifierType;

export type cbc_ConsolidatableIndicatorType = udt_IndicatorType;

export type cbc_ConsumerUnitQuantityType = udt_QuantityType;

export type cbc_ContainerizedIndicatorType = udt_IndicatorType;

export type cbc_ContentType = udt_TextType;

export type cbc_ContractTypeCodeType = udt_CodeType;

export type cbc_ContractTypeType = udt_TextType;

export type cbc_ContractedCarrierAssignedIDType = udt_IdentifierType;

export type cbc_CoordinateSystemCodeType = udt_CodeType;

export type cbc_CopyIndicatorType = udt_IndicatorType;

export type cbc_CorporateRegistrationTypeCodeType = udt_CodeType;

export type cbc_CorporateStockAmountType = udt_AmountType;

export type cbc_CountrySubentityCodeType = udt_CodeType;

export type cbc_CountrySubentityType = udt_TextType;

export type cbc_CrewQuantityType = udt_QuantityType;

export type cbc_CurrencyCodeType = udt_CodeType;

export type cbc_CustomerAssignedAccountIDType = udt_IdentifierType;

export type cbc_CustomerReferenceType = udt_TextType;

export type cbc_CustomizationIDType = udt_IdentifierType;

export type cbc_CustomsClearanceServiceInstructionsType = udt_TextType;

export type cbc_CustomsImportClassifiedIndicatorType = udt_IndicatorType;

export type cbc_CustomsStatusCodeType = udt_CodeType;

export type cbc_CustomsTariffQuantityType = udt_QuantityType;

export type cbc_DamageRemarksType = udt_TextType;

export type cbc_DangerousGoodsApprovedIndicatorType = udt_IndicatorType;

export type cbc_DataSendingCapabilityType = udt_TextType;

export type cbc_DateType = udt_DateType;

export type cbc_DeclaredCustomsValueAmountType = udt_AmountType;

export type cbc_DeclaredForCarriageValueAmountType = udt_AmountType;

export type cbc_DeclaredStatisticsValueAmountType = udt_AmountType;

export type cbc_DeliveredQuantityType = udt_QuantityType;

export type cbc_DeliveryInstructionsType = udt_TextType;

export type cbc_DemurrageInstructionsType = udt_TextType;

export type cbc_DepartmentType = udt_TextType;

export type cbc_DescriptionCodeType = udt_CodeType;

export type cbc_DescriptionType = udt_TextType;

export type cbc_DirectionCodeType = udt_CodeType;

export type cbc_DispositionCodeType = udt_CodeType;

export type cbc_DistrictType = udt_TextType;

export type cbc_DocumentCurrencyCodeType = udt_CodeType;

export type cbc_DocumentDescriptionType = udt_TextType;

export type cbc_DocumentHashType = udt_TextType;

export type cbc_DocumentStatusCodeType = udt_CodeType;

export type cbc_DocumentTypeCodeType = udt_CodeType;

export type cbc_DocumentTypeType = udt_TextType;

export type cbc_DueDateType = udt_DateType;

export type cbc_DurationMeasureType = udt_MeasureType;

export type cbc_EarliestPickupDateType = udt_DateType;

export type cbc_EarliestPickupTimeType = udt_TimeType;

export type cbc_ElectronicMailType = udt_TextType;

export type cbc_EmbeddedDocumentBinaryObjectType = udt_BinaryObjectType;

export type cbc_EmergencyProceduresCodeType = udt_CodeType;

export type cbc_EncodingCodeType = udt_CodeType;

export type cbc_EndDateType = udt_DateType;

export type cbc_EndTimeType = udt_TimeType;

export type cbc_EndpointIDType = udt_IdentifierType;

export type cbc_EnvironmentalEmissionTypeCodeType = udt_CodeType;

export type cbc_EstimatedDeliveryDateType = udt_DateType;

export type cbc_EstimatedDeliveryTimeType = udt_TimeType;

export type cbc_EstimatedDespatchDateType = udt_DateType;

export type cbc_EstimatedDespatchTimeType = udt_TimeType;

export type cbc_ExchangeMarketIDType = udt_IdentifierType;

export type cbc_ExemptionReasonCodeType = udt_CodeType;

export type cbc_ExemptionReasonType = udt_TextType;

export type cbc_ExpiryDateType = udt_DateType;

export type cbc_ExpiryTimeType = udt_TimeType;

export type cbc_ExtendedIDType = udt_IdentifierType;

export type cbc_ExtensionType = udt_TextType;

export type cbc_FamilyNameType = udt_NameType;

export type cbc_FileNameType = udt_NameType;

export type cbc_FinancingInstrumentCodeType = udt_CodeType;

export type cbc_FirstNameType = udt_NameType;

export type cbc_FloorType = udt_TextType;

export type cbc_FormatCodeType = udt_CodeType;

export type cbc_ForwarderServiceInstructionsType = udt_TextType;

export type cbc_FreeOfChargeIndicatorType = udt_IndicatorType;

export type cbc_FreeOnBoardValueAmountType = udt_AmountType;

export type cbc_FreightForwarderAssignedIDType = udt_IdentifierType;

export type cbc_FreightRateClassCodeType = udt_CodeType;

export type cbc_FullnessIndicationCodeType = udt_CodeType;

export type cbc_FullyPaidSharesIndicatorType = udt_IndicatorType;

export type cbc_GenderCodeType = udt_CodeType;

export type cbc_GeneralCargoIndicatorType = udt_IndicatorType;

export type cbc_GrossTonnageMeasureType = udt_MeasureType;

export type cbc_GrossVolumeMeasureType = udt_MeasureType;

export type cbc_GrossWeightMeasureType = udt_MeasureType;

export type cbc_GuaranteedDespatchDateType = udt_DateType;

export type cbc_GuaranteedDespatchTimeType = udt_TimeType;

export type cbc_HandlingCodeType = udt_CodeType;

export type cbc_HandlingInstructionsType = udt_TextType;

export type cbc_HashAlgorithmMethodType = udt_TextType;

export type cbc_HaulageInstructionsType = udt_TextType;

export type cbc_HazardClassIDType = udt_IdentifierType;

export type cbc_HazardousCategoryCodeType = udt_CodeType;

export type cbc_HazardousRegulationCodeType = udt_CodeType;

export type cbc_HazardousRiskIndicatorType = udt_IndicatorType;

export type cbc_HolderNameType = udt_NameType;

export type cbc_HumanFoodApprovedIndicatorType = udt_IndicatorType;

export type cbc_HumanFoodIndicatorType = udt_IndicatorType;

export type cbc_HumidityPercentType = udt_PercentType;

export type cbc_IDType = udt_IdentifierType;

export type cbc_IdentificationCodeType = udt_CodeType;

export type cbc_IdentificationIDType = udt_IdentifierType;

export type cbc_ImportanceCodeType = udt_CodeType;

export type cbc_IndicationIndicatorType = udt_IndicatorType;

export type cbc_IndustryClassificationCodeType = udt_CodeType;

export type cbc_InformationType = udt_TextType;

export type cbc_InformationURIType = udt_IdentifierType;

export type cbc_InhalationToxicityZoneCodeType = udt_CodeType;

export type cbc_InhouseMailType = udt_TextType;

export type cbc_InstallmentDueDateType = udt_DateType;

export type cbc_InstructionIDType = udt_IdentifierType;

export type cbc_InstructionNoteType = udt_TextType;

export type cbc_InstructionsType = udt_TextType;

export type cbc_InsurancePremiumAmountType = udt_AmountType;

export type cbc_InsuranceValueAmountType = udt_AmountType;

export type cbc_InvoiceTypeCodeType = udt_CodeType;

export type cbc_InvoicedQuantityType = udt_QuantityType;

export type cbc_InvoicingPartyReferenceType = udt_TextType;

export type cbc_IssueDateType = udt_DateType;

export type cbc_IssueNumberIDType = udt_IdentifierType;

export type cbc_IssueTimeType = udt_TimeType;

export type cbc_IssuerIDType = udt_IdentifierType;

export type cbc_ItemClassificationCodeType = udt_CodeType;

export type cbc_JobTitleType = udt_TextType;

export type cbc_JourneyIDType = udt_IdentifierType;

export type cbc_KeywordType = udt_TextType;

export type cbc_LanguageIDType = udt_IdentifierType;

export type cbc_LatestDeliveryDateType = udt_DateType;

export type cbc_LatestDeliveryTimeType = udt_TimeType;

export type cbc_LatestPickupDateType = udt_DateType;

export type cbc_LatestPickupTimeType = udt_TimeType;

export type cbc_LatitudeDegreesMeasureType = udt_MeasureType;

export type cbc_LatitudeDirectionCodeType = udt_CodeType;

export type cbc_LatitudeMinutesMeasureType = udt_MeasureType;

export type cbc_LeadTimeMeasureType = udt_MeasureType;

export type cbc_LegalStatusIndicatorType = udt_IndicatorType;

export type cbc_LicensePlateIDType = udt_IdentifierType;

export type cbc_LineCountNumericType = udt_NumericType;

export type cbc_LineExtensionAmountType = udt_AmountType;

export type cbc_LineIDType = udt_IdentifierType;

export type cbc_LineStatusCodeType = udt_CodeType;

export type cbc_LineType = udt_TextType;

export type cbc_ListValueType = udt_TextType;

export type cbc_LivestockIndicatorType = udt_IndicatorType;

export type cbc_LoadingLengthMeasureType = udt_MeasureType;

export type cbc_LoadingSequenceIDType = udt_IdentifierType;

export type cbc_LocaleCodeType = udt_CodeType;

export type cbc_LocationIDType = udt_IdentifierType;

export type cbc_LocationType = udt_TextType;

export type cbc_LocationTypeCodeType = udt_CodeType;

export type cbc_LogoReferenceIDType = udt_IdentifierType;

export type cbc_LongitudeDegreesMeasureType = udt_MeasureType;

export type cbc_LongitudeDirectionCodeType = udt_CodeType;

export type cbc_LongitudeMinutesMeasureType = udt_MeasureType;

export type cbc_LossRiskResponsibilityCodeType = udt_CodeType;

export type cbc_LossRiskType = udt_TextType;

export type cbc_LotNumberIDType = udt_IdentifierType;

export type cbc_LowerOrangeHazardPlacardIDType = udt_IdentifierType;

export type cbc_MandateTypeCodeType = udt_CodeType;

export type cbc_ManufactureDateType = udt_DateType;

export type cbc_ManufactureTimeType = udt_TimeType;

export type cbc_MarkAttentionIndicatorType = udt_IndicatorType;

export type cbc_MarkAttentionType = udt_TextType;

export type cbc_MarkCareIndicatorType = udt_IndicatorType;

export type cbc_MarkCareType = udt_TextType;

export type cbc_MarkingIDType = udt_IdentifierType;

export type cbc_MathematicOperatorCodeType = udt_CodeType;

export type cbc_MaximumMeasureType = udt_MeasureType;

export type cbc_MaximumPaidAmountType = udt_AmountType;

export type cbc_MaximumPaymentInstructionsNumericType = udt_NumericType;

export type cbc_MaximumQuantityType = udt_QuantityType;

export type cbc_MaximumValueType = udt_TextType;

export type cbc_MeasureType = udt_MeasureType;

export type cbc_MedicalFirstAidGuideCodeType = udt_CodeType;

export type cbc_MiddleNameType = udt_NameType;

export type cbc_MimeCodeType = udt_CodeType;

export type cbc_MinimumMeasureType = udt_MeasureType;

export type cbc_MinimumQuantityType = udt_QuantityType;

export type cbc_MinimumValueType = udt_TextType;

export type cbc_ModelNameType = udt_NameType;

export type cbc_MultiplierFactorNumericType = udt_NumericType;

export type cbc_NameCodeType = udt_CodeType;

export type cbc_NameSuffixType = udt_TextType;

export type cbc_NameType = udt_NameType;

export type cbc_NationalityIDType = udt_IdentifierType;

export type cbc_NatureCodeType = udt_CodeType;

export type cbc_NetNetWeightMeasureType = udt_MeasureType;

export type cbc_NetTonnageMeasureType = udt_MeasureType;

export type cbc_NetVolumeMeasureType = udt_MeasureType;

export type cbc_NetWeightMeasureType = udt_MeasureType;

export type cbc_NetworkIDType = udt_IdentifierType;

export type cbc_NominationDateType = udt_DateType;

export type cbc_NominationTimeType = udt_TimeType;

export type cbc_NoteType = udt_TextType;

export type cbc_OccurrenceDateType = udt_DateType;

export type cbc_OccurrenceTimeType = udt_TimeType;

export type cbc_OnCarriageIndicatorType = udt_IndicatorType;

export type cbc_OrderTypeCodeType = udt_CodeType;

export type cbc_OrderableUnitFactorRateType = udt_RateType;

export type cbc_OrganizationDepartmentType = udt_TextType;

export type cbc_OtherNameType = udt_NameType;

export type cbc_OutstandingQuantityType = udt_QuantityType;

export type cbc_OutstandingReasonType = udt_TextType;

export type cbc_OversupplyQuantityType = udt_QuantityType;

export type cbc_OwnerTypeCodeType = udt_CodeType;

export type cbc_PackQuantityType = udt_QuantityType;

export type cbc_PackSizeNumericType = udt_NumericType;

export type cbc_PackageLevelCodeType = udt_CodeType;

export type cbc_PackagingTypeCodeType = udt_CodeType;

export type cbc_PackingCriteriaCodeType = udt_CodeType;

export type cbc_PackingMaterialType = udt_TextType;

export type cbc_PaidAmountType = udt_AmountType;

export type cbc_PaidDateType = udt_DateType;

export type cbc_PaidTimeType = udt_TimeType;

export type cbc_PartecipationPercentType = udt_PercentType;

export type cbc_PassengerQuantityType = udt_QuantityType;

export type cbc_PayableAlternativeAmountType = udt_AmountType;

export type cbc_PayableAmountType = udt_AmountType;

export type cbc_PayableRoundingAmountType = udt_AmountType;

export type cbc_PaymentAlternativeCurrencyCodeType = udt_CodeType;

export type cbc_PaymentChannelCodeType = udt_CodeType;

export type cbc_PaymentCurrencyCodeType = udt_CodeType;

export type cbc_PaymentDueDateType = udt_DateType;

export type cbc_PaymentIDType = udt_IdentifierType;

export type cbc_PaymentMeansCodeType = udt_CodeType;

export type cbc_PaymentMeansIDType = udt_IdentifierType;

export type cbc_PaymentNoteType = udt_TextType;

export type cbc_PaymentPercentType = udt_PercentType;

export type cbc_PaymentPurposeCodeType = udt_CodeType;

export type cbc_PaymentTermsDetailsURIType = udt_IdentifierType;

export type cbc_PenaltyAmountType = udt_AmountType;

export type cbc_PenaltySurchargePercentType = udt_PercentType;

export type cbc_PerUnitAmountType = udt_AmountType;

export type cbc_PercentType = udt_PercentType;

export type cbc_PerformingCarrierAssignedIDType = udt_IdentifierType;

export type cbc_PlacardEndorsementType = udt_TextType;

export type cbc_PlacardNotationType = udt_TextType;

export type cbc_PlotIdentificationType = udt_TextType;

export type cbc_PositionCodeType = udt_CodeType;

export type cbc_PostalZoneType = udt_TextType;

export type cbc_PostboxType = udt_TextType;

export type cbc_PowerIndicatorType = udt_IndicatorType;

export type cbc_PreCarriageIndicatorType = udt_IndicatorType;

export type cbc_PreferenceCriterionCodeType = udt_CodeType;

export type cbc_PrepaidAmountType = udt_AmountType;

export type cbc_PrepaidIndicatorType = udt_IndicatorType;

export type cbc_PrepaidPaymentReferenceIDType = udt_IdentifierType;

export type cbc_PriceAmountType = udt_AmountType;

export type cbc_PriceChangeReasonType = udt_TextType;

export type cbc_PriceTypeCodeType = udt_CodeType;

export type cbc_PriceTypeType = udt_TextType;

export type cbc_PricingCurrencyCodeType = udt_CodeType;

export type cbc_PrimaryAccountNumberIDType = udt_IdentifierType;

export type cbc_PriorityType = udt_TextType;

export type cbc_ProductTraceIDType = udt_IdentifierType;

export type cbc_ProfileExecutionIDType = udt_IdentifierType;

export type cbc_ProfileIDType = udt_IdentifierType;

export type cbc_ProgressPercentType = udt_PercentType;

export type cbc_ProviderTypeCodeType = udt_CodeType;

export type cbc_QuantityDiscrepancyCodeType = udt_CodeType;

export type cbc_QuantityType = udt_QuantityType;

export type cbc_RadioCallSignIDType = udt_IdentifierType;

export type cbc_RailCarIDType = udt_IdentifierType;

export type cbc_ReceivedDateType = udt_DateType;

export type cbc_ReceivedQuantityType = udt_QuantityType;

export type cbc_ReferenceDateType = udt_DateType;

export type cbc_ReferenceEventCodeType = udt_CodeType;

export type cbc_ReferenceTimeType = udt_TimeType;

export type cbc_ReferenceType = udt_TextType;

export type cbc_ReferencedConsignmentIDType = udt_IdentifierType;

export type cbc_RefrigeratedIndicatorType = udt_IndicatorType;

export type cbc_RefrigerationOnIndicatorType = udt_IndicatorType;

export type cbc_RegionType = udt_TextType;

export type cbc_RegistrationDateType = udt_DateType;

export type cbc_RegistrationExpirationDateType = udt_DateType;

export type cbc_RegistrationIDType = udt_IdentifierType;

export type cbc_RegistrationNameType = udt_NameType;

export type cbc_RegistrationNationalityIDType = udt_IdentifierType;

export type cbc_RegistrationNationalityType = udt_TextType;

export type cbc_RejectActionCodeType = udt_CodeType;

export type cbc_RejectReasonCodeType = udt_CodeType;

export type cbc_RejectReasonType = udt_TextType;

export type cbc_RejectedQuantityType = udt_QuantityType;

export type cbc_ReleaseIDType = udt_IdentifierType;

export type cbc_ReliabilityPercentType = udt_PercentType;

export type cbc_RemarksType = udt_TextType;

export type cbc_RequestedDespatchDateType = udt_DateType;

export type cbc_RequestedDespatchTimeType = udt_TimeType;

export type cbc_RequiredCustomsIDType = udt_IdentifierType;

export type cbc_RequiredDeliveryDateType = udt_DateType;

export type cbc_RequiredDeliveryTimeType = udt_TimeType;

export type cbc_ReturnabilityIndicatorType = udt_IndicatorType;

export type cbc_ReturnableMaterialIndicatorType = udt_IndicatorType;

export type cbc_ReturnableQuantityType = udt_QuantityType;

export type cbc_RoomType = udt_TextType;

export type cbc_RoundingAmountType = udt_AmountType;

export type cbc_SalesOrderIDType = udt_IdentifierType;

export type cbc_SalesOrderLineIDType = udt_IdentifierType;

export type cbc_SealIssuerTypeCodeType = udt_CodeType;

export type cbc_SealStatusCodeType = udt_CodeType;

export type cbc_SealingPartyTypeType = udt_TextType;

export type cbc_SequenceIDType = udt_IdentifierType;

export type cbc_SequenceNumberIDType = udt_IdentifierType;

export type cbc_SequenceNumericType = udt_NumericType;

export type cbc_SerialIDType = udt_IdentifierType;

export type cbc_ServiceTypeCodeType = udt_CodeType;

export type cbc_ServiceTypeType = udt_TextType;

export type cbc_SettlementDiscountAmountType = udt_AmountType;

export type cbc_SettlementDiscountPercentType = udt_PercentType;

export type cbc_ShippingMarksType = udt_TextType;

export type cbc_ShippingPriorityLevelCodeType = udt_CodeType;

export type cbc_ShipsRequirementsType = udt_TextType;

export type cbc_ShortQuantityType = udt_QuantityType;

export type cbc_ShortageActionCodeType = udt_CodeType;

export type cbc_SignatureIDType = udt_IdentifierType;

export type cbc_SignatureMethodType = udt_TextType;

export type cbc_SizeTypeCodeType = udt_CodeType;

export type cbc_SoleProprietorshipIndicatorType = udt_IndicatorType;

export type cbc_SourceCurrencyBaseRateType = udt_RateType;

export type cbc_SourceCurrencyCodeType = udt_CodeType;

export type cbc_SpecialInstructionsType = udt_TextType;

export type cbc_SpecialSecurityIndicatorType = udt_IndicatorType;

export type cbc_SpecialServiceInstructionsType = udt_TextType;

export type cbc_SpecialTermsType = udt_TextType;

export type cbc_SpecialTransportRequirementsType = udt_TextType;

export type cbc_SplitConsignmentIndicatorType = udt_IndicatorType;

export type cbc_StartDateType = udt_DateType;

export type cbc_StartTimeType = udt_TimeType;

export type cbc_StatusCodeType = udt_CodeType;

export type cbc_StatusReasonCodeType = udt_CodeType;

export type cbc_StatusReasonType = udt_TextType;

export type cbc_StreetNameType = udt_NameType;

export type cbc_SuccessiveSequenceIDType = udt_IdentifierType;

export type cbc_SummaryDescriptionType = udt_TextType;

export type cbc_SupplierAssignedAccountIDType = udt_IdentifierType;

export type cbc_TareWeightMeasureType = udt_MeasureType;

export type cbc_TargetCurrencyBaseRateType = udt_RateType;

export type cbc_TargetCurrencyCodeType = udt_CodeType;

export type cbc_TariffClassCodeType = udt_CodeType;

export type cbc_TariffCodeType = udt_CodeType;

export type cbc_TariffDescriptionType = udt_TextType;

export type cbc_TaxAmountType = udt_AmountType;

export type cbc_TaxCurrencyCodeType = udt_CodeType;

export type cbc_TaxEvidenceIndicatorType = udt_IndicatorType;

export type cbc_TaxExclusiveAmountType = udt_AmountType;

export type cbc_TaxExemptionReasonCodeType = udt_CodeType;

export type cbc_TaxExemptionReasonType = udt_TextType;

export type cbc_TaxIncludedIndicatorType = udt_IndicatorType;

export type cbc_TaxInclusiveAmountType = udt_AmountType;

export type cbc_TaxLevelCodeType = udt_CodeType;

export type cbc_TaxPointDateType = udt_DateType;

export type cbc_TaxTypeCodeType = udt_CodeType;

export type cbc_TaxableAmountType = udt_AmountType;

export type cbc_TechnicalNameType = udt_NameType;

export type cbc_TelefaxType = udt_TextType;

export type cbc_TelephoneType = udt_TextType;

export type cbc_TestMethodType = udt_TextType;

export type cbc_TextType = udt_TextType;

export type cbc_ThirdPartyPayerIndicatorType = udt_IndicatorType;

export type cbc_TierRangeType = udt_TextType;

export type cbc_TierRatePercentType = udt_PercentType;

export type cbc_TimezoneOffsetType = udt_TextType;

export type cbc_TimingComplaintCodeType = udt_CodeType;

export type cbc_TimingComplaintType = udt_TextType;

export type cbc_TitleType = udt_TextType;

export type cbc_TotalGoodsItemQuantityType = udt_QuantityType;

export type cbc_TotalInvoiceAmountType = udt_AmountType;

export type cbc_TotalPackageQuantityType = udt_QuantityType;

export type cbc_TotalPackagesQuantityType = udt_QuantityType;

export type cbc_TotalTransportHandlingUnitQuantityType = udt_QuantityType;

export type cbc_TraceIDType = udt_IdentifierType;

export type cbc_TrackingDeviceCodeType = udt_CodeType;

export type cbc_TrackingIDType = udt_IdentifierType;

export type cbc_TradeServiceCodeType = udt_CodeType;

export type cbc_TradingRestrictionsType = udt_TextType;

export type cbc_TrainIDType = udt_IdentifierType;

export type cbc_TransactionCurrencyTaxAmountType = udt_AmountType;

export type cbc_TransitDirectionCodeType = udt_CodeType;

export type cbc_TransportAuthorizationCodeType = udt_CodeType;

export type cbc_TransportEmergencyCardCodeType = udt_CodeType;

export type cbc_TransportEquipmentTypeCodeType = udt_CodeType;

export type cbc_TransportEventTypeCodeType = udt_CodeType;

export type cbc_TransportHandlingUnitTypeCodeType = udt_CodeType;

export type cbc_TransportMeansTypeCodeType = udt_CodeType;

export type cbc_TransportModeCodeType = udt_CodeType;

export type cbc_TransportServiceCodeType = udt_CodeType;

export type cbc_TransportationServiceDescriptionType = udt_TextType;

export type cbc_TransportationServiceDetailsURIType = udt_IdentifierType;

export type cbc_UBLVersionIDType = udt_IdentifierType;

export type cbc_UNDGCodeType = udt_CodeType;

export type cbc_URIType = udt_IdentifierType;

export type cbc_UUIDType = udt_IdentifierType;

export type cbc_UpperOrangeHazardPlacardIDType = udt_IdentifierType;

export type cbc_ValidateProcessType = udt_TextType;

export type cbc_ValidateToolType = udt_TextType;

export type cbc_ValidateToolVersionType = udt_TextType;

export type cbc_ValidationDateType = udt_DateType;

export type cbc_ValidationResultCodeType = udt_CodeType;

export type cbc_ValidationTimeType = udt_TimeType;

export type cbc_ValidatorIDType = udt_IdentifierType;

export type cbc_ValidityStartDateType = udt_DateType;

export type cbc_ValueAmountType = udt_AmountType;

export type cbc_ValueMeasureType = udt_MeasureType;

export type cbc_ValueQualifierType = udt_TextType;

export type cbc_ValueQuantityType = udt_QuantityType;

export type cbc_ValueType = udt_TextType;

export type cbc_VersionIDType = udt_IdentifierType;

export type cbc_VesselIDType = udt_IdentifierType;

export type cbc_VesselNameType = udt_NameType;

export type cbc_WebsiteURIType = udt_IdentifierType;

export type cbc_WeekDayCodeType = udt_CodeType;

export type cbc_WorkPhaseCodeType = udt_CodeType;

export type cbc_WorkPhaseType = udt_TextType;

export type cbc_XPathType = udt_TextType;

export type ccts_cct_AmountType = number | {
  _?: number;
  $?: {
    currencyID?: string;
    currencyCodeListVersionID?: string;
  };
};

export type ccts_cct_BinaryObjectType = string | {
  _?: string;
  $?: {
    format?: string;
    mimeCode?: string;
    encodingCode?: string;
    characterSetCode?: string;
    uri?: string;
    filename?: string;
  };
};

export type ccts_cct_CodeType = string | {
  _?: string;
  $?: {
    listID?: string;
    listAgencyID?: string;
    listAgencyName?: string;
    listName?: string;
    listVersionID?: string;
    name?: string;
    languageID?: string;
    listURI?: string;
    listSchemeURI?: string;
  };
};

export type ccts_cct_IdentifierType = string | {
  _?: string;
  $?: {
    schemeID?: string;
    schemeName?: string;
    schemeAgencyID?: string;
    schemeAgencyName?: string;
    schemeVersionID?: string;
    schemeDataURI?: string;
    schemeURI?: string;
  };
};

export type ccts_cct_MeasureType = number | {
  _?: number;
  $?: {
    unitCode?: string;
    unitCodeListVersionID?: string;
  };
};

export type ccts_cct_NumericType = number | {
  _?: number;
  $?: {
    format?: string;
  };
};

export type ccts_cct_QuantityType = number | {
  _?: number;
  $?: {
    unitCode?: string;
    unitCodeListID?: string;
    unitCodeListAgencyID?: string;
    unitCodeListAgencyName?: string;
  };
};

export type ccts_cct_TextType = string | {
  _?: string;
  $?: {
    languageID?: string;
    languageLocaleID?: string;
  };
};

export type ext_ExtensionAgencyIDType = udt_IdentifierType;

export type ext_ExtensionAgencyNameType = udt_TextType;

export type ext_ExtensionAgencyURIType = udt_IdentifierType;

export type ext_ExtensionContentType = {
  HRFISK20Data: hrextac_HRFISK20DataType;
} | {
  UBLDocumentSignatures: sig_UBLDocumentSignaturesType;
};

export type ext_ExtensionReasonCodeType = udt_CodeType;

export type ext_ExtensionReasonType = udt_TextType;

export type ext_ExtensionURIType = udt_IdentifierType;

export type ext_ExtensionVersionIDType = udt_IdentifierType;

/** A single extension for private use. */
export interface ext_UBLExtensionType {
  ID?: cbc_IDType;
  Name?: cbc_NameType;
  ExtensionAgencyID?: ext_ExtensionAgencyIDType;
  ExtensionAgencyName?: ext_ExtensionAgencyNameType;
  ExtensionVersionID?: ext_ExtensionVersionIDType;
  ExtensionAgencyURI?: ext_ExtensionAgencyURIType;
  ExtensionURI?: ext_ExtensionURIType;
  ExtensionReasonCode?: ext_ExtensionReasonCodeType;
  ExtensionReason?: ext_ExtensionReasonType;
  ExtensionContent: ext_ExtensionContentType;
}

/** A container for all extensions present in the document. */
export interface ext_UBLExtensionsType {
  UBLExtension: ext_UBLExtensionType | ext_UBLExtensionType[];
}

export interface hrextac_HRFISK20DataType {
  HRObracunPDVPoNaplati?: hrextac_HRObracunPDVPoNaplatiType;
  HRTaxTotal?: hrextac_HRTaxTotalType;
  HRLegalMonetaryTotal?: hrextac_HRMonetaryTotalType;
}

export interface hrextac_HRMonetaryTotalType {
  TaxExclusiveAmount: cbc_TaxExclusiveAmountType;
  OutOfScopeOfVATAmount: hrextac_OutOfScopeOfVATAmountType;
}

export type hrextac_HRObracunPDVPoNaplatiType = udt_TextType;

export interface hrextac_HRTaxCategoryType {
  ID: cbc_IDType;
  Name?: cbc_NameType;
  Percent?: cbc_PercentType;
  TaxExemptionReasonCode?: cbc_TaxExemptionReasonCodeType;
  TaxExemptionReason?: cbc_TaxExemptionReasonType | cbc_TaxExemptionReasonType[];
  HRTaxScheme: hrextac_HRTaxSchemeType;
}

export interface hrextac_HRTaxSchemeType {
  ID: cbc_IDType;
}

export interface hrextac_HRTaxSubtotalType {
  TaxableAmount: cbc_TaxableAmountType;
  TaxAmount: cbc_TaxAmountType;
  HRTaxCategory: hrextac_HRTaxCategoryType;
}

export interface hrextac_HRTaxTotalType {
  TaxAmount: cbc_TaxAmountType;
  HRTaxSubtotal: hrextac_HRTaxSubtotalType | hrextac_HRTaxSubtotalType[];
}

export type hrextac_OutOfScopeOfVATAmountType = udt_AmountType;

export interface sac_SignatureInformationType {
  [key: string]: unknown;
}

export interface sig_UBLDocumentSignaturesType {
  SignatureInformation: sac_SignatureInformationType | sac_SignatureInformationType[];
}

export type udt_AmountType = ccts_cct_AmountType;

export type udt_BinaryObjectType = ccts_cct_BinaryObjectType;

export type udt_CodeType = ccts_cct_CodeType;

export type udt_DateType = string;

export type udt_IdentifierType = ccts_cct_IdentifierType;

export type udt_IndicatorType = boolean;

export type udt_MeasureType = ccts_cct_MeasureType;

export type udt_NameType = ccts_cct_TextType;

export type udt_NumericType = ccts_cct_NumericType;

export type udt_PercentType = ccts_cct_NumericType;

export type udt_QuantityType = ccts_cct_QuantityType;

export type udt_RateType = ccts_cct_NumericType;

export type udt_TextType = ccts_cct_TextType;

export type udt_TimeType = string;

