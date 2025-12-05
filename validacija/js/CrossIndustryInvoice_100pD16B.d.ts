// Generated TypeScript interfaces from XSD schema
// Schema TargetNamespace: urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100

export type CrossIndustryInvoice = rsm_CrossIndustryInvoiceType;

// --- Type Definitions ---

export type qdt_AccountingAccountTypeCodeContentType = string;

export type qdt_AccountingAccountTypeCodeType = qdt_AccountingAccountTypeCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: string;
    listVersionID?: string;
    listURI?: string;
  };
};

export type qdt_AccountingAmountTypeCodeContentType = string;

export type qdt_AccountingAmountTypeCodeType = qdt_AccountingAmountTypeCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: string;
    listVersionID?: string;
    listURI?: string;
  };
};

export type qdt_AccountingDocumentCodeContentType = string;

export type qdt_AccountingDocumentCodeListAgencyIDContentType = string;

export type qdt_AccountingDocumentCodeType = qdt_AccountingDocumentCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_AccountingDocumentCodeListAgencyIDContentType;
    listVersionID?: string;
    listURI?: string;
  };
};

export type qdt_AdjustmentReasonCodeContentType = string;

export type qdt_AdjustmentReasonCodeListAgencyIDContentType = string;

export type qdt_AdjustmentReasonCodeType = qdt_AdjustmentReasonCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_AdjustmentReasonCodeListAgencyIDContentType;
    listVersionID?: string;
  };
};

export type qdt_AllowanceChargeIdentificationCodeContentType = string;

export type qdt_AllowanceChargeIdentificationCodeType = qdt_AllowanceChargeIdentificationCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: string;
    listVersionID?: string;
    listURI?: string;
  };
};

export type qdt_AllowanceChargeReasonCodeContentType = string;

export type qdt_AllowanceChargeReasonCodeListAgencyIDContentType = string;

export type qdt_AllowanceChargeReasonCodeType = qdt_AllowanceChargeReasonCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_AllowanceChargeReasonCodeListAgencyIDContentType;
    listVersionID?: string;
    listURI?: string;
  };
};

export type qdt_AutomaticDataCaptureMethodCodeContentType = string;

export type qdt_AutomaticDataCaptureMethodCodeListAgencyIDContentType = string;

export type qdt_AutomaticDataCaptureMethodCodeType = qdt_AutomaticDataCaptureMethodCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_AutomaticDataCaptureMethodCodeListAgencyIDContentType;
    listVersionID?: string;
    listURI?: string;
  };
};

export type qdt_CargoCategoryCodeContentType = string;

export type qdt_CargoCategoryCodeListAgencyIDContentType = string;

export type qdt_CargoCategoryCodeType = qdt_CargoCategoryCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_CargoCategoryCodeListAgencyIDContentType;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_CargoCommodityCategoryCodeContentType = string;

export type qdt_CargoCommodityCategoryCodeType = qdt_CargoCommodityCategoryCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: string;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_CargoOperationalCategoryCodeContentType = string;

export type qdt_CargoOperationalCategoryCodeListAgencyIDContentType = string;

export type qdt_CargoOperationalCategoryCodeType = qdt_CargoOperationalCategoryCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_CargoOperationalCategoryCodeListAgencyIDContentType;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_ChargePayingPartyRoleCodeContentType = string;

export type qdt_ChargePayingPartyRoleCodeListAgencyIDContentType = string;

export type qdt_ChargePayingPartyRoleCodeType = qdt_ChargePayingPartyRoleCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_ChargePayingPartyRoleCodeListAgencyIDContentType;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_CommunicationChannelCodeContentType = string;

export type qdt_CommunicationChannelCodeListAgencyIDContentType = string;

export type qdt_CommunicationChannelCodeType = qdt_CommunicationChannelCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_CommunicationChannelCodeListAgencyIDContentType;
    listVersionID?: string;
    listURI?: string;
  };
};

export type qdt_ContactTypeCodeContentType = string;

export type qdt_ContactTypeCodeListAgencyIDContentType = string;

export type qdt_ContactTypeCodeType = qdt_ContactTypeCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_ContactTypeCodeListAgencyIDContentType;
    listVersionID?: string;
    listURI?: string;
  };
};

export type qdt_CountryIDContentType = string;

export type qdt_CountryIDSchemeAgencyIDContentType = string;

export type qdt_CountryIDType = qdt_CountryIDContentType & {
  $?: {
    schemeID?: string;
    schemeAgencyID?: qdt_CountryIDSchemeAgencyIDContentType;
    schemeVersionID?: string;
  };
};

export type qdt_CurrencyCodeContentType = string;

export type qdt_CurrencyCodeListAgencyIDContentType = string;

export type qdt_CurrencyCodeType = qdt_CurrencyCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_CurrencyCodeListAgencyIDContentType;
    listVersionID?: string;
    listURI?: string;
  };
};

export type qdt_DeliveryTermsCodeContentType = string;

export type qdt_DeliveryTermsCodeListAgencyIDContentType = string;

export type qdt_DeliveryTermsCodeType = qdt_DeliveryTermsCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_DeliveryTermsCodeListAgencyIDContentType;
    listVersionID?: string;
  };
};

export type qdt_DimensionTypeCodeContentType = string;

export type qdt_DimensionTypeCodeListAgencyIDContentType = string;

export type qdt_DimensionTypeCodeType = qdt_DimensionTypeCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_DimensionTypeCodeListAgencyIDContentType;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_DocumentCodeContentType = string;

export type qdt_DocumentCodeListAgencyIDContentType = string;

export type qdt_DocumentCodeType = qdt_DocumentCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_DocumentCodeListAgencyIDContentType;
    listVersionID?: string;
    name?: string;
    listURI?: string;
  };
};

export type qdt_DocumentStatusCodeContentType = string;

export type qdt_DocumentStatusCodeListAgencyIDContentType = string;

export type qdt_DocumentStatusCodeType = qdt_DocumentStatusCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_DocumentStatusCodeListAgencyIDContentType;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_FormattedDateTimeFormatContentType = string;

export interface qdt_FormattedDateTimeType {
  DateTimeString: unknown;
}

export type qdt_FreightChargeTariffClassCodeContentType = string;

export type qdt_FreightChargeTariffClassCodeListAgencyIDContentType = string;

export type qdt_FreightChargeTariffClassCodeType = qdt_FreightChargeTariffClassCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_FreightChargeTariffClassCodeListAgencyIDContentType;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_FreightChargeTypeIDContentType = string;

export type qdt_FreightChargeTypeIDSchemeAgencyIDContentType = string;

export type qdt_FreightChargeTypeIDType = qdt_FreightChargeTypeIDContentType & {
  $?: {
    schemeID?: string;
    schemeAgencyID?: qdt_FreightChargeTypeIDSchemeAgencyIDContentType;
    schemeVersionID?: string;
  };
};

export type qdt_GoodsTypeCodeContentType = string;

export type qdt_GoodsTypeCodeType = qdt_GoodsTypeCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: string;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_GoodsTypeExtensionCodeContentType = string;

export type qdt_GoodsTypeExtensionCodeType = qdt_GoodsTypeExtensionCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: string;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_LineStatusCodeContentType = string;

export type qdt_LineStatusCodeListAgencyIDContentType = string;

export type qdt_LineStatusCodeType = qdt_LineStatusCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_LineStatusCodeListAgencyIDContentType;
    listVersionID?: string;
    listURI?: string;
  };
};

export type qdt_LinearUnitMeasureType = number | {
  _?: number;
  $?: {
    unitCode?: qdt_LinearUnitMeasureUnitCodeContentType;
    unitCodeListVersionID?: string;
  };
};

export type qdt_LinearUnitMeasureUnitCodeContentType = string;

export type qdt_LogisticsChargeCalculationBasisCodeContentType = string;

export type qdt_LogisticsChargeCalculationBasisCodeType = qdt_LogisticsChargeCalculationBasisCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: string;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_MessageFunctionCodeContentType = string;

export type qdt_MessageFunctionCodeListAgencyIDContentType = string;

export type qdt_MessageFunctionCodeType = qdt_MessageFunctionCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_MessageFunctionCodeListAgencyIDContentType;
    listVersionID?: string;
    listURI?: string;
  };
};

export type qdt_PackageTypeCodeContentType = string;

export type qdt_PackageTypeCodeListAgencyIDContentType = string;

export type qdt_PackageTypeCodeType = qdt_PackageTypeCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_PackageTypeCodeListAgencyIDContentType;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_PackagingMarkingCodeContentType = string;

export type qdt_PackagingMarkingCodeListAgencyIDContentType = string;

export type qdt_PackagingMarkingCodeType = qdt_PackagingMarkingCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_PackagingMarkingCodeListAgencyIDContentType;
    listVersionID?: string;
    listURI?: string;
  };
};

export type qdt_PartyRoleCodeContentType = string;

export type qdt_PartyRoleCodeListAgencyIDContentType = string;

export type qdt_PartyRoleCodeType = qdt_PartyRoleCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_PartyRoleCodeListAgencyIDContentType;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_PaymentGuaranteeMeansCodeContentType = string;

export type qdt_PaymentGuaranteeMeansCodeListAgencyIDContentType = string;

export type qdt_PaymentGuaranteeMeansCodeType = qdt_PaymentGuaranteeMeansCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_PaymentGuaranteeMeansCodeListAgencyIDContentType;
    listVersionID?: string;
  };
};

export type qdt_PaymentMeansChannelCodeContentType = string;

export type qdt_PaymentMeansChannelCodeListAgencyIDContentType = string;

export type qdt_PaymentMeansChannelCodeType = qdt_PaymentMeansChannelCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_PaymentMeansChannelCodeListAgencyIDContentType;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_PaymentMeansCodeContentType = string;

export type qdt_PaymentMeansCodeListAgencyIDContentType = string;

export type qdt_PaymentMeansCodeType = qdt_PaymentMeansCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_PaymentMeansCodeListAgencyIDContentType;
    listVersionID?: string;
  };
};

export type qdt_PaymentTermsEventTimeReferenceCodeContentType = string;

export type qdt_PaymentTermsEventTimeReferenceCodeListAgencyIDContentType = string;

export type qdt_PaymentTermsEventTimeReferenceCodeType = qdt_PaymentTermsEventTimeReferenceCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_PaymentTermsEventTimeReferenceCodeListAgencyIDContentType;
    listVersionID?: string;
  };
};

export type qdt_PaymentTermsIDContentType = string;

export type qdt_PaymentTermsIDSchemeAgencyIDContentType = string;

export type qdt_PaymentTermsIDType = qdt_PaymentTermsIDContentType & {
  $?: {
    schemeID?: string;
    schemeAgencyID?: qdt_PaymentTermsIDSchemeAgencyIDContentType;
    schemeVersionID?: string;
  };
};

export type qdt_PaymentTermsTypeCodeContentType = string;

export type qdt_PaymentTermsTypeCodeListAgencyIDContentType = string;

export type qdt_PaymentTermsTypeCodeType = qdt_PaymentTermsTypeCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_PaymentTermsTypeCodeListAgencyIDContentType;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_PriceTypeCodeContentType = string;

export type qdt_PriceTypeCodeListAgencyIDContentType = string;

export type qdt_PriceTypeCodeType = qdt_PriceTypeCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_PriceTypeCodeListAgencyIDContentType;
    listVersionID?: string;
  };
};

export type qdt_ReferenceCodeContentType = string;

export type qdt_ReferenceCodeListAgencyIDContentType = string;

export type qdt_ReferenceCodeType = qdt_ReferenceCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_ReferenceCodeListAgencyIDContentType;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_TaxCategoryCodeContentType = string;

export type qdt_TaxCategoryCodeListAgencyIDContentType = string;

export type qdt_TaxCategoryCodeType = qdt_TaxCategoryCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_TaxCategoryCodeListAgencyIDContentType;
    listVersionID?: string;
    listURI?: string;
  };
};

export type qdt_TaxTypeCodeContentType = string;

export type qdt_TaxTypeCodeListAgencyIDContentType = string;

export type qdt_TaxTypeCodeType = qdt_TaxTypeCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_TaxTypeCodeListAgencyIDContentType;
    listVersionID?: string;
    listURI?: string;
  };
};

export type qdt_TimeReferenceCodeContentType = string;

export type qdt_TimeReferenceCodeListAgencyIDContentType = string;

export type qdt_TimeReferenceCodeType = qdt_TimeReferenceCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_TimeReferenceCodeListAgencyIDContentType;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_TransportEquipmentCategoryCodeContentType = string;

export type qdt_TransportEquipmentCategoryCodeListAgencyIDContentType = string;

export type qdt_TransportEquipmentCategoryCodeType = qdt_TransportEquipmentCategoryCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_TransportEquipmentCategoryCodeListAgencyIDContentType;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_TransportEquipmentFullnessCodeContentType = string;

export type qdt_TransportEquipmentFullnessCodeListAgencyIDContentType = string;

export type qdt_TransportEquipmentFullnessCodeType = qdt_TransportEquipmentFullnessCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_TransportEquipmentFullnessCodeListAgencyIDContentType;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_TransportEquipmentSizeTypeCodeContentType = string;

export type qdt_TransportEquipmentSizeTypeCodeListAgencyIDContentType = string;

export type qdt_TransportEquipmentSizeTypeCodeType = qdt_TransportEquipmentSizeTypeCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_TransportEquipmentSizeTypeCodeListAgencyIDContentType;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_TransportMeansTypeCodeContentType = string;

export type qdt_TransportMeansTypeCodeListAgencyIDContentType = string;

export type qdt_TransportMeansTypeCodeType = qdt_TransportMeansTypeCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_TransportMeansTypeCodeListAgencyIDContentType;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_TransportModeCodeContentType = string;

export type qdt_TransportModeCodeListAgencyIDContentType = string;

export type qdt_TransportModeCodeType = qdt_TransportModeCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_TransportModeCodeListAgencyIDContentType;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_TransportMovementStageCodeContentType = string;

export type qdt_TransportMovementStageCodeListAgencyIDContentType = string;

export type qdt_TransportMovementStageCodeType = qdt_TransportMovementStageCodeContentType & {
  $?: {
    listID?: string;
    listAgencyID?: qdt_TransportMovementStageCodeListAgencyIDContentType;
    listVersionID?: string;
    name?: string;
  };
};

export type qdt_VolumeUnitMeasureType = number | {
  _?: number;
  $?: {
    unitCode?: qdt_VolumeUnitMeasureUnitCodeContentType;
    unitCodeListVersionID?: string;
  };
};

export type qdt_VolumeUnitMeasureUnitCodeContentType = string;

export type qdt_WeightUnitMeasureType = number | {
  _?: number;
  $?: {
    unitCode?: qdt_WeightUnitMeasureUnitCodeContentType;
    unitCodeListVersionID?: string;
  };
};

export type qdt_WeightUnitMeasureUnitCodeContentType = string;

export interface ram_AdvancePaymentType {
  PaidAmount: udt_AmountType;
  FormattedReceivedDateTime?: qdt_FormattedDateTimeType;
  IncludedTradeTax?: ram_TradeTaxType | ram_TradeTaxType[];
}

export interface ram_AppliedAllowanceChargeType {
  ActualAmount?: udt_AmountType;
  Description?: udt_TextType;
  ReasonCode?: udt_CodeType;
  CalculationPercent?: udt_PercentType;
  BasisAmount?: udt_AmountType;
  ChargeIndicator: udt_IndicatorType;
  CategoryAppliedTax?: ram_AppliedTaxType;
}

export interface ram_AppliedTaxType {
  CalculatedAmount?: udt_AmountType;
  TypeCode?: udt_CodeType;
  CalculatedRate?: udt_RateType;
  BasisAmount?: udt_AmountType;
  TaxPointDate?: udt_DateType;
}

export interface ram_AvailablePeriodType {
  StartDateTime?: udt_DateTimeType;
  EndDateTime?: udt_DateTimeType;
  Description?: udt_TextType;
}

export interface ram_BasicWorkItemType {
  ID: udt_IDType;
  ReferenceID?: udt_IDType;
  PrimaryClassificationCode?: udt_CodeType | udt_CodeType[];
  AlternativeClassificationCode?: udt_CodeType | udt_CodeType[];
  TypeCode?: udt_CodeType | udt_CodeType[];
  Comment?: udt_TextType | udt_TextType[];
  TotalQuantity?: udt_QuantityType;
  TotalQuantityClassificationCode?: udt_CodeType;
  IndexValue?: udt_ValueType;
  StatusCode?: udt_CodeType | udt_CodeType[];
  ReferenceFileBinaryObject?: udt_BinaryObjectType | udt_BinaryObjectType[];
  Index?: udt_TextType;
  RequestedActionCode?: udt_CodeType | udt_CodeType[];
  PriceListItemID?: udt_IDType;
  ContractualLanguageCode?: udt_CodeType;
  ActualWorkItemComplexDescription?: ram_WorkItemComplexDescriptionType | ram_WorkItemComplexDescriptionType[];
  TotalQuantityWorkItemQuantityAnalysis?: ram_WorkItemQuantityAnalysisType | ram_WorkItemQuantityAnalysisType[];
  UnitCalculatedPrice?: ram_CalculatedPriceType | ram_CalculatedPriceType[];
  TotalCalculatedPrice?: ram_CalculatedPriceType | ram_CalculatedPriceType[];
  SubordinateBasicWorkItem?: ram_BasicWorkItemType | ram_BasicWorkItemType[];
  ChangedRecordedStatus?: ram_RecordedStatusType | ram_RecordedStatusType[];
  ItemBasicWorkItem?: ram_BasicWorkItemType | ram_BasicWorkItemType[];
  ReferencedSpecifiedBinaryFile?: ram_SpecifiedBinaryFileType | ram_SpecifiedBinaryFileType[];
}

export interface ram_BranchFinancialInstitutionType {
  ID?: udt_IDType;
  Name?: udt_TextType;
  LocationFinancialInstitutionAddress?: ram_FinancialInstitutionAddressType;
}

export interface ram_CalculatedPriceType {
  TypeCode?: udt_CodeType | udt_CodeType[];
  ChargeAmount?: udt_AmountType | udt_AmountType[];
  RelatedAppliedAllowanceCharge?: ram_AppliedAllowanceChargeType | ram_AppliedAllowanceChargeType[];
}

export interface ram_ContactPersonType {
  GivenName?: udt_TextType;
  MiddleName?: udt_TextType;
  FamilyName?: udt_TextType;
}

export interface ram_CreditorFinancialAccountType {
  IBANID?: udt_IDType;
  AccountName?: udt_TextType;
  ProprietaryID?: udt_IDType;
}

export interface ram_CreditorFinancialInstitutionType {
  BICID?: udt_IDType;
  CHIPSUniversalID?: udt_IDType;
  NewZealandNCCID?: udt_IDType;
  IrishNSCID?: udt_IDType;
  UKSortCodeID?: udt_IDType;
  CHIPSParticipantID?: udt_IDType;
  SwissBCID?: udt_IDType;
  FedwireRoutingNumberID?: udt_IDType;
  PortugueseNCCID?: udt_IDType;
  RussianCentralBankID?: udt_IDType;
  ItalianDomesticID?: udt_IDType;
  AustrianBankleitzahlID?: udt_IDType;
  CanadianPaymentsAssociationID?: udt_IDType;
  SICID?: udt_IDType;
  GermanBankleitzahlID?: udt_IDType;
  SpanishDomesticInterbankingID?: udt_IDType;
  SouthAfricanNCCID?: udt_IDType;
  HongKongBankID?: udt_IDType;
  AustralianBSBID?: udt_IDType;
  IndianFinancialSystemID?: udt_IDType;
  HellenicBankID?: udt_IDType;
  PolishNationalClearingID?: udt_IDType;
  Name?: udt_TextType;
  ClearingSystemName?: udt_TextType;
  JapanFinancialInstitutionCommonID?: udt_IDType;
  LocationFinancialInstitutionAddress?: ram_FinancialInstitutionAddressType;
  SubDivisionBranchFinancialInstitution?: ram_BranchFinancialInstitutionType;
}

export interface ram_DebtorFinancialAccountType {
  IBANID?: udt_IDType;
  AccountName?: udt_TextType;
  ProprietaryID?: udt_IDType;
}

export interface ram_DebtorFinancialInstitutionType {
  BICID?: udt_IDType;
  ClearingSystemName?: udt_TextType;
  CHIPSUniversalID?: udt_IDType;
  NewZealandNCCID?: udt_IDType;
  IrishNSCID?: udt_IDType;
  UKSortCodeID?: udt_IDType;
  CHIPSParticipantID?: udt_IDType;
  SwissBCID?: udt_IDType;
  FedwireRoutingNumberID?: udt_IDType;
  PortugueseNCCID?: udt_IDType;
  RussianCentralBankID?: udt_IDType;
  ItalianDomesticID?: udt_IDType;
  AustrianBankleitzahlID?: udt_IDType;
  CanadianPaymentsAssociationID?: udt_IDType;
  SICID?: udt_IDType;
  GermanBankleitzahlID?: udt_IDType;
  SpanishDomesticInterbankingID?: udt_IDType;
  SouthAfricanNCCID?: udt_IDType;
  HongKongBankID?: udt_IDType;
  AustralianBSBID?: udt_IDType;
  IndianFinancialSystemID?: udt_IDType;
  HellenicBankID?: udt_IDType;
  PolishNationalClearingID?: udt_IDType;
  Name?: udt_TextType;
  JapanFinancialInstitutionCommonID?: udt_IDType;
  LocationFinancialInstitutionAddress?: ram_FinancialInstitutionAddressType;
  SubDivisionBranchFinancialInstitution?: ram_BranchFinancialInstitutionType;
}

export interface ram_DeliveryAdjustmentType {
  ReasonCode?: qdt_AdjustmentReasonCodeType;
  Reason?: udt_TextType | udt_TextType[];
  ActualAmount?: udt_AmountType | udt_AmountType[];
  ActualQuantity?: udt_QuantityType;
  ActualDateTime?: udt_DateTimeType;
}

export interface ram_DisposalInstructionsType {
  MaterialID?: udt_IDType;
  RecyclingDescriptionCode?: udt_CodeType | udt_CodeType[];
  Description?: udt_TextType | udt_TextType[];
  RecyclingProcedure?: udt_TextType | udt_TextType[];
}

export interface ram_DocumentContextParameterType {
  ID?: udt_IDType;
  Value?: udt_TextType;
  SpecifiedDocumentVersion?: ram_DocumentVersionType;
}

export interface ram_DocumentLineDocumentType {
  LineID?: udt_IDType;
  ParentLineID?: udt_IDType;
  LineStatusCode?: qdt_LineStatusCodeType;
  LineStatusReasonCode?: udt_CodeType;
  IncludedNote?: ram_NoteType | ram_NoteType[];
}

export interface ram_DocumentVersionType {
  ID?: udt_IDType;
  Name?: udt_TextType;
  IssueDateTime?: udt_DateTimeType;
}

export interface ram_ExchangedDocumentContextType {
  SpecifiedTransactionID?: udt_IDType;
  TestIndicator?: udt_IndicatorType;
  BusinessProcessSpecifiedDocumentContextParameter?: ram_DocumentContextParameterType | ram_DocumentContextParameterType[];
  BIMSpecifiedDocumentContextParameter?: ram_DocumentContextParameterType | ram_DocumentContextParameterType[];
  ScenarioSpecifiedDocumentContextParameter?: ram_DocumentContextParameterType | ram_DocumentContextParameterType[];
  ApplicationSpecifiedDocumentContextParameter?: ram_DocumentContextParameterType | ram_DocumentContextParameterType[];
  GuidelineSpecifiedDocumentContextParameter?: ram_DocumentContextParameterType | ram_DocumentContextParameterType[];
  SubsetSpecifiedDocumentContextParameter?: ram_DocumentContextParameterType | ram_DocumentContextParameterType[];
  MessageStandardSpecifiedDocumentContextParameter?: ram_DocumentContextParameterType;
}

export interface ram_ExchangedDocumentType {
  ID: udt_IDType;
  Name?: udt_TextType | udt_TextType[];
  TypeCode?: qdt_DocumentCodeType;
  IssueDateTime: udt_DateTimeType;
  CopyIndicator?: udt_IndicatorType;
  Purpose?: udt_TextType;
  ControlRequirementIndicator?: udt_IndicatorType;
  LanguageID?: udt_IDType | udt_IDType[];
  PurposeCode?: qdt_MessageFunctionCodeType;
  RevisionDateTime?: udt_DateTimeType;
  VersionID?: udt_IDType;
  GlobalID?: udt_IDType;
  RevisionID?: udt_IDType;
  PreviousRevisionID?: udt_IDType;
  CategoryCode?: udt_CodeType;
  IncludedNote?: ram_NoteType | ram_NoteType[];
  EffectiveSpecifiedPeriod?: ram_SpecifiedPeriodType;
  IssuerTradeParty?: ram_TradePartyType;
}

export interface ram_FinancialAdjustmentType {
  ReasonCode?: udt_CodeType;
  Reason?: udt_TextType | udt_TextType[];
  ActualAmount?: udt_AmountType | udt_AmountType[];
  ActualQuantity?: udt_QuantityType;
  ActualDateTime?: udt_DateTimeType;
  ClaimRelatedTradeParty?: ram_TradePartyType;
  InvoiceReferenceReferencedDocument?: ram_ReferencedDocumentType;
}

export interface ram_FinancialInstitutionAddressType {
  PostcodeCode?: udt_CodeType;
  BuildingNumber?: udt_TextType;
  LineOne?: udt_TextType;
  LineTwo?: udt_TextType;
  LineThree?: udt_TextType;
  LineFour?: udt_TextType;
  LineFive?: udt_TextType;
  StreetName?: udt_TextType;
  CityName?: udt_TextType;
  CountrySubDivisionID?: udt_IDType;
  CountryID?: udt_IDType;
  TypeCode?: udt_CodeType;
  DepartmentName?: udt_TextType;
  PostOfficeBox?: udt_TextType;
  CityID?: udt_IDType;
  CountrySubDivisionName?: udt_TextType;
  CountryName?: udt_TextType;
}

export interface ram_GeographicalCoordinateType {
  AltitudeMeasure?: udt_MeasureType;
  LatitudeMeasure?: udt_MeasureType;
  LongitudeMeasure?: udt_MeasureType;
  SystemID?: udt_IDType;
}

export interface ram_GroupedWorkItemType {
  ID: udt_IDType;
  PrimaryClassificationCode?: udt_CodeType | udt_CodeType[];
  AlternativeClassificationCode?: udt_CodeType | udt_CodeType[];
  TypeCode?: udt_CodeType | udt_CodeType[];
  Comment?: udt_TextType | udt_TextType[];
  TotalQuantity?: udt_QuantityType;
  Index?: udt_TextType;
  RequestedActionCode?: udt_CodeType | udt_CodeType[];
  PriceListItemID?: udt_IDType;
  ContractualLanguageCode?: udt_CodeType;
  TotalCalculatedPrice?: ram_CalculatedPriceType | ram_CalculatedPriceType[];
  ItemGroupedWorkItem?: ram_GroupedWorkItemType | ram_GroupedWorkItemType[];
  ItemBasicWorkItem?: ram_BasicWorkItemType | ram_BasicWorkItemType[];
  ChangedRecordedStatus?: ram_RecordedStatusType | ram_RecordedStatusType[];
  ActualWorkItemComplexDescription?: ram_WorkItemComplexDescriptionType | ram_WorkItemComplexDescriptionType[];
  ReferencedSpecifiedBinaryFile?: ram_SpecifiedBinaryFileType | ram_SpecifiedBinaryFileType[];
}

export interface ram_HeaderTradeAgreementType {
  Reference?: udt_TextType | udt_TextType[];
  BuyerReference?: udt_TextType;
  SellerTradeParty?: ram_TradePartyType;
  BuyerTradeParty?: ram_TradePartyType;
  SalesAgentTradeParty?: ram_TradePartyType;
  BuyerRequisitionerTradeParty?: ram_TradePartyType | ram_TradePartyType[];
  BuyerAssignedAccountantTradeParty?: ram_TradePartyType;
  SellerAssignedAccountantTradeParty?: ram_TradePartyType;
  BuyerTaxRepresentativeTradeParty?: ram_TradePartyType;
  SellerTaxRepresentativeTradeParty?: ram_TradePartyType;
  ProductEndUserTradeParty?: ram_TradePartyType;
  ApplicableTradeDeliveryTerms?: ram_TradeDeliveryTermsType;
  SellerOrderReferencedDocument?: ram_ReferencedDocumentType;
  BuyerOrderReferencedDocument?: ram_ReferencedDocumentType;
  QuotationReferencedDocument?: ram_ReferencedDocumentType;
  OrderResponseReferencedDocument?: ram_ReferencedDocumentType;
  ContractReferencedDocument?: ram_ReferencedDocumentType;
  DemandForecastReferencedDocument?: ram_ReferencedDocumentType;
  SupplyInstructionReferencedDocument?: ram_ReferencedDocumentType;
  PromotionalDealReferencedDocument?: ram_ReferencedDocumentType;
  PriceListReferencedDocument?: ram_ReferencedDocumentType;
  AdditionalReferencedDocument?: ram_ReferencedDocumentType | ram_ReferencedDocumentType[];
  RequisitionerReferencedDocument?: ram_ReferencedDocumentType | ram_ReferencedDocumentType[];
  BuyerAgentTradeParty?: ram_TradePartyType;
  PurchaseConditionsReferencedDocument?: ram_ReferencedDocumentType | ram_ReferencedDocumentType[];
  SpecifiedProcuringProject?: ram_ProcuringProjectType;
  UltimateCustomerOrderReferencedDocument?: ram_ReferencedDocumentType | ram_ReferencedDocumentType[];
}

export interface ram_HeaderTradeDeliveryType {
  RelatedSupplyChainConsignment?: ram_SupplyChainConsignmentType;
  ShipToTradeParty?: ram_TradePartyType;
  UltimateShipToTradeParty?: ram_TradePartyType;
  ShipFromTradeParty?: ram_TradePartyType;
  ActualDespatchSupplyChainEvent?: ram_SupplyChainEventType;
  ActualPickUpSupplyChainEvent?: ram_SupplyChainEventType;
  ActualDeliverySupplyChainEvent?: ram_SupplyChainEventType;
  ActualReceiptSupplyChainEvent?: ram_SupplyChainEventType;
  AdditionalReferencedDocument?: ram_ReferencedDocumentType | ram_ReferencedDocumentType[];
  DespatchAdviceReferencedDocument?: ram_ReferencedDocumentType;
  ReceivingAdviceReferencedDocument?: ram_ReferencedDocumentType;
  DeliveryNoteReferencedDocument?: ram_ReferencedDocumentType;
  ConsumptionReportReferencedDocument?: ram_ReferencedDocumentType;
  PreviousDeliverySupplyChainEvent?: ram_SupplyChainEventType | ram_SupplyChainEventType[];
  PackingListReferencedDocument?: ram_ReferencedDocumentType;
}

export interface ram_HeaderTradeSettlementType {
  DuePayableAmount?: udt_AmountType | udt_AmountType[];
  CreditorReferenceTypeCode?: udt_CodeType | udt_CodeType[];
  CreditorReferenceType?: udt_TextType | udt_TextType[];
  CreditorReferenceIssuerID?: udt_IDType | udt_IDType[];
  CreditorReferenceID?: udt_IDType;
  PaymentReference?: udt_TextType | udt_TextType[];
  TaxCurrencyCode?: qdt_CurrencyCodeType;
  InvoiceCurrencyCode?: qdt_CurrencyCodeType;
  PaymentCurrencyCode?: qdt_CurrencyCodeType;
  InvoiceIssuerReference?: udt_TextType;
  InvoiceDateTime?: udt_DateTimeType;
  NextInvoiceDateTime?: udt_DateTimeType | udt_DateTimeType[];
  CreditReasonCode?: udt_CodeType;
  CreditReason?: udt_TextType | udt_TextType[];
  InvoicerTradeParty?: ram_TradePartyType;
  InvoiceeTradeParty?: ram_TradePartyType;
  PayeeTradeParty?: ram_TradePartyType;
  PayerTradeParty?: ram_TradePartyType;
  TaxApplicableTradeCurrencyExchange?: ram_TradeCurrencyExchangeType;
  InvoiceApplicableTradeCurrencyExchange?: ram_TradeCurrencyExchangeType;
  PaymentApplicableTradeCurrencyExchange?: ram_TradeCurrencyExchangeType;
  SpecifiedTradeSettlementPaymentMeans?: ram_TradeSettlementPaymentMeansType | ram_TradeSettlementPaymentMeansType[];
  ApplicableTradeTax?: ram_TradeTaxType | ram_TradeTaxType[];
  BillingSpecifiedPeriod?: ram_SpecifiedPeriodType;
  SpecifiedTradeAllowanceCharge?: ram_TradeAllowanceChargeType | ram_TradeAllowanceChargeType[];
  SubtotalCalculatedTradeTax?: ram_TradeTaxType | ram_TradeTaxType[];
  SpecifiedLogisticsServiceCharge?: ram_LogisticsServiceChargeType | ram_LogisticsServiceChargeType[];
  SpecifiedTradePaymentTerms?: ram_TradePaymentTermsType | ram_TradePaymentTermsType[];
  SpecifiedTradeSettlementHeaderMonetarySummation?: ram_TradeSettlementHeaderMonetarySummationType;
  SpecifiedFinancialAdjustment?: ram_FinancialAdjustmentType | ram_FinancialAdjustmentType[];
  InvoiceReferencedDocument?: ram_ReferencedDocumentType;
  ProFormaInvoiceReferencedDocument?: ram_ReferencedDocumentType;
  LetterOfCreditReferencedDocument?: ram_ReferencedDocumentType;
  FactoringAgreementReferencedDocument?: ram_ReferencedDocumentType | ram_ReferencedDocumentType[];
  FactoringListReferencedDocument?: ram_ReferencedDocumentType | ram_ReferencedDocumentType[];
  PayableSpecifiedTradeAccountingAccount?: ram_TradeAccountingAccountType | ram_TradeAccountingAccountType[];
  ReceivableSpecifiedTradeAccountingAccount?: ram_TradeAccountingAccountType | ram_TradeAccountingAccountType[];
  PurchaseSpecifiedTradeAccountingAccount?: ram_TradeAccountingAccountType | ram_TradeAccountingAccountType[];
  SalesSpecifiedTradeAccountingAccount?: ram_TradeAccountingAccountType | ram_TradeAccountingAccountType[];
  SpecifiedTradeSettlementFinancialCard?: ram_TradeSettlementFinancialCardType | ram_TradeSettlementFinancialCardType[];
  SpecifiedAdvancePayment?: ram_AdvancePaymentType | ram_AdvancePaymentType[];
  UltimatePayeeTradeParty?: ram_TradePartyType;
}

export interface ram_LegalOrganizationType {
  LegalClassificationCode?: udt_CodeType;
  Name?: udt_TextType;
  ID?: udt_IDType;
  TradingBusinessName?: udt_TextType;
  PostalTradeAddress?: ram_TradeAddressType;
  AuthorizedLegalRegistration?: ram_LegalRegistrationType | ram_LegalRegistrationType[];
}

export interface ram_LegalRegistrationType {
  TypeCode?: udt_CodeType;
  ID?: udt_IDType;
}

export interface ram_LineTradeAgreementType {
  BuyerReference?: udt_TextType;
  BuyerRequisitionerTradeParty?: ram_TradePartyType | ram_TradePartyType[];
  ApplicableTradeDeliveryTerms?: ram_TradeDeliveryTermsType;
  SellerOrderReferencedDocument?: ram_ReferencedDocumentType;
  BuyerOrderReferencedDocument?: ram_ReferencedDocumentType;
  QuotationReferencedDocument?: ram_ReferencedDocumentType;
  ContractReferencedDocument?: ram_ReferencedDocumentType;
  DemandForecastReferencedDocument?: ram_ReferencedDocumentType;
  PromotionalDealReferencedDocument?: ram_ReferencedDocumentType;
  AdditionalReferencedDocument?: ram_ReferencedDocumentType | ram_ReferencedDocumentType[];
  GrossPriceProductTradePrice?: ram_TradePriceType;
  NetPriceProductTradePrice?: ram_TradePriceType;
  RequisitionerReferencedDocument?: ram_ReferencedDocumentType | ram_ReferencedDocumentType[];
  ItemSellerTradeParty?: ram_TradePartyType;
  ItemBuyerTradeParty?: ram_TradePartyType;
  IncludedSpecifiedMarketplace?: ram_SpecifiedMarketplaceType;
  UltimateCustomerOrderReferencedDocument?: ram_ReferencedDocumentType | ram_ReferencedDocumentType[];
}

export interface ram_LineTradeDeliveryType {
  RequestedQuantity?: udt_QuantityType;
  ReceivedQuantity?: udt_QuantityType;
  BilledQuantity?: udt_QuantityType;
  ChargeFreeQuantity?: udt_QuantityType;
  PackageQuantity?: udt_QuantityType;
  ProductUnitQuantity?: udt_QuantityType;
  PerPackageUnitQuantity?: udt_QuantityType;
  NetWeightMeasure?: qdt_WeightUnitMeasureType;
  GrossWeightMeasure?: qdt_WeightUnitMeasureType;
  TheoreticalWeightMeasure?: qdt_WeightUnitMeasureType;
  DespatchedQuantity?: udt_QuantityType;
  SpecifiedDeliveryAdjustment?: ram_DeliveryAdjustmentType | ram_DeliveryAdjustmentType[];
  IncludedSupplyChainPackaging?: ram_SupplyChainPackagingType | ram_SupplyChainPackagingType[];
  RelatedSupplyChainConsignment?: ram_SupplyChainConsignmentType;
  ShipToTradeParty?: ram_TradePartyType;
  UltimateShipToTradeParty?: ram_TradePartyType;
  ShipFromTradeParty?: ram_TradePartyType;
  ActualDespatchSupplyChainEvent?: ram_SupplyChainEventType;
  ActualPickUpSupplyChainEvent?: ram_SupplyChainEventType;
  RequestedDeliverySupplyChainEvent?: ram_SupplyChainEventType;
  ActualDeliverySupplyChainEvent?: ram_SupplyChainEventType;
  ActualReceiptSupplyChainEvent?: ram_SupplyChainEventType;
  AdditionalReferencedDocument?: ram_ReferencedDocumentType | ram_ReferencedDocumentType[];
  DespatchAdviceReferencedDocument?: ram_ReferencedDocumentType;
  ReceivingAdviceReferencedDocument?: ram_ReferencedDocumentType;
  DeliveryNoteReferencedDocument?: ram_ReferencedDocumentType;
  ConsumptionReportReferencedDocument?: ram_ReferencedDocumentType;
  PackingListReferencedDocument?: ram_ReferencedDocumentType;
}

export interface ram_LineTradeSettlementType {
  PaymentReference?: udt_TextType | udt_TextType[];
  InvoiceIssuerReference?: udt_TextType;
  TotalAdjustmentAmount?: udt_AmountType;
  DiscountIndicator?: udt_IndicatorType;
  ApplicableTradeTax?: ram_TradeTaxType | ram_TradeTaxType[];
  BillingSpecifiedPeriod?: ram_SpecifiedPeriodType;
  SpecifiedTradeAllowanceCharge?: ram_TradeAllowanceChargeType | ram_TradeAllowanceChargeType[];
  SubtotalCalculatedTradeTax?: ram_TradeTaxType | ram_TradeTaxType[];
  SpecifiedLogisticsServiceCharge?: ram_LogisticsServiceChargeType | ram_LogisticsServiceChargeType[];
  SpecifiedTradePaymentTerms?: ram_TradePaymentTermsType | ram_TradePaymentTermsType[];
  SpecifiedTradeSettlementLineMonetarySummation?: ram_TradeSettlementLineMonetarySummationType;
  SpecifiedFinancialAdjustment?: ram_FinancialAdjustmentType | ram_FinancialAdjustmentType[];
  InvoiceReferencedDocument?: ram_ReferencedDocumentType;
  AdditionalReferencedDocument?: ram_ReferencedDocumentType | ram_ReferencedDocumentType[];
  PayableSpecifiedTradeAccountingAccount?: ram_TradeAccountingAccountType | ram_TradeAccountingAccountType[];
  ReceivableSpecifiedTradeAccountingAccount?: ram_TradeAccountingAccountType | ram_TradeAccountingAccountType[];
  PurchaseSpecifiedTradeAccountingAccount?: ram_TradeAccountingAccountType | ram_TradeAccountingAccountType[];
  SalesSpecifiedTradeAccountingAccount?: ram_TradeAccountingAccountType | ram_TradeAccountingAccountType[];
  SpecifiedTradeSettlementFinancialCard?: ram_TradeSettlementFinancialCardType;
}

export interface ram_LogisticsLocationType {
  ID?: udt_IDType;
  Name?: udt_TextType | udt_TextType[];
  TypeCode?: udt_CodeType;
  Description?: udt_TextType | udt_TextType[];
  PhysicalGeographicalCoordinate?: ram_GeographicalCoordinateType;
  PostalTradeAddress?: ram_TradeAddressType;
}

export interface ram_LogisticsServiceChargeType {
  ID?: qdt_FreightChargeTypeIDType;
  Description?: udt_TextType | udt_TextType[];
  PaymentArrangementCode?: udt_CodeType;
  TariffClassCode?: qdt_FreightChargeTariffClassCodeType;
  ChargeCategoryCode?: udt_CodeType;
  ServiceCategoryCode?: udt_CodeType;
  DisbursementAmount?: udt_AmountType | udt_AmountType[];
  AppliedAmount?: udt_AmountType | udt_AmountType[];
  AllowanceCharge?: udt_TextType;
  PayingPartyRoleCode?: qdt_ChargePayingPartyRoleCodeType;
  CalculationBasisCode?: qdt_LogisticsChargeCalculationBasisCodeType;
  CalculationBasis?: udt_TextType;
  TransportPaymentMethodCode?: udt_CodeType;
  PaymentPlaceLogisticsLocation?: ram_LogisticsLocationType;
  AppliedFromLogisticsLocation?: ram_LogisticsLocationType;
  AppliedToLogisticsLocation?: ram_LogisticsLocationType;
  AppliedTradeTax?: ram_TradeTaxType | ram_TradeTaxType[];
}

export interface ram_LogisticsTransportEquipmentType {
  ID?: udt_IDType;
  LoadingLengthMeasure?: qdt_LinearUnitMeasureType;
  CategoryCode?: qdt_TransportEquipmentCategoryCodeType;
  CharacteristicCode?: qdt_TransportEquipmentSizeTypeCodeType;
  UsedCapacityCode?: qdt_TransportEquipmentFullnessCodeType;
  LinearSpatialDimension?: ram_SpatialDimensionType;
}

export interface ram_LogisticsTransportMeansType {
  TypeCode?: qdt_TransportMeansTypeCodeType;
  Type?: udt_TextType;
  ID?: udt_IDType;
  Name?: udt_TextType;
  OwnerTradeParty?: ram_TradePartyType;
}

export interface ram_LogisticsTransportMovementType {
  StageCode?: qdt_TransportMovementStageCodeType;
  ModeCode?: qdt_TransportModeCodeType;
  Mode?: udt_TextType;
  UsedLogisticsTransportMeans?: ram_LogisticsTransportMeansType;
}

export interface ram_MaterialGoodsCharacteristicType {
  Description?: udt_TextType | udt_TextType[];
  TypeCode?: udt_CodeType;
  ProportionalConstituentPercent?: udt_PercentType;
  AbsolutePresenceWeightMeasure?: udt_MeasureType;
  AbsolutePresenceVolumeMeasure?: udt_MeasureType;
}

export interface ram_NoteType {
  Subject?: udt_TextType;
  ContentCode?: udt_CodeType;
  Content?: udt_TextType | udt_TextType[];
  SubjectCode?: udt_CodeType;
  ID?: udt_IDType;
}

export interface ram_PackagingMarkingType {
  TypeCode?: qdt_PackagingMarkingCodeType | qdt_PackagingMarkingCodeType[];
  Content?: udt_TextType | udt_TextType[];
  ContentDateTime?: udt_DateTimeType;
  ContentAmount?: udt_AmountType | udt_AmountType[];
  BarcodeTypeCode?: udt_CodeType | udt_CodeType[];
  ContentCode?: udt_CodeType | udt_CodeType[];
  AutomaticDataCaptureMethodTypeCode?: qdt_AutomaticDataCaptureMethodCodeType | qdt_AutomaticDataCaptureMethodCodeType[];
}

export interface ram_ProcuringProjectType {
  ID: udt_IDType;
  Description?: udt_TextType;
  Name: udt_TextType;
}

export interface ram_ProductCharacteristicConditionType {
  TypeCode?: udt_CodeType;
  Name?: udt_TextType | udt_TextType[];
  ValueMeasure?: udt_MeasureType;
}

export interface ram_ProductCharacteristicType {
  ID?: udt_IDType | udt_IDType[];
  TypeCode?: udt_CodeType;
  Description?: udt_TextType | udt_TextType[];
  ValueMeasure?: udt_MeasureType;
  MeasurementMethodCode?: udt_CodeType;
  Value?: udt_TextType | udt_TextType[];
  ValueCode?: udt_CodeType;
  ValueDateTime?: udt_DateTimeType;
  ValueIndicator?: udt_IndicatorType;
  ContentTypeCode?: udt_CodeType;
  ValueSpecifiedBinaryFile?: ram_SpecifiedBinaryFileType;
  ApplicableProductCharacteristicCondition?: ram_ProductCharacteristicConditionType | ram_ProductCharacteristicConditionType[];
  ApplicableReferencedStandard?: ram_ReferencedStandardType;
}

export interface ram_ProductClassificationType {
  SystemID?: udt_IDType;
  SystemName?: udt_TextType | udt_TextType[];
  ClassCode?: udt_CodeType;
  ClassName?: udt_TextType | udt_TextType[];
  SubClassCode?: udt_CodeType;
  ClassProductCharacteristic?: ram_ProductCharacteristicType | ram_ProductCharacteristicType[];
  ApplicableReferencedStandard?: ram_ReferencedStandardType;
}

export interface ram_RecordedStatusType {
  ConditionCode: udt_CodeType;
  ChangerName?: udt_TextType;
  ChangedDateTime: udt_DateTimeType;
}

export interface ram_ReferencePriceType {
  ChargeAmount?: udt_AmountType;
  BasisQuantity?: udt_QuantityType | udt_QuantityType[];
  NetPriceIndicator?: udt_IndicatorType | udt_IndicatorType[];
  ComparisonMethodCode?: udt_CodeType;
}

export interface ram_ReferencedDocumentType {
  IssuerAssignedID?: udt_IDType;
  URIID?: udt_IDType;
  StatusCode?: qdt_DocumentStatusCodeType;
  CopyIndicator?: udt_IndicatorType;
  LineID?: udt_IDType;
  TypeCode?: qdt_DocumentCodeType;
  GlobalID?: udt_IDType;
  RevisionID?: udt_IDType;
  Name?: udt_TextType | udt_TextType[];
  AttachmentBinaryObject?: udt_BinaryObjectType | udt_BinaryObjectType[];
  Information?: udt_TextType | udt_TextType[];
  ReferenceTypeCode?: qdt_ReferenceCodeType;
  SectionName?: udt_TextType | udt_TextType[];
  PreviousRevisionID?: udt_IDType | udt_IDType[];
  FormattedIssueDateTime?: qdt_FormattedDateTimeType;
  EffectiveSpecifiedPeriod?: ram_SpecifiedPeriodType;
  IssuerTradeParty?: ram_TradePartyType;
  AttachedSpecifiedBinaryFile?: ram_SpecifiedBinaryFileType | ram_SpecifiedBinaryFileType[];
}

export interface ram_ReferencedProductType {
  ID?: udt_IDType | udt_IDType[];
  GlobalID?: udt_IDType | udt_IDType[];
  SellerAssignedID?: udt_IDType;
  BuyerAssignedID?: udt_IDType;
  ManufacturerAssignedID?: udt_IDType | udt_IDType[];
  IndustryAssignedID?: udt_IDType | udt_IDType[];
  Name?: udt_TextType | udt_TextType[];
  Description?: udt_TextType | udt_TextType[];
  RelationshipTypeCode?: udt_CodeType | udt_CodeType[];
  UnitQuantity?: udt_QuantityType | udt_QuantityType[];
}

export interface ram_ReferencedStandardType {
  ID?: udt_IDType;
  VersionID?: udt_IDType;
  ElementVersionID?: udt_IDType;
  URIID?: udt_IDType;
  PartID?: udt_IDType;
  AgencyID?: udt_IDType;
}

export interface ram_RegisteredTaxType {
  TypeCode?: udt_CodeType;
  ExemptionReasonCode?: udt_CodeType;
  ExemptionReason?: udt_TextType | udt_TextType[];
  CurrencyCode?: udt_CodeType;
  Jurisdiction?: udt_TextType | udt_TextType[];
  Description?: udt_TextType | udt_TextType[];
  CustomsDutyIndicator?: udt_IndicatorType;
}

export interface ram_ReturnableAssetInstructionsType {
  MaterialID?: udt_IDType | udt_IDType[];
  TermsAndConditionsDescription?: udt_TextType | udt_TextType[];
  TermsAndConditionsDescriptionCode?: udt_CodeType;
  DepositValueSpecifiedAmount?: udt_AmountType | udt_AmountType[];
  DepositValueValiditySpecifiedPeriod?: ram_SpecifiedPeriodType;
}

export interface ram_SpatialDimensionType {
  ValueMeasure?: udt_MeasureType;
  TypeCode?: qdt_DimensionTypeCodeType;
  Description?: udt_TextType | udt_TextType[];
  WidthMeasure?: udt_MeasureType;
  LengthMeasure?: udt_MeasureType;
  HeightMeasure?: udt_MeasureType;
  ID?: udt_IDType;
  DiameterMeasure?: qdt_LinearUnitMeasureType;
}

export interface ram_SpecificationQueryType {
  ID: udt_IDType;
  TypeCode?: udt_CodeType;
  Content: udt_TextType;
  ContractualLanguageCode?: udt_CodeType;
}

export interface ram_SpecificationResponseType {
  ID: udt_IDType;
  QueryID?: udt_IDType;
  TypeCode?: udt_CodeType;
  Content: udt_TextType;
  ContractualLanguageCode?: udt_CodeType;
}

export interface ram_SpecifiedBinaryFileType {
  ID?: udt_IDType | udt_IDType[];
  Title?: udt_TextType | udt_TextType[];
  AuthorName?: udt_TextType | udt_TextType[];
  VersionID?: udt_IDType;
  FileName?: udt_TextType;
  URIID?: udt_IDType;
  MIMECode?: udt_CodeType;
  EncodingCode?: udt_CodeType;
  CharacterSetCode?: udt_CodeType;
  IncludedBinaryObject?: udt_BinaryObjectType | udt_BinaryObjectType[];
  Access?: udt_TextType | udt_TextType[];
  Description?: udt_TextType | udt_TextType[];
  SizeMeasure?: udt_MeasureType;
  AccessAvailabilitySpecifiedPeriod?: ram_SpecifiedPeriodType;
}

export interface ram_SpecifiedMarketplaceType {
  ID?: udt_IDType;
  Name?: udt_TextType;
  VirtualIndicator?: udt_IndicatorType;
  WebsiteURIID?: udt_IDType | udt_IDType[];
  SalesMethodCode?: udt_CodeType;
  OrderingAvailablePeriod?: ram_AvailablePeriodType | ram_AvailablePeriodType[];
}

export interface ram_SpecifiedPeriodType {
  DurationMeasure?: udt_MeasureType | udt_MeasureType[];
  InclusiveIndicator?: udt_IndicatorType;
  Description?: udt_TextType | udt_TextType[];
  StartDateTime?: udt_DateTimeType;
  EndDateTime?: udt_DateTimeType;
  CompleteDateTime?: udt_DateTimeType;
  OpenIndicator?: udt_IndicatorType;
  SeasonCode?: udt_CodeType;
  ID?: udt_IDType;
  Name?: udt_TextType | udt_TextType[];
  SequenceNumeric?: udt_NumericType;
  StartDateFlexibilityCode?: udt_CodeType;
  ContinuousIndicator?: udt_IndicatorType;
  PurposeCode?: udt_CodeType;
}

export interface ram_SubordinateLineTradeAgreementType {
  SellerOrderReferencedDocument?: ram_ReferencedDocumentType;
  BuyerOrderReferencedDocument?: ram_ReferencedDocumentType;
  AdditionalReferencedDocument?: ram_ReferencedDocumentType | ram_ReferencedDocumentType[];
  GrossPriceProductTradePrice?: ram_TradePriceType;
  NetPriceProductTradePrice?: ram_TradePriceType;
}

export interface ram_SubordinateLineTradeDeliveryType {
  PackageQuantity?: udt_QuantityType;
  ProductUnitQuantity?: udt_QuantityType;
  PerPackageUnitQuantity?: udt_QuantityType;
  IncludedSupplyChainPackaging?: ram_SupplyChainPackagingType | ram_SupplyChainPackagingType[];
}

export interface ram_SubordinateLineTradeSettlementType {
  ApplicableTradeTax?: ram_TradeTaxType;
}

export interface ram_SubordinateTradeLineItemType {
  ID?: udt_IDType | udt_IDType[];
  SpecifiedReferencedProduct?: ram_ReferencedProductType;
  ApplicableTradeProduct?: ram_TradeProductType | ram_TradeProductType[];
  SpecifiedSubordinateLineTradeAgreement?: ram_SubordinateLineTradeAgreementType;
  SpecifiedSubordinateLineTradeDelivery?: ram_SubordinateLineTradeDeliveryType;
  SpecifiedSubordinateLineTradeSettlement?: ram_SubordinateLineTradeSettlementType;
}

export interface ram_SupplyChainConsignmentItemType {
  TypeCode?: qdt_GoodsTypeCodeType;
  TypeExtensionCode?: qdt_GoodsTypeExtensionCodeType;
  DeclaredValueForCustomsAmount?: udt_AmountType;
  DeclaredValueForStatisticsAmount?: udt_AmountType;
  InvoiceAmount?: udt_AmountType | udt_AmountType[];
  GrossWeightMeasure?: qdt_WeightUnitMeasureType;
  NetWeightMeasure?: udt_MeasureType;
  TariffQuantity?: udt_QuantityType;
  NatureIdentificationTransportCargo?: ram_TransportCargoType;
}

export interface ram_SupplyChainConsignmentType {
  GrossWeightMeasure?: qdt_WeightUnitMeasureType | qdt_WeightUnitMeasureType[];
  NetWeightMeasure?: udt_MeasureType | udt_MeasureType[];
  GrossVolumeMeasure?: qdt_VolumeUnitMeasureType | qdt_VolumeUnitMeasureType[];
  InsurancePremiumAmount?: udt_AmountType;
  AssociatedInvoiceAmount?: udt_AmountType | udt_AmountType[];
  TotalChargeAmount?: udt_AmountType;
  DeclaredValueForCustomsAmount?: udt_AmountType;
  PackageQuantity?: udt_QuantityType;
  ConsignorTradeParty?: ram_TradePartyType;
  ConsigneeTradeParty?: ram_TradePartyType;
  CarrierTradeParty?: ram_TradePartyType;
  FreightForwarderTradeParty?: ram_TradePartyType;
  DeliveryTradeParty?: ram_TradePartyType;
  CustomsImportAgentTradeParty?: ram_TradePartyType;
  CustomsExportAgentTradeParty?: ram_TradePartyType;
  GroupingCentreTradeParty?: ram_TradePartyType | ram_TradePartyType[];
  TransportContractReferencedDocument?: ram_ReferencedDocumentType;
  AssociatedReferencedDocument?: ram_ReferencedDocumentType | ram_ReferencedDocumentType[];
  IncludedSupplyChainConsignmentItem?: ram_SupplyChainConsignmentItemType | ram_SupplyChainConsignmentItemType[];
  UtilizedLogisticsTransportEquipment?: ram_LogisticsTransportEquipmentType | ram_LogisticsTransportEquipmentType[];
  SpecifiedLogisticsTransportMovement?: ram_LogisticsTransportMovementType | ram_LogisticsTransportMovementType[];
}

export interface ram_SupplyChainEventType {
  ID?: udt_IDType;
  OccurrenceDateTime?: udt_DateTimeType;
  TypeCode?: udt_CodeType;
  Description?: udt_TextType | udt_TextType[];
  DescriptionBinaryObject?: udt_BinaryObjectType | udt_BinaryObjectType[];
  UnitQuantity?: udt_QuantityType;
  LatestOccurrenceDateTime?: udt_DateTimeType;
  EarliestOccurrenceDateTime?: udt_DateTimeType;
  OccurrenceSpecifiedPeriod?: ram_SpecifiedPeriodType;
  OccurrenceLogisticsLocation?: ram_LogisticsLocationType;
}

export interface ram_SupplyChainPackagingType {
  TypeCode?: qdt_PackageTypeCodeType;
  Type?: udt_TextType;
  Description?: udt_TextType | udt_TextType[];
  ConditionCode?: udt_CodeType;
  DisposalMethodCode?: udt_CodeType | udt_CodeType[];
  WeightMeasure?: udt_MeasureType | udt_MeasureType[];
  MaximumStackabilityQuantity?: udt_QuantityType;
  MaximumStackabilityWeightMeasure?: udt_MeasureType;
  CustomerFacingTotalUnitQuantity?: udt_QuantityType;
  LayerTotalUnitQuantity?: udt_QuantityType;
  ContentLayerQuantity?: udt_QuantityType;
  LinearSpatialDimension?: ram_SpatialDimensionType;
  MinimumLinearSpatialDimension?: ram_SpatialDimensionType;
  MaximumLinearSpatialDimension?: ram_SpatialDimensionType;
  SpecifiedPackagingMarking?: ram_PackagingMarkingType | ram_PackagingMarkingType[];
  ApplicableMaterialGoodsCharacteristic?: ram_MaterialGoodsCharacteristicType | ram_MaterialGoodsCharacteristicType[];
  ApplicableDisposalInstructions?: ram_DisposalInstructionsType | ram_DisposalInstructionsType[];
  ApplicableReturnableAssetInstructions?: ram_ReturnableAssetInstructionsType | ram_ReturnableAssetInstructionsType[];
}

export interface ram_SupplyChainTradeLineItemType {
  DescriptionCode?: udt_CodeType;
  AssociatedDocumentLineDocument: ram_DocumentLineDocumentType;
  SpecifiedTradeProduct?: ram_TradeProductType;
  SpecifiedLineTradeAgreement?: ram_LineTradeAgreementType;
  SpecifiedLineTradeDelivery?: ram_LineTradeDeliveryType;
  SpecifiedLineTradeSettlement: ram_LineTradeSettlementType;
  IncludedSubordinateTradeLineItem?: ram_SubordinateTradeLineItemType | ram_SubordinateTradeLineItemType[];
}

export interface ram_SupplyChainTradeTransactionType {
  IncludedSupplyChainTradeLineItem?: ram_SupplyChainTradeLineItemType | ram_SupplyChainTradeLineItemType[];
  ApplicableHeaderTradeAgreement: ram_HeaderTradeAgreementType;
  ApplicableHeaderTradeDelivery: ram_HeaderTradeDeliveryType;
  ApplicableHeaderTradeSettlement: ram_HeaderTradeSettlementType;
}

export interface ram_TaxRegistrationType {
  ID?: udt_IDType;
  AssociatedRegisteredTax?: ram_RegisteredTaxType;
}

export interface ram_TradeAccountingAccountType {
  ID: udt_IDType;
  SetTriggerCode?: qdt_AccountingDocumentCodeType;
  TypeCode?: qdt_AccountingAccountTypeCodeType;
  AmountTypeCode?: qdt_AccountingAmountTypeCodeType;
  Name?: udt_TextType;
  CostReferenceDimensionPattern?: udt_TextType;
}

export interface ram_TradeAddressType {
  ID?: udt_IDType;
  PostcodeCode?: udt_CodeType;
  PostOfficeBox?: udt_TextType;
  BuildingName?: udt_TextType;
  LineOne?: udt_TextType;
  LineTwo?: udt_TextType;
  LineThree?: udt_TextType;
  LineFour?: udt_TextType;
  LineFive?: udt_TextType;
  StreetName?: udt_TextType;
  CityName?: udt_TextType;
  CitySubDivisionName?: udt_TextType;
  CountryID?: qdt_CountryIDType;
  CountryName?: udt_TextType | udt_TextType[];
  CountrySubDivisionID?: udt_IDType;
  CountrySubDivisionName?: udt_TextType | udt_TextType[];
  AttentionOf?: udt_TextType;
  CareOf?: udt_TextType;
  BuildingNumber?: udt_TextType;
  DepartmentName?: udt_TextType;
  AdditionalStreetName?: udt_TextType;
}

export interface ram_TradeAllowanceChargeType {
  ChargeIndicator?: udt_IndicatorType;
  ID?: udt_IDType;
  SequenceNumeric?: udt_NumericType;
  CalculationPercent?: udt_PercentType;
  BasisAmount?: udt_AmountType;
  BasisQuantity?: udt_QuantityType;
  PrepaidIndicator?: udt_IndicatorType;
  ActualAmount?: udt_AmountType | udt_AmountType[];
  UnitBasisAmount?: udt_AmountType;
  ReasonCode?: qdt_AllowanceChargeReasonCodeType;
  Reason?: udt_TextType;
  TypeCode?: qdt_AllowanceChargeIdentificationCodeType;
  CategoryTradeTax?: ram_TradeTaxType | ram_TradeTaxType[];
  ActualTradeCurrencyExchange?: ram_TradeCurrencyExchangeType;
}

export interface ram_TradeContactType {
  ID?: udt_IDType;
  PersonName?: udt_TextType;
  DepartmentName?: udt_TextType;
  TypeCode?: qdt_ContactTypeCodeType;
  JobTitle?: udt_TextType;
  Responsibility?: udt_TextType;
  PersonID?: udt_IDType | udt_IDType[];
  TelephoneUniversalCommunication?: ram_UniversalCommunicationType;
  DirectTelephoneUniversalCommunication?: ram_UniversalCommunicationType;
  MobileTelephoneUniversalCommunication?: ram_UniversalCommunicationType;
  FaxUniversalCommunication?: ram_UniversalCommunicationType;
  EmailURIUniversalCommunication?: ram_UniversalCommunicationType;
  TelexUniversalCommunication?: ram_UniversalCommunicationType;
  VOIPUniversalCommunication?: ram_UniversalCommunicationType;
  InstantMessagingUniversalCommunication?: ram_UniversalCommunicationType;
  SpecifiedNote?: ram_NoteType | ram_NoteType[];
  SpecifiedContactPerson?: ram_ContactPersonType;
}

export interface ram_TradeCountrySubDivisionType {
  ID?: udt_IDType;
  Name?: udt_TextType | udt_TextType[];
}

export interface ram_TradeCountryType {
  ID?: qdt_CountryIDType;
  Name?: udt_TextType | udt_TextType[];
  SubordinateTradeCountrySubDivision?: ram_TradeCountrySubDivisionType | ram_TradeCountrySubDivisionType[];
}

export interface ram_TradeCurrencyExchangeType {
  SourceCurrencyCode: qdt_CurrencyCodeType;
  SourceUnitBasisNumeric?: udt_NumericType;
  TargetCurrencyCode: qdt_CurrencyCodeType;
  TargetUnitBaseNumeric?: udt_NumericType;
  MarketID?: udt_IDType;
  ConversionRate: udt_RateType;
  ConversionRateDateTime?: udt_DateTimeType;
  AssociatedReferencedDocument?: ram_ReferencedDocumentType | ram_ReferencedDocumentType[];
}

export interface ram_TradeDeliveryTermsType {
  DeliveryTypeCode?: qdt_DeliveryTermsCodeType;
  Description?: udt_TextType | udt_TextType[];
  RelevantTradeLocation?: ram_TradeLocationType;
}

export interface ram_TradeLocationType {
  CountryID?: qdt_CountryIDType;
  CountryName?: udt_TextType;
  ID?: udt_IDType;
  Name?: udt_TextType;
}

export interface ram_TradePartyType {
  ID?: udt_IDType | udt_IDType[];
  GlobalID?: udt_IDType | udt_IDType[];
  Name?: udt_TextType;
  RoleCode?: qdt_PartyRoleCodeType | qdt_PartyRoleCodeType[];
  Description?: udt_TextType | udt_TextType[];
  SpecifiedLegalOrganization?: ram_LegalOrganizationType;
  DefinedTradeContact?: ram_TradeContactType | ram_TradeContactType[];
  PostalTradeAddress?: ram_TradeAddressType;
  URIUniversalCommunication?: ram_UniversalCommunicationType | ram_UniversalCommunicationType[];
  SpecifiedTaxRegistration?: ram_TaxRegistrationType | ram_TaxRegistrationType[];
  EndPointURIUniversalCommunication?: ram_UniversalCommunicationType;
  LogoAssociatedSpecifiedBinaryFile?: ram_SpecifiedBinaryFileType | ram_SpecifiedBinaryFileType[];
}

export interface ram_TradePaymentDiscountTermsType {
  BasisDateTime?: udt_DateTimeType;
  BasisPeriodMeasure?: udt_MeasureType;
  BasisAmount?: udt_AmountType;
  CalculationPercent?: udt_PercentType;
  ActualDiscountAmount?: udt_AmountType;
}

export interface ram_TradePaymentPenaltyTermsType {
  BasisDateTime?: udt_DateTimeType;
  BasisPeriodMeasure?: udt_MeasureType;
  BasisAmount?: udt_AmountType;
  CalculationPercent?: udt_PercentType;
  ActualPenaltyAmount?: udt_AmountType;
}

export interface ram_TradePaymentTermsType {
  ID?: qdt_PaymentTermsIDType;
  FromEventCode?: qdt_PaymentTermsEventTimeReferenceCodeType;
  SettlementPeriodMeasure?: udt_MeasureType;
  Description?: udt_TextType | udt_TextType[];
  DueDateDateTime?: udt_DateTimeType;
  TypeCode?: qdt_PaymentTermsTypeCodeType;
  InstructionTypeCode?: udt_CodeType;
  DirectDebitMandateID?: udt_IDType | udt_IDType[];
  PartialPaymentPercent?: udt_PercentType;
  PaymentMeansID?: udt_IDType | udt_IDType[];
  PartialPaymentAmount?: udt_AmountType | udt_AmountType[];
  ApplicableTradePaymentPenaltyTerms?: ram_TradePaymentPenaltyTermsType;
  ApplicableTradePaymentDiscountTerms?: ram_TradePaymentDiscountTermsType;
  PayeeTradeParty?: ram_TradePartyType | ram_TradePartyType[];
}

export interface ram_TradePriceType {
  TypeCode?: qdt_PriceTypeCodeType;
  ChargeAmount: udt_AmountType | udt_AmountType[];
  BasisQuantity?: udt_QuantityType;
  MinimumQuantity?: udt_QuantityType;
  MaximumQuantity?: udt_QuantityType;
  ChangeReason?: udt_TextType | udt_TextType[];
  OrderUnitConversionFactorNumeric?: udt_NumericType;
  AppliedTradeAllowanceCharge?: ram_TradeAllowanceChargeType | ram_TradeAllowanceChargeType[];
  ValiditySpecifiedPeriod?: ram_SpecifiedPeriodType;
  IncludedTradeTax?: ram_TradeTaxType | ram_TradeTaxType[];
  DeliveryTradeLocation?: ram_TradeLocationType | ram_TradeLocationType[];
  TradeComparisonReferencePrice?: ram_ReferencePriceType | ram_ReferencePriceType[];
  AssociatedReferencedDocument?: ram_ReferencedDocumentType | ram_ReferencedDocumentType[];
}

export interface ram_TradeProductInstanceType {
  GlobalSerialID?: udt_IDType;
  BatchID?: udt_IDType;
  KanbanID?: udt_IDType;
  SupplierAssignedSerialID?: udt_IDType;
  BestBeforeDateTime?: udt_DateTimeType;
  ExpiryDateTime?: udt_DateTimeType;
  SellByDateTime?: udt_DateTimeType;
  SerialID?: udt_IDType | udt_IDType[];
  RegistrationID?: udt_IDType | udt_IDType[];
  ProductionSupplyChainEvent?: ram_SupplyChainEventType;
  PackagingSupplyChainEvent?: ram_SupplyChainEventType;
  ApplicableMaterialGoodsCharacteristic?: ram_MaterialGoodsCharacteristicType | ram_MaterialGoodsCharacteristicType[];
  ApplicableProductCharacteristic?: ram_ProductCharacteristicType | ram_ProductCharacteristicType[];
}

export interface ram_TradeProductType {
  ID?: udt_IDType;
  GlobalID?: udt_IDType;
  SellerAssignedID?: udt_IDType;
  BuyerAssignedID?: udt_IDType;
  ManufacturerAssignedID?: udt_IDType;
  Name?: udt_TextType | udt_TextType[];
  TradeName?: udt_TextType;
  Description?: udt_TextType;
  TypeCode?: udt_CodeType;
  NetWeightMeasure?: udt_MeasureType;
  GrossWeightMeasure?: udt_MeasureType;
  ProductGroupID?: udt_IDType | udt_IDType[];
  EndItemTypeCode?: udt_CodeType | udt_CodeType[];
  EndItemName?: udt_TextType | udt_TextType[];
  AreaDensityMeasure?: udt_MeasureType;
  UseDescription?: udt_TextType | udt_TextType[];
  BrandName?: udt_TextType;
  SubBrandName?: udt_TextType;
  DrainedNetWeightMeasure?: udt_MeasureType;
  VariableMeasureIndicator?: udt_IndicatorType;
  ColourCode?: udt_CodeType;
  ColourDescription?: udt_TextType | udt_TextType[];
  Designation?: udt_TextType | udt_TextType[];
  FormattedCancellationAnnouncedLaunchDateTime?: qdt_FormattedDateTimeType;
  FormattedLatestProductDataChangeDateTime?: qdt_FormattedDateTimeType;
  ApplicableProductCharacteristic?: ram_ProductCharacteristicType | ram_ProductCharacteristicType[];
  ApplicableMaterialGoodsCharacteristic?: ram_MaterialGoodsCharacteristicType | ram_MaterialGoodsCharacteristicType[];
  DesignatedProductClassification?: ram_ProductClassificationType | ram_ProductClassificationType[];
  IndividualTradeProductInstance?: ram_TradeProductInstanceType | ram_TradeProductInstanceType[];
  CertificationEvidenceReferenceReferencedDocument?: ram_ReferencedDocumentType | ram_ReferencedDocumentType[];
  InspectionReferenceReferencedDocument?: ram_ReferencedDocumentType | ram_ReferencedDocumentType[];
  OriginTradeCountry?: ram_TradeCountryType;
  LinearSpatialDimension?: ram_SpatialDimensionType;
  MinimumLinearSpatialDimension?: ram_SpatialDimensionType;
  MaximumLinearSpatialDimension?: ram_SpatialDimensionType;
  ManufacturerTradeParty?: ram_TradePartyType;
  PresentationSpecifiedBinaryFile?: ram_SpecifiedBinaryFileType | ram_SpecifiedBinaryFileType[];
  MSDSReferenceReferencedDocument?: ram_ReferencedDocumentType;
  AdditionalReferenceReferencedDocument?: ram_ReferencedDocumentType | ram_ReferencedDocumentType[];
  LegalRightsOwnerTradeParty?: ram_TradePartyType;
  BrandOwnerTradeParty?: ram_TradePartyType;
  IncludedReferencedProduct?: ram_ReferencedProductType | ram_ReferencedProductType[];
  InformationNote?: ram_NoteType | ram_NoteType[];
}

export interface ram_TradeSettlementFinancialCardType {
  MicrochipIndicator?: udt_IndicatorType;
  ID?: udt_IDType;
  TypeCode?: udt_CodeType;
  CardholderName?: udt_TextType;
  ExpiryDate?: udt_DateType;
  VerificationNumeric?: udt_NumericType;
  ValidFromDateTime?: udt_DateTimeType;
  CreditLimitAmount?: udt_AmountType | udt_AmountType[];
  CreditAvailableAmount?: udt_AmountType | udt_AmountType[];
  InterestRatePercent?: udt_PercentType;
  IssuingCompanyName?: udt_TextType;
  Description?: udt_TextType;
}

export interface ram_TradeSettlementHeaderMonetarySummationType {
  LineTotalAmount?: udt_AmountType | udt_AmountType[];
  ChargeTotalAmount?: udt_AmountType | udt_AmountType[];
  AllowanceTotalAmount?: udt_AmountType | udt_AmountType[];
  TaxBasisTotalAmount?: udt_AmountType | udt_AmountType[];
  TaxTotalAmount?: udt_AmountType | udt_AmountType[];
  RoundingAmount?: udt_AmountType | udt_AmountType[];
  GrandTotalAmount?: udt_AmountType | udt_AmountType[];
  InformationAmount?: udt_AmountType | udt_AmountType[];
  TotalPrepaidAmount?: udt_AmountType | udt_AmountType[];
  TotalDiscountAmount?: udt_AmountType | udt_AmountType[];
  TotalAllowanceChargeAmount?: udt_AmountType | udt_AmountType[];
  DuePayableAmount?: udt_AmountType | udt_AmountType[];
  RetailValueExcludingTaxInformationAmount?: udt_AmountType | udt_AmountType[];
  TotalDepositFeeInformationAmount?: udt_AmountType | udt_AmountType[];
  ProductValueExcludingTobaccoTaxInformationAmount?: udt_AmountType | udt_AmountType[];
  TotalRetailValueInformationAmount?: udt_AmountType | udt_AmountType[];
  GrossLineTotalAmount?: udt_AmountType | udt_AmountType[];
  NetLineTotalAmount?: udt_AmountType | udt_AmountType[];
  NetIncludingTaxesLineTotalAmount?: udt_AmountType | udt_AmountType[];
}

export interface ram_TradeSettlementLineMonetarySummationType {
  LineTotalAmount?: udt_AmountType | udt_AmountType[];
  ChargeTotalAmount?: udt_AmountType | udt_AmountType[];
  AllowanceTotalAmount?: udt_AmountType | udt_AmountType[];
  TaxBasisTotalAmount?: udt_AmountType | udt_AmountType[];
  TaxTotalAmount?: udt_AmountType | udt_AmountType[];
  GrandTotalAmount?: udt_AmountType | udt_AmountType[];
  InformationAmount?: udt_AmountType | udt_AmountType[];
  TotalAllowanceChargeAmount?: udt_AmountType | udt_AmountType[];
  TotalRetailValueInformationAmount?: udt_AmountType | udt_AmountType[];
  GrossLineTotalAmount?: udt_AmountType | udt_AmountType[];
  NetLineTotalAmount?: udt_AmountType | udt_AmountType[];
  NetIncludingTaxesLineTotalAmount?: udt_AmountType | udt_AmountType[];
  ProductWeightLossInformationAmount?: udt_AmountType | udt_AmountType[];
}

export interface ram_TradeSettlementPaymentMeansType {
  PaymentChannelCode?: qdt_PaymentMeansChannelCodeType;
  TypeCode?: qdt_PaymentMeansCodeType;
  GuaranteeMethodCode?: qdt_PaymentGuaranteeMeansCodeType;
  PaymentMethodCode?: udt_CodeType;
  Information?: udt_TextType | udt_TextType[];
  ID?: udt_IDType | udt_IDType[];
  ApplicableTradeSettlementFinancialCard?: ram_TradeSettlementFinancialCardType;
  PayerPartyDebtorFinancialAccount?: ram_DebtorFinancialAccountType;
  PayeePartyCreditorFinancialAccount?: ram_CreditorFinancialAccountType;
  PayerSpecifiedDebtorFinancialInstitution?: ram_DebtorFinancialInstitutionType;
  PayeeSpecifiedCreditorFinancialInstitution?: ram_CreditorFinancialInstitutionType;
}

export interface ram_TradeTaxType {
  CalculatedAmount?: udt_AmountType | udt_AmountType[];
  TypeCode?: qdt_TaxTypeCodeType;
  ExemptionReason?: udt_TextType;
  CalculatedRate?: udt_RateType;
  CalculationSequenceNumeric?: udt_NumericType;
  BasisQuantity?: udt_QuantityType;
  BasisAmount?: udt_AmountType | udt_AmountType[];
  UnitBasisAmount?: udt_AmountType | udt_AmountType[];
  LineTotalBasisAmount?: udt_AmountType | udt_AmountType[];
  AllowanceChargeBasisAmount?: udt_AmountType | udt_AmountType[];
  CategoryCode?: qdt_TaxCategoryCodeType;
  CurrencyCode?: qdt_CurrencyCodeType;
  Jurisdiction?: udt_TextType | udt_TextType[];
  CustomsDutyIndicator?: udt_IndicatorType;
  ExemptionReasonCode?: udt_CodeType;
  TaxBasisAllowanceRate?: udt_RateType;
  TaxPointDate?: udt_DateType;
  Type?: udt_TextType;
  InformationAmount?: udt_AmountType | udt_AmountType[];
  CategoryName?: udt_TextType | udt_TextType[];
  DueDateTypeCode?: qdt_TimeReferenceCodeType;
  RateApplicablePercent?: udt_PercentType;
  SpecifiedTradeAccountingAccount?: ram_TradeAccountingAccountType | ram_TradeAccountingAccountType[];
  ServiceSupplyTradeCountry?: ram_TradeCountryType;
  BuyerRepayableTaxSpecifiedTradeAccountingAccount?: ram_TradeAccountingAccountType;
  SellerPayableTaxSpecifiedTradeAccountingAccount?: ram_TradeAccountingAccountType;
  SellerRefundableTaxSpecifiedTradeAccountingAccount?: ram_TradeAccountingAccountType;
  BuyerDeductibleTaxSpecifiedTradeAccountingAccount?: ram_TradeAccountingAccountType;
  BuyerNonDeductibleTaxSpecifiedTradeAccountingAccount?: ram_TradeAccountingAccountType;
  PlaceApplicableTradeLocation?: ram_TradeLocationType | ram_TradeLocationType[];
}

export interface ram_TransportCargoType {
  TypeCode?: qdt_CargoCategoryCodeType;
  Identification?: udt_TextType;
  OperationalCategoryCode?: qdt_CargoOperationalCategoryCodeType;
  StatisticalClassificationCode?: qdt_CargoCommodityCategoryCodeType;
}

export interface ram_UniversalCommunicationType {
  URIID?: udt_IDType;
  ChannelCode?: qdt_CommunicationChannelCodeType;
  CompleteNumber?: udt_TextType;
}

export interface ram_ValuationBreakdownStatementType {
  ID: udt_IDType;
  Name: udt_TextType;
  Description?: udt_TextType | udt_TextType[];
  MeasurementMethodID?: udt_IDType | udt_IDType[];
  CreationDateTime: udt_DateTimeType;
  DefaultCurrencyCode: qdt_CurrencyCodeType;
  DefaultLanguageCode: udt_CodeType;
  Comment?: udt_TextType | udt_TextType[];
  TypeCode?: udt_CodeType | udt_CodeType[];
  RequestedActionCode?: udt_CodeType | udt_CodeType[];
  PriceListID?: udt_IDType;
  ContractualLanguageCode?: udt_CodeType;
  ItemGroupedWorkItem?: ram_GroupedWorkItemType | ram_GroupedWorkItemType[];
  ItemBasicWorkItem?: ram_BasicWorkItemType | ram_BasicWorkItemType[];
  TotalCalculatedPrice?: ram_CalculatedPriceType | ram_CalculatedPriceType[];
  ChangedRecordedStatus?: ram_RecordedStatusType | ram_RecordedStatusType[];
  CreationSpecifiedBinaryFile?: ram_SpecifiedBinaryFileType | ram_SpecifiedBinaryFileType[];
  ReaderSpecifiedBinaryFile?: ram_SpecifiedBinaryFileType | ram_SpecifiedBinaryFileType[];
  ReferencedSpecifiedBinaryFile?: ram_SpecifiedBinaryFileType | ram_SpecifiedBinaryFileType[];
}

export interface ram_WorkItemComplexDescriptionType {
  Abstract?: udt_TextType | udt_TextType[];
  Content?: udt_TextType | udt_TextType[];
  ContractualLanguageCode?: udt_CodeType;
  RequestingSpecificationQuery?: ram_SpecificationQueryType | ram_SpecificationQueryType[];
  RespondingSpecificationResponse?: ram_SpecificationResponseType | ram_SpecificationResponseType[];
  SubsetWorkItemComplexDescription?: ram_WorkItemComplexDescriptionType;
}

export interface ram_WorkItemDimensionType {
  ID?: udt_IDType;
  ValueMeasure: udt_MeasureType;
  Description?: udt_TextType;
  TypeCode: udt_CodeType;
  ContractualLanguageCode?: udt_CodeType;
  ComponentWorkItemDimension?: ram_WorkItemDimensionType | ram_WorkItemDimensionType[];
}

export interface ram_WorkItemQuantityAnalysisType {
  ID: udt_IDType;
  ActualQuantity?: udt_QuantityType;
  Description?: udt_TextType;
  ActualQuantityPercent?: udt_PercentType;
  StatusCode?: udt_CodeType;
  TypeCode?: udt_CodeType;
  PrimaryClassificationCode?: udt_CodeType | udt_CodeType[];
  AlternativeClassificationCode?: udt_CodeType | udt_CodeType[];
  ContractualLanguageCode?: udt_CodeType;
  ActualQuantityWorkItemDimension?: ram_WorkItemDimensionType | ram_WorkItemDimensionType[];
  BreakdownWorkItemQuantityAnalysis?: ram_WorkItemQuantityAnalysisType | ram_WorkItemQuantityAnalysisType[];
  ChangedRecordedStatus?: ram_RecordedStatusType | ram_RecordedStatusType[];
}

export interface rsm_CrossIndustryInvoiceType {
  ExchangedDocumentContext: ram_ExchangedDocumentContextType;
  ExchangedDocument: ram_ExchangedDocumentType;
  SupplyChainTradeTransaction: ram_SupplyChainTradeTransactionType;
  ValuationBreakdownStatement?: ram_ValuationBreakdownStatementType;
}

export type udt_AmountType = number | {
  _?: number;
  $?: {
    currencyID?: string;
    currencyCodeListVersionID?: string;
  };
};

export type udt_BinaryObjectType = string | {
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

export type udt_CodeType = string | {
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

export type udt_DateTimeType = {
  DateTimeString: unknown;
} | {
  DateTime: string;
};

export type udt_DateType = {
  DateString: unknown;
} | {
  Date: string;
};

export type udt_IDType = string | {
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

export type udt_IndicatorType = {
  IndicatorString: unknown;
} | {
  Indicator: boolean;
};

export type udt_MeasureType = number | {
  _?: number;
  $?: {
    unitCode?: string;
    unitCodeListVersionID?: string;
  };
};

export type udt_NumericType = number | {
  _?: number;
  $?: {
    format?: string;
  };
};

export type udt_PercentType = number | {
  _?: number;
  $?: {
    format?: string;
  };
};

export type udt_QuantityType = number | {
  _?: number;
  $?: {
    unitCode?: string;
    unitCodeListID?: string;
    unitCodeListAgencyID?: string;
    unitCodeListAgencyName?: string;
  };
};

export type udt_RateType = number | {
  _?: number;
  $?: {
    format?: string;
  };
};

export type udt_TextType = string | {
  _?: string;
  $?: {
    languageID?: string;
    languageLocaleID?: string;
  };
};

export type udt_ValueType = number | {
  _?: number;
  $?: {
    format?: string;
  };
};

