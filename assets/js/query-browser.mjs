// docs/assets/query-field-browser.mjs

const data = [
    {
        "table": "absoluteage",
        "name": "Absolute Age",
        "desc": "Absolute Age",
        "items": [
            {
                "key": "absoluteage",
                "type": "java.math.BigDecimal",
                "name": "Absolute Age",
                "desc": "Absolute Age"
            },
            {
                "key": "absoluteageattachments",
                "type": "OneToMany",
                "name": "Absolute Age Attachments",
                "desc": "Absolute Age Attachments"
            },
            {
                "key": "absoluteagecitations",
                "type": "OneToMany",
                "name": "Absolute Age Citations",
                "desc": "Absolute Age Citations"
            },
            {
                "key": "absoluteageid",
                "type": "java.lang.Integer",
                "name": "Absolute Age Id",
                "desc": "Absolute Age Id"
            },
            {
                "key": "agent1",
                "type": "ManyToOne",
                "name": "Agent1",
                "desc": "Agent1"
            },
            {
                "key": "agetype",
                "type": "java.lang.String",
                "name": "Age Type",
                "desc": "Age Type"
            },
            {
                "key": "ageuncertainty",
                "type": "java.math.BigDecimal",
                "name": "Age Uncertainty",
                "desc": "Age Uncertainty"
            },
            {
                "key": "collectiondate",
                "type": "java.util.Date",
                "name": "Collection Date",
                "desc": "Collection Date"
            },
            {
                "key": "collectionobject",
                "type": "ManyToOne",
                "name": "Collection Object",
                "desc": "Collection Object"
            },
            {
                "key": "createdbyagent",
                "type": "ManyToOne",
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "date1",
                "type": "java.util.Date",
                "name": "Date1",
                "desc": "Date1"
            },
            {
                "key": "date2",
                "type": "java.util.Date",
                "name": "Date2",
                "desc": "Date2"
            },
            {
                "key": "datingmethod",
                "type": "java.lang.String",
                "name": "Dating Method",
                "desc": "Dating Method"
            },
            {
                "key": "datingmethodremarks",
                "type": "text",
                "name": "Dating Method Remarks",
                "desc": "Dating Method Remarks"
            },
            {
                "key": "modifiedbyagent",
                "type": "ManyToOne",
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": "java.math.BigDecimal",
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": "java.math.BigDecimal",
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "text1",
                "type": "text",
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": "text",
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": "java.lang.Integer",
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "Yesno1",
                "desc": "Yesno1"
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "YesNo2",
                "desc": "YesNo2"
            }
        ]
    },
    {
        "table": "absoluteageattachment",
        "name": "Absolute Age Attachment",
        "desc": "Absolute Age Attachment",
        "items": [
            {
                "key": "absoluteage",
                "type": "ManyToOne",
                "name": "Absolute Age",
                "desc": "Absolute Age"
            },
            {
                "key": "absoluteageattachmentid",
                "type": "java.lang.Integer",
                "name": "Absolute Age Attachment Id",
                "desc": "Absolute Age Attachment Id"
            },
            {
                "key": "attachment",
                "type": "ManyToOne",
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "collectionmember",
                "type": "ManyToOne",
                "name": "Collection Member",
                "desc": "Collection Member"
            },
            {
                "key": "createdbyagent",
                "type": "ManyToOne",
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": "ManyToOne",
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": "java.lang.Integer",
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": "java.lang.Integer",
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "absoluteagecitation",
        "name": "Absolute Age Citation",
        "desc": "Absolute Age Citation",
        "items": [
            {
                "key": "absoluteage",
                "type": "ManyToOne",
                "name": "Absolute Age",
                "desc": "Absolute Age"
            },
            {
                "key": "absoluteagecitationid",
                "type": "java.lang.Integer",
                "name": "Absolute Age Citation Id",
                "desc": "Absolute Age Citation Id"
            },
            {
                "key": "collectionmember",
                "type": "ManyToOne",
                "name": "Collection Member",
                "desc": "Collection Member"
            },
            {
                "key": "createdbyagent",
                "type": "ManyToOne",
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "figurenumber",
                "type": "java.lang.String",
                "name": "Figure Number",
                "desc": "Figure Number"
            },
            {
                "key": "isfigured",
                "type": "java.lang.Boolean",
                "name": "Is Figured",
                "desc": "Is Figured"
            },
            {
                "key": "modifiedbyagent",
                "type": "ManyToOne",
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "pagenumber",
                "type": "java.lang.String",
                "name": "Page Number",
                "desc": "Page Number"
            },
            {
                "key": "platenumber",
                "type": "java.lang.String",
                "name": "Plate Number",
                "desc": "Plate Number"
            },
            {
                "key": "referencework",
                "type": "ManyToOne",
                "name": "Reference Work",
                "desc": "Reference Work"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": "java.lang.Integer",
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "accession",
        "name": "Grouping Accession Table",
        "desc": "Also called an acquisition. A consignment of specimens acquired either by field collecting of staff members, gifts, purchases, or exchange with another institution.",
        "items": [
            {
                "key": "accessionagents",
                "type": "OneToMany",
                "name": "Accession Agents",
                "desc": "Accession Agents"
            },
            {
                "key": "accessionattachments",
                "type": "OneToMany",
                "name": "Accession Attachments",
                "desc": "Accession Attachments"
            },
            {
                "key": "accessionauthorizations",
                "type": "OneToMany",
                "name": "Accession Authorizations",
                "desc": "Accession Authorizations"
            },
            {
                "key": "accessioncitations",
                "type": null,
                "name": "Accession Citations",
                "desc": "Accession Citations"
            },
            {
                "key": "accessioncondition",
                "type": null,
                "name": "Accession Condition",
                "desc": "Physical description of the condition of the accession."
            },
            {
                "key": "accessionnumber",
                "type": null,
                "name": "Accession Number",
                "desc": "Usually an integer or alphanumeric value that is assigned to the material when it enters the collection. The format of accession numbers varies among collections, but all refer to the acquisition of specimens, observations, or other collection objects."
            },
            {
                "key": "addressofrecord",
                "type": null,
                "name": "Address Of Record",
                "desc": "Address Of Record"
            },
            {
                "key": "appraisals",
                "type": null,
                "name": "Appraisals",
                "desc": "Appraisals"
            },
            {
                "key": "collectionobjects",
                "type": "OneToMany",
                "name": "Collection Objects",
                "desc": "Collection Objects"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "dateaccessioned",
                "type": "java.util.Calendar",
                "name": "Date Accessioned",
                "desc": "Date of Accession."
            },
            {
                "key": "dateacknowledged",
                "type": null,
                "name": "Date Acknowledged",
                "desc": "Date Acknowledged"
            },
            {
                "key": "datereceived",
                "type": "java.util.Calendar",
                "name": "Date Received",
                "desc": "Date material was received."
            },
            {
                "key": "division",
                "type": null,
                "name": "Division",
                "desc": "Division"
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "integer3",
                "type": null,
                "name": "Integer3",
                "desc": "Integer3"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": "java.lang.Float",
                "name": "Number1",
                "desc": "User definable."
            },
            {
                "key": "number2",
                "type": "java.lang.Float",
                "name": "Number2",
                "desc": "User definable."
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments."
            },
            {
                "key": "repositoryagreement",
                "type": "ManyToOne",
                "name": "Repository Agreement",
                "desc": "Repository Agreement"
            },
            {
                "key": "status",
                "type": "java.lang.String",
                "name": "Status",
                "desc": "Status of Accession, e.g. `In process`, `Complete` ..."
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable."
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "User definable."
            },
            {
                "key": "text3",
                "type": "java.lang.String",
                "name": "Text3",
                "desc": "User definable."
            },
            {
                "key": "text4",
                "type": null,
                "name": "Text4",
                "desc": "Text4"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Text5",
                "desc": "Text5"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The date and time the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "totalvalue",
                "type": null,
                "name": "Total Value",
                "desc": "The total monetary value of the accession."
            },
            {
                "key": "treatmentevents",
                "type": null,
                "name": "Treatment Events",
                "desc": "Treatment Events"
            },
            {
                "key": "type",
                "type": "java.lang.String",
                "name": "Type",
                "desc": "Source of Accession, e.g. `Collecting`, `Gift`, `Bequest` ..."
            },
            {
                "key": "verbatimdate",
                "type": "java.lang.String",
                "name": "Verbatim Date",
                "desc": "Accommodates historical accessions."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "Yes No1",
                "desc": "User definable."
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "Yes No2",
                "desc": "User definable."
            }
        ]
    },
    {
        "table": "accessionagent",
        "name": "Accession Agent",
        "desc": "The person(s) requesting the Accession. This references an Agent.",
        "items": [
            {
                "key": "accession",
                "type": "ManyToOne",
                "name": "Accession",
                "desc": "Accession"
            },
            {
                "key": "agent",
                "type": "ManyToOne",
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments."
            },
            {
                "key": "repositoryagreement",
                "type": "ManyToOne",
                "name": "Repository Agreement",
                "desc": "Repository Agreement"
            },
            {
                "key": "role",
                "type": "java.lang.String",
                "name": "Role",
                "desc": "Role the agent played in the accession process."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "accessionattachment",
        "name": "Accession Attachment",
        "desc": "An attachment for the Accession. This may be one or more PDF files of paperwork or a photo of the Accession.",
        "items": [
            {
                "key": "accession",
                "type": "ManyToOne",
                "name": "Accession",
                "desc": "Miscellaneous files can be attached."
            },
            {
                "key": "attachment",
                "type": "ManyToOne",
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": "java.lang.Integer",
                "name": "Ordinal",
                "desc": "Provides a sequential order for the attachments."
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional comments."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "accessionauthorization",
        "name": "Accession Authorization",
        "desc": "This represents the person authorizing the Accession. It references an existing Agent.",
        "items": [
            {
                "key": "accession",
                "type": "ManyToOne",
                "name": "Accession",
                "desc": "Accession"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "permit",
                "type": "ManyToOne",
                "name": "Permit",
                "desc": "Permit"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional comments."
            },
            {
                "key": "repositoryagreement",
                "type": "ManyToOne",
                "name": "Repository Agreement",
                "desc": "Repository Agreement"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "accessioncitation",
        "name": "Accession Citations",
        "desc": "Accession Citations",
        "items": [
            {
                "key": "accession",
                "type": null,
                "name": "Accession",
                "desc": "Accession"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "figurenumber",
                "type": null,
                "name": "Figure Number",
                "desc": "Figure Number"
            },
            {
                "key": "isfigured",
                "type": null,
                "name": "Is Figured",
                "desc": "Is Figured"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "pagenumber",
                "type": null,
                "name": "Page Number",
                "desc": "Page Number"
            },
            {
                "key": "platenumber",
                "type": null,
                "name": "Plate Number",
                "desc": "Plate Number"
            },
            {
                "key": "referencework",
                "type": null,
                "name": "Reference Work",
                "desc": "Reference Work"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "address",
        "name": "Address",
        "desc": "The address of an Agent. This also captures a start and end date for the address and the position held while at the address.",
        "items": [
            {
                "key": "address",
                "type": "java.lang.String",
                "name": "Address",
                "desc": "Address as it should appear on mailing labels."
            },
            {
                "key": "address2",
                "type": "java.lang.String",
                "name": "Address2",
                "desc": "Second line of address (optional)."
            },
            {
                "key": "address3",
                "type": null,
                "name": "Address3",
                "desc": "Address3"
            },
            {
                "key": "address4",
                "type": null,
                "name": "Address4",
                "desc": "Address4"
            },
            {
                "key": "address5",
                "type": null,
                "name": "Address5",
                "desc": "Address5"
            },
            {
                "key": "agent",
                "type": "ManyToOne",
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "city",
                "type": "java.lang.String",
                "name": "City",
                "desc": "The city."
            },
            {
                "key": "country",
                "type": "java.lang.String",
                "name": "Country",
                "desc": "The country."
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "divisions",
                "type": null,
                "name": "Divisions",
                "desc": "Divisions"
            },
            {
                "key": "enddate",
                "type": "java.util.Calendar",
                "name": "End Date",
                "desc": "The last date the agent was at the address."
            },
            {
                "key": "fax",
                "type": "java.lang.String",
                "name": "Fax",
                "desc": "The fax number."
            },
            {
                "key": "insitutions",
                "type": null,
                "name": "Instiutions",
                "desc": "Instiutions"
            },
            {
                "key": "iscurrent",
                "type": null,
                "name": "Is Current",
                "desc": "Indicates if this is the current address."
            },
            {
                "key": "isprimary",
                "type": "java.lang.Boolean",
                "name": "Is Primary",
                "desc": "Indicates whether this is the primary address."
            },
            {
                "key": "isshipping",
                "type": null,
                "name": "Is Shipping",
                "desc": "Indicates if this is the shipping address."
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Allows multiple addresses to be ordered."
            },
            {
                "key": "phone1",
                "type": "java.lang.String",
                "name": "Phone1",
                "desc": "The primary phone number."
            },
            {
                "key": "phone2",
                "type": "java.lang.String",
                "name": "Phone2",
                "desc": "The secondary phone number."
            },
            {
                "key": "positionheld",
                "type": "java.lang.String",
                "name": "Position Held",
                "desc": "The position held by the agent while at this address."
            },
            {
                "key": "postalcode",
                "type": "java.lang.String",
                "name": "Postal Code",
                "desc": "Postal code (Zip Code)."
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional comments."
            },
            {
                "key": "roomorbuilding",
                "type": "java.lang.String",
                "name": "Room/Building",
                "desc": "The room or building of the agent."
            },
            {
                "key": "startdate",
                "type": "java.util.Calendar",
                "name": "Start Date",
                "desc": "The first date the agent was at this address."
            },
            {
                "key": "state",
                "type": "java.lang.String",
                "name": "State",
                "desc": "The state within the country."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "typeofaddr",
                "type": null,
                "name": "Type Of Addr",
                "desc": "Type Of Addr"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "addressofrecord",
        "name": "Address Of Record",
        "desc": "This is the address when the legal action took place.",
        "items": [
            {
                "key": "accessions",
                "type": null,
                "name": "Accessions",
                "desc": "Accessions"
            },
            {
                "key": "address",
                "type": null,
                "name": "Address",
                "desc": "Primary address of record."
            },
            {
                "key": "address2",
                "type": null,
                "name": "Address2",
                "desc": "Secondary address of record."
            },
            {
                "key": "agent",
                "type": null,
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "city",
                "type": null,
                "name": "City",
                "desc": "City of record."
            },
            {
                "key": "country",
                "type": null,
                "name": "Country",
                "desc": "Country of record."
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "exchangeins",
                "type": null,
                "name": "Exchange Ins",
                "desc": "Exchange Ins"
            },
            {
                "key": "exchangeouts",
                "type": null,
                "name": "Exchange Outs",
                "desc": "Exchange Outs"
            },
            {
                "key": "loans",
                "type": null,
                "name": "Loans",
                "desc": "Loans"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "postalcode",
                "type": null,
                "name": "Postal Code",
                "desc": "Postal code of record (zip code)."
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Additional comments."
            },
            {
                "key": "repositoryagreements",
                "type": null,
                "name": "Repository Agreements",
                "desc": "Repository Agreements"
            },
            {
                "key": "state",
                "type": null,
                "name": "State",
                "desc": "State of record."
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "agent",
        "name": "Agent",
        "desc": "Contains information about people, groups, and organizations. Some roles for an agent include collector, determiner, preparer, cataloger, donor, issuer of permits, and so forth.",
        "items": [
            {
                "key": "abbreviation",
                "type": "java.lang.String",
                "name": "Abbreviation",
                "desc": "Abbreviation of organization."
            },
            {
                "key": "addresses",
                "type": "OneToMany",
                "name": "Addresses",
                "desc": "Addresses"
            },
            {
                "key": "agentattachments",
                "type": "OneToMany",
                "name": "Agent Attachments",
                "desc": "Agent Attachments"
            },
            {
                "key": "agentgeographies",
                "type": null,
                "name": "Agent Geographies",
                "desc": "Agent Geographies"
            },
            {
                "key": "agentspecialties",
                "type": null,
                "name": "Agent Specialties",
                "desc": "Agent Specialties"
            },
            {
                "key": "agenttype",
                "type": "java.lang.Byte",
                "name": "Agent Type",
                "desc": "Discriminator between Organization(0), Person(1), Other(2), and Group(3)."
            },
            {
                "key": "collcontentcontact",
                "type": null,
                "name": "Coll Content Contact",
                "desc": "Coll Content Contact"
            },
            {
                "key": "collectors",
                "type": "OneToMany",
                "name": "Collectors",
                "desc": "Collectors"
            },
            {
                "key": "colltechcontact",
                "type": null,
                "name": "Coll Tech Contact",
                "desc": "Coll Tech Contact"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "date1",
                "type": null,
                "name": "Date1",
                "desc": "Date1"
            },
            {
                "key": "date1precision",
                "type": null,
                "name": "Date1 Precision",
                "desc": "Date1 Precision"
            },
            {
                "key": "date2",
                "type": null,
                "name": "Date2",
                "desc": "Date2"
            },
            {
                "key": "date2precision",
                "type": null,
                "name": "Date2 Precision",
                "desc": "Date2 Precision"
            },
            {
                "key": "dateofbirth",
                "type": null,
                "name": "Date Of Birth",
                "desc": "Date agent was born."
            },
            {
                "key": "dateofbirthprecision",
                "type": null,
                "name": "Date Of Birth Precision",
                "desc": "Date Of Birth Precision"
            },
            {
                "key": "dateofdeath",
                "type": null,
                "name": "Date Of Death",
                "desc": "Date Of Death"
            },
            {
                "key": "dateofdeathprecision",
                "type": null,
                "name": "Date Of Death Precision",
                "desc": "Date Of Death Precision"
            },
            {
                "key": "datetype",
                "type": null,
                "name": "Date Type",
                "desc": "Date Type"
            },
            {
                "key": "division",
                "type": null,
                "name": "Division",
                "desc": "The division the agent belongs to (optional)."
            },
            {
                "key": "email",
                "type": "java.lang.String",
                "name": "Email",
                "desc": "Email address for agent."
            },
            {
                "key": "firstname",
                "type": "java.lang.String",
                "name": "First Name",
                "desc": "First name of agent."
            },
            {
                "key": "groups",
                "type": "OneToMany",
                "name": "Members",
                "desc": "Members"
            },
            {
                "key": "guid",
                "type": "java.lang.String",
                "name": "GUID",
                "desc": "Global Unique Identifier."
            },
            {
                "key": "identifiers",
                "type": null,
                "name": "Identifiers",
                "desc": "Identifiers of the Agent. e.g. ORCID"
            },
            {
                "key": "initials",
                "type": null,
                "name": "Initials",
                "desc": "Initials of agent."
            },
            {
                "key": "instcontentcontact",
                "type": "ManyToOne",
                "name": "Inst Content Contact",
                "desc": "Inst Content Contact"
            },
            {
                "key": "insttechcontact",
                "type": "ManyToOne",
                "name": "Inst Tech Contact",
                "desc": "Inst Tech Contact"
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "interests",
                "type": "java.lang.String",
                "name": "Interests",
                "desc": "Interests of Person or Organization."
            },
            {
                "key": "jobtitle",
                "type": "java.lang.String",
                "name": "Job Title",
                "desc": "Agent`s (person) job title at the specified address and organization."
            },
            {
                "key": "lastname",
                "type": "java.lang.String",
                "name": "Last Name",
                "desc": "Last name of Person."
            },
            {
                "key": "members",
                "type": "OneToMany",
                "name": "Members",
                "desc": "Members"
            },
            {
                "key": "middleinitial",
                "type": "java.lang.String",
                "name": "Middle Initial",
                "desc": "Middle initial of Person."
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "organization",
                "type": null,
                "name": "Organization",
                "desc": "Organization"
            },
            {
                "key": "orgmembers",
                "type": null,
                "name": "Org Members",
                "desc": "Org Members"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional comments."
            },
            {
                "key": "specifyuser",
                "type": null,
                "name": "Specify User",
                "desc": "Specify User"
            },
            {
                "key": "suffix",
                "type": null,
                "name": "Suffix",
                "desc": "Suffix"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Text3",
                "desc": "Text3"
            },
            {
                "key": "text4",
                "type": null,
                "name": "Text4",
                "desc": "Text4"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Collection",
                "desc": "The collection to which the agent belongs, denoted by a shorthand code."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "title",
                "type": "java.lang.String",
                "name": "Title",
                "desc": "Title of Person."
            },
            {
                "key": "url",
                "type": "java.lang.String",
                "name": "URL",
                "desc": "A URL for the web site of a Person or Group."
            },
            {
                "key": "variants",
                "type": null,
                "name": "Variants",
                "desc": "Variants"
            },
            {
                "key": "verbatimdate1",
                "type": null,
                "name": "Verbatim Date1",
                "desc": "Verbatim Date1"
            },
            {
                "key": "verbatimdate2",
                "type": null,
                "name": "Verbatim Date2",
                "desc": "Verbatim Date2"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "agentattachment",
        "name": "Agent Attachment",
        "desc": "This table can be used for a picture of the agent or anything else used to further describe the agent.",
        "items": [
            {
                "key": "agent",
                "type": "ManyToOne",
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "attachment",
                "type": "ManyToOne",
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": "java.lang.Integer",
                "name": "Ordinal",
                "desc": "This allows the attachments to be ordered."
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional comments."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "agentgeography",
        "name": "Agent Geography",
        "desc": "The geographical region that a particular collector was known for collecting in.",
        "items": [
            {
                "key": "agent",
                "type": null,
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "geography",
                "type": null,
                "name": "Geography",
                "desc": "The geographical region of specialization"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified by Agent",
                "desc": "Modified by Agent"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Additional comments."
            },
            {
                "key": "role",
                "type": null,
                "name": "Role",
                "desc": "Role of the agent as \"author\" or \"collector\" within the geography."
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "agentidentifier",
        "name": "Agent Identifier",
        "desc": "Describes an identifier of an Agent such an as ORCID.",
        "items": [
            {
                "key": "agent",
                "type": "ManyToOne",
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "date1",
                "type": null,
                "name": "Date1",
                "desc": "Date1"
            },
            {
                "key": "date1precision",
                "type": null,
                "name": "Date1 Precision",
                "desc": "date1Precision"
            },
            {
                "key": "date2",
                "type": null,
                "name": "Date2",
                "desc": "Date2"
            },
            {
                "key": "date2precision",
                "type": null,
                "name": "Date2 Precision",
                "desc": "date2Precision"
            },
            {
                "key": "identifier",
                "type": "java.lang.String",
                "name": "Identifier",
                "desc": "Identifier"
            },
            {
                "key": "identifiertype",
                "type": "java.lang.String",
                "name": "Identifier Type",
                "desc": "Identifier Type (e.g. ORCID)"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable."
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "User definable."
            },
            {
                "key": "text3",
                "type": "java.lang.String",
                "name": "Text3",
                "desc": "User definable."
            },
            {
                "key": "text4",
                "type": "java.lang.String",
                "name": "Text4",
                "desc": "User definable."
            },
            {
                "key": "text5",
                "type": "java.lang.String",
                "name": "Text5",
                "desc": "User definable."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "Yes No1",
                "desc": "User definable"
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "Yes No2",
                "desc": "User definable"
            },
            {
                "key": "yesno3",
                "type": "java.lang.Boolean",
                "name": "Yes No3",
                "desc": "User definable"
            },
            {
                "key": "yesno4",
                "type": "java.lang.Boolean",
                "name": "Yes No4",
                "desc": "User definable"
            },
            {
                "key": "yesno5",
                "type": "java.lang.Boolean",
                "name": "Yes No5",
                "desc": "User definable"
            }
        ]
    },
    {
        "table": "agentspecialty",
        "name": "Agent Specialty",
        "desc": "The Taxonomic specialty that a particular agent was known for.",
        "items": [
            {
                "key": "agent",
                "type": null,
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordernumber",
                "type": null,
                "name": "Order Number",
                "desc": "The priority of specialization, for agents with primary and secondary areas of specialization."
            },
            {
                "key": "specialtyname",
                "type": null,
                "name": "Specialty Name",
                "desc": "The name of the field of specialization."
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "agentvariant",
        "name": "Agent Variant",
        "desc": "This is primarily used by Botanists for capturing Variant and Vernacular names. This table is searchable but does not have any specific business rules associated with it.",
        "items": [
            {
                "key": "agent",
                "type": "ManyToOne",
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "country",
                "type": null,
                "name": "Country",
                "desc": "Country of variant or vernacular name."
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "language",
                "type": null,
                "name": "Language",
                "desc": "International character code for language as it pertains to the agent variant."
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "The full name used as a variant or vernacular name."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "variant",
                "type": null,
                "name": "Variant",
                "desc": "Variant"
            },
            {
                "key": "vartype",
                "type": "java.lang.Byte",
                "name": "Var Type",
                "desc": "Indicates whether the record is a variant (0) or a vernacular name (1)."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "appraisal",
        "name": "Appraisal",
        "desc": "The monetary appraisal of an Acession or Collection Object",
        "items": [
            {
                "key": "accession",
                "type": null,
                "name": "Accession",
                "desc": "Accession"
            },
            {
                "key": "agent",
                "type": null,
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "appraisaldate",
                "type": null,
                "name": "Appraisal Date",
                "desc": "Date of the appraisal."
            },
            {
                "key": "appraisalnumber",
                "type": null,
                "name": "Appraisal Number",
                "desc": "Unique number for the appraisal."
            },
            {
                "key": "appraisalvalue",
                "type": null,
                "name": "Appraisal Value",
                "desc": "Monetary value of the appraisal."
            },
            {
                "key": "collectionobjects",
                "type": null,
                "name": "Collection Objects",
                "desc": "Collection Objects"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "monetaryunittype",
                "type": null,
                "name": "Monetary Unit Type",
                "desc": "Type of monetary unit."
            },
            {
                "key": "notes",
                "type": null,
                "name": "Notes",
                "desc": "Additional comments."
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "attachment",
        "name": "Attachment",
        "desc": "The information in this record identifies everything the application will need to load and display the attachment. The attachment location is an absolute path to the file. The file itself is not stored in the database.",
        "items": [
            {
                "key": "accessionattachments",
                "type": "OneToMany",
                "name": "Accession Attachments",
                "desc": "Accession Attachments"
            },
            {
                "key": "agentattachments",
                "type": "OneToMany",
                "name": "Agent Attachments",
                "desc": "Agent Attachments"
            },
            {
                "key": "attachmentimageattribute",
                "type": null,
                "name": "Attachment Image Attribute",
                "desc": "Attachment Image Attribute"
            },
            {
                "key": "attachmentlocation",
                "type": null,
                "name": "Attachment Location",
                "desc": "Location of attachment repository."
            },
            {
                "key": "attachmentstorageconfig",
                "type": null,
                "name": "Attachment Storage Config",
                "desc": "Attachment Storage Config"
            },
            {
                "key": "borrowattachments",
                "type": null,
                "name": "Borrow Attachments",
                "desc": "Borrow Attachments"
            },
            {
                "key": "capturedevice",
                "type": null,
                "name": "Capture Device",
                "desc": "Capture Device"
            },
            {
                "key": "collectingeventattachments",
                "type": "OneToMany",
                "name": "Collecting Event Attachments",
                "desc": "Collecting Event Attachments"
            },
            {
                "key": "collectingtripattachments",
                "type": null,
                "name": "Collecting Trip Attachments",
                "desc": "Collecting Trip Attachments"
            },
            {
                "key": "collectionobjectattachments",
                "type": "OneToMany",
                "name": "Collection Object Attachments",
                "desc": "Collection Object Attachments"
            },
            {
                "key": "conservdescriptionattachments",
                "type": "OneToMany",
                "name": "Conserv Description Attachments",
                "desc": "Conserv Description Attachments"
            },
            {
                "key": "conserveventattachments",
                "type": "OneToMany",
                "name": "Conserv Event Attachments",
                "desc": "Conserv Event Attachments"
            },
            {
                "key": "copyrightdate",
                "type": null,
                "name": "Copyright Date",
                "desc": "Date of the copyright of attachment."
            },
            {
                "key": "copyrightholder",
                "type": null,
                "name": "Copyright Holder",
                "desc": "Copyright Holder"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "creator",
                "type": null,
                "name": "Creator",
                "desc": "Creator"
            },
            {
                "key": "credit",
                "type": null,
                "name": "Credit",
                "desc": "Attachment credit."
            },
            {
                "key": "dateimaged",
                "type": null,
                "name": "Date Imaged",
                "desc": "Date Imaged"
            },
            {
                "key": "deaccessionattachments",
                "type": null,
                "name": "Deaccession Attachments",
                "desc": "Deaccession Attachments"
            },
            {
                "key": "disposalattachments",
                "type": null,
                "name": "Disposal Attachments",
                "desc": "Disposal Attachments"
            },
            {
                "key": "dnasequenceattachments",
                "type": null,
                "name": "DNA Sequence Attachments",
                "desc": "DNA Sequence Attachments"
            },
            {
                "key": "dnasequencingrunattachments",
                "type": null,
                "name": "DNA Sequencing Run Attachments",
                "desc": "DNA Sequencing Run Attachments"
            },
            {
                "key": "exchangeinattachments",
                "type": null,
                "name": "Exchange In Attachments",
                "desc": "exchangeInAttachments"
            },
            {
                "key": "exchangeoutattachments",
                "type": null,
                "name": "Exchange Out Attachments",
                "desc": "exchangeOutAttachments"
            },
            {
                "key": "fieldnotebookattachments",
                "type": null,
                "name": "Field Notebook Attachments",
                "desc": "Field Notebook Attachments"
            },
            {
                "key": "fieldnotebookpageattachments",
                "type": null,
                "name": "Field Notebook Page Attachments",
                "desc": "Field Notebook Page Attachments"
            },
            {
                "key": "fieldnotebookpagesetattachments",
                "type": null,
                "name": "Field Notebook Page Set Attachments",
                "desc": "Field Notebook Page Set Attachments"
            },
            {
                "key": "filecreateddate",
                "type": "java.util.Calendar",
                "name": "File Created Date",
                "desc": "File Created Date"
            },
            {
                "key": "giftattachments",
                "type": null,
                "name": "Gift Attachments",
                "desc": "Gift Attachments"
            },
            {
                "key": "guid",
                "type": null,
                "name": "GUID",
                "desc": "GUID"
            },
            {
                "key": "ispublic",
                "type": null,
                "name": "Is Public",
                "desc": "Is Public"
            },
            {
                "key": "license",
                "type": null,
                "name": "License",
                "desc": "Attachment license information."
            },
            {
                "key": "licenselogourl",
                "type": null,
                "name": "License Logo URL",
                "desc": "License Logo URL"
            },
            {
                "key": "loanattachments",
                "type": "OneToMany",
                "name": "Loan Attachments",
                "desc": "Loan Attachments"
            },
            {
                "key": "localityattachments",
                "type": "OneToMany",
                "name": "Locality Attachments",
                "desc": "Locality Attachments"
            },
            {
                "key": "metadata",
                "type": "OneToMany",
                "name": "Metadata",
                "desc": "Metadata"
            },
            {
                "key": "metadatatext",
                "type": null,
                "name": "Metadata Text",
                "desc": "Metadata Text"
            },
            {
                "key": "mimetype",
                "type": "java.lang.String",
                "name": "Mime Type",
                "desc": "Describes the attachment file type."
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "origfilename",
                "type": "java.lang.String",
                "name": "Original Filename",
                "desc": "Original name of file."
            },
            {
                "key": "permitattachments",
                "type": "OneToMany",
                "name": "Permit Attachments",
                "desc": "Permit Attachments"
            },
            {
                "key": "preparationattachments",
                "type": "OneToMany",
                "name": "Preparation Attachments",
                "desc": "Preparation Attachments"
            },
            {
                "key": "referenceworkattachments",
                "type": null,
                "name": "Reference Work Attachments",
                "desc": "Reference Work Attachments"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional comments."
            },
            {
                "key": "repositoryagreementattachments",
                "type": "OneToMany",
                "name": "Repository Agreement Attachments",
                "desc": "Repository Agreement Attachments"
            },
            {
                "key": "scopeid",
                "type": null,
                "name": "Scope ID",
                "desc": "Scope ID"
            },
            {
                "key": "scopetype",
                "type": null,
                "name": "Scope Type",
                "desc": "Scope Type"
            },
            {
                "key": "storageattachments",
                "type": null,
                "name": "Storage Attachments",
                "desc": "Storage Attachments"
            },
            {
                "key": "subjectorientation",
                "type": null,
                "name": "Subject Orientation",
                "desc": "Subject Orientation"
            },
            {
                "key": "subtype",
                "type": null,
                "name": "Subtype",
                "desc": "Subtype"
            },
            {
                "key": "tableid",
                "type": null,
                "name": "Table ID",
                "desc": "Table ID"
            },
            {
                "key": "tags",
                "type": null,
                "name": "Tags",
                "desc": "User-defined keywords for attachments."
            },
            {
                "key": "taxonattachments",
                "type": "OneToMany",
                "name": "Taxon Attachments",
                "desc": "Taxon Attachments"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "title",
                "type": null,
                "name": "Title",
                "desc": "Title of attachment."
            },
            {
                "key": "treatmenteventattachments",
                "type": null,
                "name": "Treatment Event Attachments",
                "desc": "Treatment Event Attachments"
            },
            {
                "key": "type",
                "type": null,
                "name": "Type",
                "desc": "Type"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "visibility",
                "type": "java.lang.Integer",
                "name": "Visibility",
                "desc": "Visibility"
            },
            {
                "key": "visibilitysetby",
                "type": "java.lang.String",
                "name": "Visibility Set By",
                "desc": "Visibility Set By"
            }
        ]
    },
    {
        "table": "attachmentimageattribute",
        "name": "Attachment Image Attribute",
        "desc": "Attachment Image Attribute",
        "items": [
            {
                "key": "attachments",
                "type": null,
                "name": "Attachments",
                "desc": "Attachments"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "creativecommons",
                "type": null,
                "name": "Creative Commons",
                "desc": "Creative Commons"
            },
            {
                "key": "height",
                "type": null,
                "name": "Height",
                "desc": "Height"
            },
            {
                "key": "imagetype",
                "type": null,
                "name": "Image Type",
                "desc": "Image Type"
            },
            {
                "key": "magnification",
                "type": null,
                "name": "Magnification",
                "desc": "Magnification"
            },
            {
                "key": "mbimageid",
                "type": null,
                "name": "Mb Image Id",
                "desc": "Mb Image Id"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "morphbankview",
                "type": null,
                "name": "Morph Bank View",
                "desc": "Morph Bank View"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "resolution",
                "type": null,
                "name": "Resolution",
                "desc": "Resolution"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestamplastsend",
                "type": null,
                "name": "Timestamp Last Send",
                "desc": "Timestamp Last Send"
            },
            {
                "key": "timestamplastupdatecheck",
                "type": null,
                "name": "Timestamp Last Update Check",
                "desc": "Timestamp Last Update Check"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "viewdescription",
                "type": null,
                "name": "View Description",
                "desc": "View Description"
            },
            {
                "key": "width",
                "type": null,
                "name": "Width",
                "desc": "Width"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            }
        ]
    },
    {
        "table": "attachmentmetadata",
        "name": "Attachment Metadata",
        "desc": "This holds metadata about the attachment. It is a set of named value pairs.",
        "items": [
            {
                "key": "attachment",
                "type": "ManyToOne",
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "The name of the metadata field."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "value",
                "type": "java.lang.String",
                "name": "Value",
                "desc": "The value of the metadata field."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "attachmenttag",
        "name": "Attachment Tag",
        "desc": "An attribute tag of an attachment. This consists of a single text field for storing a tag. In later versions, users will be allowed to search attachments by their tag.",
        "items": [
            {
                "key": "attachment",
                "type": null,
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "tag",
                "type": null,
                "name": "Tag",
                "desc": "Name of tag."
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "attributedef",
        "name": "Attribute Definition",
        "desc": "The definition of an attribute.",
        "items": [
            {
                "key": "collectingeventattrs",
                "type": "OneToMany",
                "name": "Collecting Event Attrs",
                "desc": "Collecting Event Attrs"
            },
            {
                "key": "collectionobjectattrs",
                "type": "OneToMany",
                "name": "Collection Object Attrs",
                "desc": "Collection Object Attrs"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "datatype",
                "type": "java.lang.Short",
                "name": "Data Type",
                "desc": "The data type of the attribute."
            },
            {
                "key": "discipline",
                "type": "ManyToOne",
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "fieldname",
                "type": "java.lang.String",
                "name": "Field Name",
                "desc": "The field name of the attribute."
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "preparationattrs",
                "type": "OneToMany",
                "name": "Preparation Attrs",
                "desc": "Preparation Attrs"
            },
            {
                "key": "preptype",
                "type": "ManyToOne",
                "name": "Prep Type",
                "desc": "Prep Type"
            },
            {
                "key": "tabletype",
                "type": "java.lang.Short",
                "name": "Table Type",
                "desc": "The type of table it is attached to, this is internal to Specify."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "author",
        "name": "Author",
        "desc": "An Author is a reference to an Agent and provides the order for a list of authors of a Reference Work.",
        "items": [
            {
                "key": "agent",
                "type": "ManyToOne",
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordernumber",
                "type": "java.lang.Short",
                "name": "Order Number",
                "desc": "the order of AgentID relative to other authors of reference."
            },
            {
                "key": "referencework",
                "type": "ManyToOne",
                "name": "Reference Work",
                "desc": "Reference Work"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional comments."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "autonumberingscheme",
        "name": "Auto Numbering Scheme",
        "desc": "This is an internal table used to group parts of a collection with the same numbering scheme.",
        "items": [
            {
                "key": "collections",
                "type": null,
                "name": "Collections",
                "desc": "Collections"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "disciplines",
                "type": null,
                "name": "Disciplines",
                "desc": "Disciplines"
            },
            {
                "key": "divisions",
                "type": null,
                "name": "Divisions",
                "desc": "Divisions"
            },
            {
                "key": "formatname",
                "type": null,
                "name": "Format Name",
                "desc": "Format Name"
            },
            {
                "key": "isnumericonly",
                "type": null,
                "name": "Is Numeric Only",
                "desc": "Yes if number scheme is only numeric."
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "schemeclassname",
                "type": null,
                "name": "Schema Class Name",
                "desc": "Schema Class Name"
            },
            {
                "key": "schemename",
                "type": null,
                "name": "Schema Name",
                "desc": "Name of the scheme (sequence)."
            },
            {
                "key": "tablenumber",
                "type": null,
                "name": "Table Number",
                "desc": "Table Number"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "borrow",
        "name": "Borrow",
        "desc": "Contains information about loans from another institution. When one institution borrows a group of objects from another institution, all objects in the borrowed group share a common set of attributes that are defined for the loan.",
        "items": [
            {
                "key": "addressofrecord",
                "type": null,
                "name": "Address Of Record",
                "desc": "Address Of Record"
            },
            {
                "key": "borrowagents",
                "type": "OneToMany",
                "name": "Borrow Agents",
                "desc": "Borrow Agents"
            },
            {
                "key": "borrowattachments",
                "type": null,
                "name": "Borrow Attachments",
                "desc": "Borrow Attachments"
            },
            {
                "key": "borrowdate",
                "type": null,
                "name": "Borrow Date",
                "desc": "Borrow Date"
            },
            {
                "key": "borrowdateprecision",
                "type": null,
                "name": "Borrow Date Precision",
                "desc": "Borrow Date Precision"
            },
            {
                "key": "borrowmaterials",
                "type": "OneToMany",
                "name": "Borrow Materials",
                "desc": "Borrow Materials"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "currentduedate",
                "type": "java.util.Calendar",
                "name": "Current Due Date",
                "desc": "Date loan is currently due. (Same as Original Due Date unless loan period has been extended)"
            },
            {
                "key": "dateclosed",
                "type": "java.util.Calendar",
                "name": "Date Closed",
                "desc": "Date loan was closed."
            },
            {
                "key": "invoicenumber",
                "type": "java.lang.String",
                "name": "Invoice Number",
                "desc": "Lender`s loan number."
            },
            {
                "key": "isclosed",
                "type": "java.lang.Boolean",
                "name": "Is Closed",
                "desc": "Indicates whether the borrow was closed (returned)."
            },
            {
                "key": "isfinancialresponsibility",
                "type": null,
                "name": "Is Financial Responsibility",
                "desc": "Is Financial Responsibility"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": "java.lang.Float",
                "name": "Number1",
                "desc": "User definable."
            },
            {
                "key": "number2",
                "type": "java.lang.Float",
                "name": "Number2",
                "desc": "User definable."
            },
            {
                "key": "numberofitemsborrowed",
                "type": null,
                "name": "Number Of Items Borrowed",
                "desc": "Number Of Items Borrowed"
            },
            {
                "key": "originalduedate",
                "type": "java.util.Calendar",
                "name": "Original Due Date",
                "desc": "Original due date for loan."
            },
            {
                "key": "receiveddate",
                "type": "java.util.Calendar",
                "name": "Received Date",
                "desc": "Date material was received."
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional comments."
            },
            {
                "key": "shipments",
                "type": "ManyToMany",
                "name": "Shipments",
                "desc": "Shipments"
            },
            {
                "key": "status",
                "type": null,
                "name": "Status",
                "desc": "Status"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable."
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "User definable."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "Extension Granted",
                "desc": "User definable."
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "Yes No2",
                "desc": "User definable."
            }
        ]
    },
    {
        "table": "borrowagent",
        "name": "Borrow Agent",
        "desc": "Refers to an Agent and describes their role in the borrowing process.",
        "items": [
            {
                "key": "agent",
                "type": "ManyToOne",
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "borrow",
                "type": "ManyToOne",
                "name": "Borrow",
                "desc": "ID of borrow in which Agent played role."
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional comments."
            },
            {
                "key": "role",
                "type": "java.lang.String",
                "name": "Role",
                "desc": "Role played by agent in the borrow."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "borrowattachment",
        "name": "Borrow Attachment",
        "desc": "Borrow Attachment",
        "items": [
            {
                "key": "attachment",
                "type": null,
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "borrow",
                "type": null,
                "name": "Borrow",
                "desc": "Borrow"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "borrowmaterial",
        "name": "Borrow Material",
        "desc": "Describes the material being borrowed.",
        "items": [
            {
                "key": "borrow",
                "type": "ManyToOne",
                "name": "Borrow",
                "desc": "ID of the borrow containing the prep."
            },
            {
                "key": "borrowreturnmaterials",
                "type": "OneToMany",
                "name": "Borrow Return Materials",
                "desc": "Borrow Return Materials"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "description",
                "type": "java.lang.String",
                "name": "Description",
                "desc": "Description of the material. `e.g. Bufo bufo skull`."
            },
            {
                "key": "incomments",
                "type": "text",
                "name": "In Comments",
                "desc": "Notes concerning the receipt of the material."
            },
            {
                "key": "materialnumber",
                "type": "java.lang.String",
                "name": "Material Number",
                "desc": "e.g. `FMNH 223456`"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "outcomments",
                "type": "text",
                "name": "Out Comments",
                "desc": "Notes concerning the return of the material."
            },
            {
                "key": "quantity",
                "type": "java.lang.Short",
                "name": "Quantity",
                "desc": "Number of specimens (for lots)."
            },
            {
                "key": "quantityresolved",
                "type": "java.lang.Short",
                "name": "Quantity Resolved",
                "desc": "Quantity resolved (Returned, Accessioned, Lost, Discarded, Destroyed ...)."
            },
            {
                "key": "quantityreturned",
                "type": "java.lang.Short",
                "name": "Quantity Returned",
                "desc": "Quantity returned."
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "borrowreturnmaterial",
        "name": "Borrow Return Material",
        "desc": "Describes the material that was returned.",
        "items": [
            {
                "key": "agent",
                "type": "ManyToOne",
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "borrowmaterial",
                "type": "ManyToOne",
                "name": "Borrow Material",
                "desc": "Borrowed preparation returned."
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "quantity",
                "type": "java.lang.Short",
                "name": "Quantity",
                "desc": "Quantity of preparations returned."
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional comments."
            },
            {
                "key": "returneddate",
                "type": "java.util.Calendar",
                "name": "Returned Date",
                "desc": "The date the material was returned."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "collectingevent",
        "name": "Collecting Information",
        "desc": "A collecting event is a place and time that a collection is made. In some disciplines, a field number is used as the primary designation for place and time information, while in others, locality name and date are used to link specimens.",
        "items": [
            {
                "key": "collectingeventattachments",
                "type": "OneToMany",
                "name": "Collecting Event Attachments",
                "desc": "Collecting Event Attachments"
            },
            {
                "key": "collectingeventattribute",
                "type": "ManyToOne",
                "name": "Collecting Event Additional Verbatim",
                "desc": "Collecting Event Attribute"
            },
            {
                "key": "collectingeventattrs",
                "type": "OneToMany",
                "name": "Collecting Event Attrs",
                "desc": "Collecting Event Attrs"
            },
            {
                "key": "collectingeventauthorizations",
                "type": null,
                "name": "Collecting Event Authorizations",
                "desc": "Collecting Event Authorizations"
            },
            {
                "key": "collectingtrip",
                "type": "ManyToOne",
                "name": "Collecting Trip",
                "desc": "Collecting Trip"
            },
            {
                "key": "collectionobjects",
                "type": "OneToMany",
                "name": "Collection Objects",
                "desc": "Collection Objects"
            },
            {
                "key": "collectors",
                "type": "OneToMany",
                "name": "Collectors",
                "desc": "Collectors"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "enddate",
                "type": "java.util.Calendar",
                "name": "Date Collected",
                "desc": "Date of collection formatted as numeric date"
            },
            {
                "key": "enddateprecision",
                "type": "java.lang.Short",
                "name": "End Date Precision",
                "desc": "End Date Precision"
            },
            {
                "key": "enddateverbatim",
                "type": "java.lang.String",
                "name": "End Date Verbatim",
                "desc": "End Date Verbatim"
            },
            {
                "key": "endtime",
                "type": "java.lang.Short",
                "name": "End Time",
                "desc": "End time in military format."
            },
            {
                "key": "guid",
                "type": null,
                "name": "GUID",
                "desc": "GUID"
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "locality",
                "type": "ManyToOne",
                "name": "Locality",
                "desc": "Locality where collection took place."
            },
            {
                "key": "method",
                "type": "java.lang.String",
                "name": "Method",
                "desc": "A method, such as net or trap, which is used to obtain the specimen."
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "paleocontext",
                "type": null,
                "name": "Paleo Context",
                "desc": "Paleo Context"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Habitat",
                "desc": "The habitat or environmental conditions where the specimen was growing. Included are any associated species, community types, aspect/slope, light level, host substratum, depth below water, etc"
            },
            {
                "key": "reservedinteger3",
                "type": null,
                "name": "Reserved Integer3",
                "desc": "Reserved Integer3"
            },
            {
                "key": "reservedinteger4",
                "type": null,
                "name": "Reserved Integer4",
                "desc": "Reserved Integer4"
            },
            {
                "key": "reservedtext1",
                "type": null,
                "name": "Reserved Text1",
                "desc": "Reserved Text1"
            },
            {
                "key": "reservedtext2",
                "type": null,
                "name": "Reserved Text2",
                "desc": "Reserved Text2"
            },
            {
                "key": "sgrstatus",
                "type": null,
                "name": "Sgr Status",
                "desc": "Sgr Status"
            },
            {
                "key": "startdate",
                "type": "java.util.Calendar",
                "name": "Start Date",
                "desc": "The date collecting event began."
            },
            {
                "key": "startdateprecision",
                "type": "java.lang.Short",
                "name": "Start Date Precision",
                "desc": "Start Date Precision"
            },
            {
                "key": "startdateverbatim",
                "type": "java.lang.String",
                "name": "Start Date Verbatim",
                "desc": "Start Date Verbatim"
            },
            {
                "key": "starttime",
                "type": "java.lang.Short",
                "name": "Start Time",
                "desc": "Start time in military format."
            },
            {
                "key": "stationfieldnumber",
                "type": "java.lang.String",
                "name": "Collector Number",
                "desc": "The collector's number for the specimen"
            },
            {
                "key": "stationfieldnumbermodifier1",
                "type": null,
                "name": "Station Field Number Modifier1",
                "desc": "Station Field Number Modifier1"
            },
            {
                "key": "stationfieldnumbermodifier2",
                "type": null,
                "name": "Station Field Number Modifier2",
                "desc": "Station Field Number Modifier2"
            },
            {
                "key": "stationfieldnumbermodifier3",
                "type": null,
                "name": "Station Field Number Modifier3",
                "desc": "Station Field Number Modifier3"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Collector Number Only",
                "desc": "Collector Number Only"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Field Observations",
                "desc": "Any observations or notes from the original collection information that does not fit into Locality or Habitat, e.g. about the plant's characteristics"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Verbatim Date Collected",
                "desc": "Date the specimen was collected exactly as written on the label"
            },
            {
                "key": "text4",
                "type": null,
                "name": "Microhabitat",
                "desc": "(Algae Only) The microhabitat within the habitat or environmental conditions where the specimen was growing"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Collector Verbatim",
                "desc": "Collector Verbatim"
            },
            {
                "key": "text6",
                "type": null,
                "name": "Verbatim Latitude",
                "desc": "Verbatim latitude"
            },
            {
                "key": "text7",
                "type": null,
                "name": "Verbatim Longitude",
                "desc": "Verbatim longitude"
            },
            {
                "key": "text8",
                "type": null,
                "name": "Verbatim Elevation",
                "desc": "Verbatim elevation, e.g. in m, ft, etc"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "uniqueidentifier",
                "type": null,
                "name": "Unique Identifier",
                "desc": "Unique Identifier"
            },
            {
                "key": "verbatimdate",
                "type": "java.lang.String",
                "name": "Date Collected Verbatim",
                "desc": "Date which collector recorded in a field book, exactly as reported by the collector. It should indicate whether reported as a range, season, month, etc."
            },
            {
                "key": "verbatimlocality",
                "type": "text",
                "name": "Verbatim Locality",
                "desc": "Original statement (literal quotation) of the location of the Collecting Event as given by the Collector"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "visibility",
                "type": "java.lang.Integer",
                "name": "Visibility",
                "desc": "Visibility"
            },
            {
                "key": "visibilitysetby",
                "type": "java.lang.String",
                "name": "Visibility Set By",
                "desc": "Visibility Set By"
            }
        ]
    },
    {
        "table": "collectingeventattachment",
        "name": "Collecting Event Attachment",
        "desc": "Refers to an attachment and provides an order.",
        "items": [
            {
                "key": "attachment",
                "type": "ManyToOne",
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "collectingevent",
                "type": "ManyToOne",
                "name": "Collecting Information",
                "desc": "Collecting Event"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": "java.lang.Integer",
                "name": "Ordinal",
                "desc": "The order or position of the attachment."
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional comments."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "collectingeventattr",
        "name": "Collecting Event Attribute",
        "desc": "Extensible attributes introduced for Specify 6.",
        "items": [
            {
                "key": "collectingevent",
                "type": "ManyToOne",
                "name": "Collecting Information",
                "desc": "Collecting Event"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "dblvalue",
                "type": "java.lang.Double",
                "name": "Double Value",
                "desc": "Double Value"
            },
            {
                "key": "definition",
                "type": "ManyToOne",
                "name": "Definition",
                "desc": "Definition"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "strvalue",
                "type": "java.lang.String",
                "name": "String Value",
                "desc": "String Value"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "collectingeventattribute",
        "name": "Collecting Event Attribute",
        "desc": "Collecting Event Attributes that were also available in Specify 5.",
        "items": [
            {
                "key": "collectingevents",
                "type": null,
                "name": "Collecting Events",
                "desc": "Collecting Events"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "hosttaxon",
                "type": null,
                "name": "Host Taxon",
                "desc": "Host Taxon"
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer10",
                "type": null,
                "name": "Integer10",
                "desc": "Integer10"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "integer3",
                "type": null,
                "name": "Integer3",
                "desc": "Integer3"
            },
            {
                "key": "integer4",
                "type": null,
                "name": "Integer4",
                "desc": "Integer4"
            },
            {
                "key": "integer5",
                "type": null,
                "name": "Integer5",
                "desc": "Integer5"
            },
            {
                "key": "integer6",
                "type": null,
                "name": "Integer6",
                "desc": "Integer6"
            },
            {
                "key": "integer7",
                "type": null,
                "name": "Integer7",
                "desc": "Integer7"
            },
            {
                "key": "integer8",
                "type": null,
                "name": "Integer8",
                "desc": "Integer8"
            },
            {
                "key": "integer9",
                "type": null,
                "name": "Integer9",
                "desc": "Integer9"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number10",
                "type": null,
                "name": "Number10",
                "desc": "Number10"
            },
            {
                "key": "number11",
                "type": null,
                "name": "Number11",
                "desc": "Number11"
            },
            {
                "key": "number12",
                "type": null,
                "name": "Number12",
                "desc": "Number12"
            },
            {
                "key": "number13",
                "type": null,
                "name": "Number13",
                "desc": "Number13"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "number3",
                "type": null,
                "name": "Number3",
                "desc": "Number3"
            },
            {
                "key": "number4",
                "type": null,
                "name": "Number4",
                "desc": "Number4"
            },
            {
                "key": "number5",
                "type": null,
                "name": "Number5",
                "desc": "Number5"
            },
            {
                "key": "number6",
                "type": null,
                "name": "Number6",
                "desc": "Number6"
            },
            {
                "key": "number7",
                "type": null,
                "name": "Number7",
                "desc": "Number7"
            },
            {
                "key": "number8",
                "type": null,
                "name": "Number8",
                "desc": "Number8"
            },
            {
                "key": "number9",
                "type": null,
                "name": "Number9",
                "desc": "Number9"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text10",
                "type": null,
                "name": "Grid Reference Verbatim",
                "desc": "Grid reference verbatim"
            },
            {
                "key": "text11",
                "type": null,
                "name": "UTM Verbatim",
                "desc": "UTM verbatim"
            },
            {
                "key": "text12",
                "type": null,
                "name": "Verbatim Coordinate Uncertainty",
                "desc": "Verbatim coordinate uncertainty"
            },
            {
                "key": "text13",
                "type": null,
                "name": "Verbatim Coordinate Uncertainty Unit",
                "desc": "Verbatim coordinate uncertainty unit"
            },
            {
                "key": "text14",
                "type": null,
                "name": "Verbatim Datum",
                "desc": "Verbatim datum"
            },
            {
                "key": "text15",
                "type": null,
                "name": "Geo Reference Columns (Legacy Data)",
                "desc": "Legacy georeference data "
            },
            {
                "key": "text16",
                "type": null,
                "name": "Text16",
                "desc": "Text16"
            },
            {
                "key": "text17",
                "type": null,
                "name": "Text17",
                "desc": "Text17"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Text3",
                "desc": "Text3"
            },
            {
                "key": "text4",
                "type": null,
                "name": "Text4",
                "desc": "Text4"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Text5",
                "desc": "Text5"
            },
            {
                "key": "text6",
                "type": null,
                "name": "Text6",
                "desc": "Text6"
            },
            {
                "key": "text7",
                "type": null,
                "name": "Text7",
                "desc": "Text7"
            },
            {
                "key": "text8",
                "type": null,
                "name": "Text8",
                "desc": "Text8"
            },
            {
                "key": "text9",
                "type": null,
                "name": "Verbatim Depth",
                "desc": "Verbatim Depth"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            },
            {
                "key": "yesno3",
                "type": null,
                "name": "Yes No3",
                "desc": "Yes No3"
            },
            {
                "key": "yesno4",
                "type": null,
                "name": "Yes No4",
                "desc": "Yes No4"
            },
            {
                "key": "yesno5",
                "type": null,
                "name": "Yes No5",
                "desc": "Yes No5"
            }
        ]
    },
    {
        "table": "collectingeventauthorization",
        "name": "Collecting Event Authorization",
        "desc": "Collecting Event Authorization",
        "items": [
            {
                "key": "collectingevent",
                "type": null,
                "name": "Collecting Information",
                "desc": "Collecting Event"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "permit",
                "type": null,
                "name": "Permit",
                "desc": "Permit"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "collectingtrip",
        "name": "Collecting Trip",
        "desc": "Used to group Collecting Events together.",
        "items": [
            {
                "key": "agent1",
                "type": null,
                "name": "Agent1",
                "desc": "Agent1"
            },
            {
                "key": "agent2",
                "type": null,
                "name": "Agent2",
                "desc": "Agent2"
            },
            {
                "key": "collectingevents",
                "type": "OneToMany",
                "name": "Collecting Information",
                "desc": "Collecting Event"
            },
            {
                "key": "collectingtripattachments",
                "type": null,
                "name": "Collecting Trip Attachments",
                "desc": "Collecting Trip Attachments"
            },
            {
                "key": "collectingtripattribute",
                "type": null,
                "name": "Collecting Trip Attribute",
                "desc": "Collecting Trip Attribute"
            },
            {
                "key": "collectingtripauthorizations",
                "type": null,
                "name": "Collecting Trip Authorizations",
                "desc": "Collecting Trip Authorizations"
            },
            {
                "key": "collectingtripname",
                "type": null,
                "name": "Trip Name",
                "desc": "Name of the collecting trip."
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "cruise",
                "type": null,
                "name": "Cruise",
                "desc": "Cruise"
            },
            {
                "key": "date1",
                "type": null,
                "name": "Date1",
                "desc": "Date1"
            },
            {
                "key": "date1precision",
                "type": null,
                "name": "Date1 Precision",
                "desc": "Date1 Precision"
            },
            {
                "key": "date2",
                "type": null,
                "name": "Date2",
                "desc": "Date2"
            },
            {
                "key": "date2precision",
                "type": null,
                "name": "Date2 Precision",
                "desc": "Date2 Precision"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "enddate",
                "type": "java.util.Calendar",
                "name": "End Date",
                "desc": "The ending date of the collecting trip."
            },
            {
                "key": "enddateprecision",
                "type": null,
                "name": "End Date Precision",
                "desc": "End Date Precision"
            },
            {
                "key": "enddateverbatim",
                "type": "java.lang.String",
                "name": "End Date Verbatim",
                "desc": "End Date Verbatim"
            },
            {
                "key": "endtime",
                "type": "java.lang.Short",
                "name": "End Time",
                "desc": "The ending time of the collecting trip."
            },
            {
                "key": "expedition",
                "type": null,
                "name": "Expedition",
                "desc": "Expedition"
            },
            {
                "key": "fundingagents",
                "type": null,
                "name": "Funding Agents",
                "desc": "Funding Agents"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional comments."
            },
            {
                "key": "sponsor",
                "type": null,
                "name": "Sponsor",
                "desc": "Name of sponsor of collecting trip."
            },
            {
                "key": "startdate",
                "type": "java.util.Calendar",
                "name": "Start Date",
                "desc": "The start date of the collecting trip."
            },
            {
                "key": "startdateprecision",
                "type": null,
                "name": "Start Date Precision",
                "desc": "Start Date Precision"
            },
            {
                "key": "startdateverbatim",
                "type": "java.lang.String",
                "name": "Start Date Verbatim",
                "desc": "Start Date Verbatim"
            },
            {
                "key": "starttime",
                "type": "java.lang.Short",
                "name": "Start Time",
                "desc": "The start time of the collecting trip."
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Text3",
                "desc": "Text3"
            },
            {
                "key": "text4",
                "type": null,
                "name": "text4",
                "desc": "Text4"
            },
            {
                "key": "text5",
                "type": null,
                "name": "text5",
                "desc": "Text5"
            },
            {
                "key": "text6",
                "type": null,
                "name": "Text6",
                "desc": "Text6"
            },
            {
                "key": "text7",
                "type": null,
                "name": "Text7",
                "desc": "Text7"
            },
            {
                "key": "text8",
                "type": null,
                "name": "Text8",
                "desc": "Text8"
            },
            {
                "key": "text9",
                "type": null,
                "name": "Text9",
                "desc": "Text9"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "vessel",
                "type": null,
                "name": "Vessel",
                "desc": "Vessel"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            }
        ]
    },
    {
        "table": "collectingtripattachment",
        "name": "Collecting Trip Attachment",
        "desc": "Collecting Trip Attachment",
        "items": [
            {
                "key": "attachment",
                "type": null,
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "collectingtrip",
                "type": null,
                "name": "Collecting Trip",
                "desc": "Collecting Trip"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "collectingtripattribute",
        "name": "Collecting Trip Attribute",
        "desc": "Collecting Trip Attribute",
        "items": [
            {
                "key": "collectingtrips",
                "type": null,
                "name": "Collecting Trips",
                "desc": "Collecting Trips"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer10",
                "type": null,
                "name": "Integer10",
                "desc": "Integer10"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "integer3",
                "type": null,
                "name": "Integer3",
                "desc": "Integer3"
            },
            {
                "key": "integer4",
                "type": null,
                "name": "Integer4",
                "desc": "Integer4"
            },
            {
                "key": "integer5",
                "type": null,
                "name": "Integer5",
                "desc": "Integer5"
            },
            {
                "key": "integer6",
                "type": null,
                "name": "Integer6",
                "desc": "Integer6"
            },
            {
                "key": "integer7",
                "type": null,
                "name": "Integer7",
                "desc": "Integer7"
            },
            {
                "key": "integer8",
                "type": null,
                "name": "Integer8",
                "desc": "Integer8"
            },
            {
                "key": "integer9",
                "type": null,
                "name": "Integer9",
                "desc": "Integer9"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number10",
                "type": null,
                "name": "Number10",
                "desc": "Number10"
            },
            {
                "key": "number11",
                "type": null,
                "name": "Number11",
                "desc": "Number11"
            },
            {
                "key": "number12",
                "type": null,
                "name": "Number12",
                "desc": "Number12"
            },
            {
                "key": "number13",
                "type": null,
                "name": "Number13",
                "desc": "Number13"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "number3",
                "type": null,
                "name": "Number3",
                "desc": "Number3"
            },
            {
                "key": "number4",
                "type": null,
                "name": "Number4",
                "desc": "Number4"
            },
            {
                "key": "number5",
                "type": null,
                "name": "Number5",
                "desc": "Number5"
            },
            {
                "key": "number6",
                "type": null,
                "name": "Number6",
                "desc": "Number6"
            },
            {
                "key": "number7",
                "type": null,
                "name": "Number7",
                "desc": "Number7"
            },
            {
                "key": "number8",
                "type": null,
                "name": "Number8",
                "desc": "Number8"
            },
            {
                "key": "number9",
                "type": null,
                "name": "Number9",
                "desc": "Number9"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text10",
                "type": null,
                "name": "Text10",
                "desc": "Text10"
            },
            {
                "key": "text11",
                "type": null,
                "name": "Text11",
                "desc": "Text11"
            },
            {
                "key": "text12",
                "type": null,
                "name": "Text12",
                "desc": "Text12"
            },
            {
                "key": "text13",
                "type": null,
                "name": "Text13",
                "desc": "Text13"
            },
            {
                "key": "text14",
                "type": null,
                "name": "Text14",
                "desc": "Text14"
            },
            {
                "key": "text15",
                "type": null,
                "name": "Text15",
                "desc": "Text15"
            },
            {
                "key": "text16",
                "type": null,
                "name": "Text16",
                "desc": "Text16"
            },
            {
                "key": "text17",
                "type": null,
                "name": "Text17",
                "desc": "Text17"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Text3",
                "desc": "Text3"
            },
            {
                "key": "text4",
                "type": null,
                "name": "Text4",
                "desc": "Text4"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Text5",
                "desc": "Text5"
            },
            {
                "key": "text6",
                "type": null,
                "name": "Text6",
                "desc": "Text6"
            },
            {
                "key": "text7",
                "type": null,
                "name": "Text7",
                "desc": "Text7"
            },
            {
                "key": "text8",
                "type": null,
                "name": "Text8",
                "desc": "Text8"
            },
            {
                "key": "text9",
                "type": null,
                "name": "Text9",
                "desc": "Text9"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            },
            {
                "key": "yesno3",
                "type": null,
                "name": "Yes No3",
                "desc": "Yes No3"
            },
            {
                "key": "yesno4",
                "type": null,
                "name": "Yes No4",
                "desc": "Yes No4"
            },
            {
                "key": "yesno5",
                "type": null,
                "name": "Yes No5",
                "desc": "Yes No5"
            }
        ]
    },
    {
        "table": "collectingtripauthorization",
        "name": "Collecting Trip Authorization",
        "desc": "Collecting Trip Authorization",
        "items": [
            {
                "key": "collectingtrip",
                "type": null,
                "name": "Collecting Trip",
                "desc": "Collecting Trip"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "permit",
                "type": null,
                "name": "Permit",
                "desc": "Permit"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "collection",
        "name": "Collection",
        "desc": "A collection holds Collection Objects that are of the same discipline type.",
        "items": [
            {
                "key": "admincontact",
                "type": null,
                "name": "Admin Contact",
                "desc": "Admin Contact"
            },
            {
                "key": "catalognumformatname",
                "type": null,
                "name": "Catalog Num Format Name",
                "desc": "Name of catalog number format the collection uses."
            },
            {
                "key": "code",
                "type": null,
                "name": "Code",
                "desc": "Unique code for collection."
            },
            {
                "key": "collectionname",
                "type": "java.lang.String",
                "name": "Collection Name",
                "desc": "The name of the collection."
            },
            {
                "key": "collectionobjecttype",
                "type": "ManyToOne",
                "name": "Collection Object Type",
                "desc": "Collection Object Type"
            },
            {
                "key": "collectiontype",
                "type": null,
                "name": "Collection Type",
                "desc": "Textual description of collection. ABCD schema field."
            },
            {
                "key": "contentcontacts",
                "type": null,
                "name": "Content Contacts",
                "desc": "Content Contacts"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "dbcontentversion",
                "type": null,
                "name": "Db Content Version",
                "desc": "ABCD schema field."
            },
            {
                "key": "description",
                "type": null,
                "name": "Description",
                "desc": "Textual description of collection."
            },
            {
                "key": "developmentstatus",
                "type": null,
                "name": "Development Status",
                "desc": "ABCD schema field."
            },
            {
                "key": "discipline",
                "type": "ManyToOne",
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "estimatedsize",
                "type": null,
                "name": "Estimated Size",
                "desc": "ABCD schema field."
            },
            {
                "key": "guid",
                "type": null,
                "name": "GUID",
                "desc": "GUID"
            },
            {
                "key": "institutionnetwork",
                "type": null,
                "name": "Institution Network",
                "desc": "Institution Network"
            },
            {
                "key": "institutiontype",
                "type": null,
                "name": "Institution Type",
                "desc": "ABCD schema field."
            },
            {
                "key": "isanumber",
                "type": null,
                "name": "ISA Number",
                "desc": "ISA number."
            },
            {
                "key": "isembeddedcollectingevent",
                "type": null,
                "name": "Is Embedded Collecting Event",
                "desc": "Yes if collecting event is a one-to-one relationship."
            },
            {
                "key": "kingdomcoverage",
                "type": null,
                "name": "Kingdom Coverage",
                "desc": "ABCD schema field."
            },
            {
                "key": "leftsidereltypes",
                "type": null,
                "name": "Left Side Rel Types",
                "desc": "Left Side Rel Types"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "numberingschemes",
                "type": null,
                "name": "Numbering Schemes",
                "desc": "Numbering Schemes"
            },
            {
                "key": "picklists",
                "type": null,
                "name": "Pick Lists",
                "desc": "Pick Lists"
            },
            {
                "key": "preptypes",
                "type": null,
                "name": "Prep Types",
                "desc": "Prep Types"
            },
            {
                "key": "preservationmethodtype",
                "type": null,
                "name": "Preservation Method Type",
                "desc": "ABCD schema field."
            },
            {
                "key": "primaryfocus",
                "type": null,
                "name": "Primary Focus",
                "desc": "ABCD schema field."
            },
            {
                "key": "primarypurpose",
                "type": null,
                "name": "Primary Purpose",
                "desc": "ABCD schema field."
            },
            {
                "key": "regnumber",
                "type": null,
                "name": "Reg Number",
                "desc": "Reg Number"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional comments."
            },
            {
                "key": "rightsidereltypes",
                "type": null,
                "name": "Right Side Rel Types",
                "desc": "Right Side Rel Types"
            },
            {
                "key": "scope",
                "type": null,
                "name": "Scope",
                "desc": "ABCD schema field."
            },
            {
                "key": "technicalcontacts",
                "type": null,
                "name": "Technical Contacts",
                "desc": "Technical Contacts"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "usergroups",
                "type": null,
                "name": "User Groups",
                "desc": "User Groups"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "webportaluri",
                "type": null,
                "name": "Web Portal URI",
                "desc": "Web Portal URI"
            },
            {
                "key": "websiteuri",
                "type": null,
                "name": "Web Site URI",
                "desc": "Web Site URI"
            }
        ]
    },
    {
        "table": "collectionobject",
        "name": "Collection Object",
        "desc": "A general term for anything that can be a part of your collection: a specimen, a specimen lot, a sound recording, a slide, a tissue, an extract, or a spectrogram.",
        "items": [
            {
                "key": "absoluteages",
                "type": "OneToMany",
                "name": "Absolute Ages",
                "desc": "Absolute Ages"
            },
            {
                "key": "accession",
                "type": "ManyToOne",
                "name": "Accession",
                "desc": "Accession"
            },
            {
                "key": "agent1",
                "type": null,
                "name": "Agent1",
                "desc": "Agent1"
            },
            {
                "key": "altcatalognumber",
                "type": null,
                "name": "Alternative Accession Number",
                "desc": "Alternative Accession Number; temporarily reserved for duplicates, multisheets, algae/vascular number"
            },
            {
                "key": "appraisal",
                "type": null,
                "name": "Appraisal",
                "desc": "Appraisal"
            },
            {
                "key": "availability",
                "type": null,
                "name": "Availability",
                "desc": "Availability"
            },
            {
                "key": "catalogeddate",
                "type": "java.util.Calendar",
                "name": "Creation Date",
                "desc": "Date the specimen was accessioned"
            },
            {
                "key": "catalogeddateprecision",
                "type": null,
                "name": "Cataloged Date Precision",
                "desc": "Cataloged Date Precision"
            },
            {
                "key": "catalogeddateverbatim",
                "type": "java.lang.String",
                "name": "Cataloged Date Verbatim",
                "desc": "The verbatim date the specimen was collected."
            },
            {
                "key": "cataloger",
                "type": "ManyToOne",
                "name": "Last Seen By",
                "desc": "In Specify, the person who recorded the specimen data in the catalog. Cataloger records are stored in the Agent table."
            },
            {
                "key": "catalognumber",
                "format": "Vasc Plant",
                "ishidden": false,
                "isuiformatter": true,
                "picklistname": null,
                "type": "java.lang.String",
                "name": "Accession Number",
                "desc": "A unique number assigned to each specimen as it is added to the herbarium collection"
            },
            {
                "key": "cojo",
                "type": "OneToOne",
                "name": "Parent COG",
                "desc": "Connects a Collection Object to its Collection Object Group"
            },
            {
                "key": "collectingevent",
                "type": "ManyToOne",
                "name": "Collecting Information",
                "desc": "Collecting Event"
            },
            {
                "key": "collection",
                "type": "ManyToOne",
                "name": "Collection",
                "desc": "Collection"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "collectionobjectattachments",
                "type": "OneToMany",
                "name": "Collection Object Attachments",
                "desc": "Collection Object Attachments"
            },
            {
                "key": "collectionobjectattribute",
                "type": "ManyToOne",
                "name": "Col Obj Attribute",
                "desc": "Col Obj Attribute"
            },
            {
                "key": "collectionobjectattrs",
                "type": "OneToMany",
                "name": "Collection Object Attrs",
                "desc": "Collection Object Attrs"
            },
            {
                "key": "collectionobjectcitations",
                "type": "OneToMany",
                "name": "Collection Object Citations",
                "desc": "Collection Object Citations"
            },
            {
                "key": "collectionobjectproperties",
                "type": null,
                "name": "Collection Object Properties",
                "desc": "Collection Object Properties"
            },
            {
                "key": "collectionobjecttype",
                "type": "ManyToOne",
                "name": "Type",
                "desc": "The type of object, such as a fish, mammal, mineral, rock, or meteorite."
            },
            {
                "key": "componentparent",
                "type": "ManyToOne",
                "name": "Component Parent",
                "desc": "Parent of a component Collection Object"
            },
            {
                "key": "components",
                "type": "OneToMany",
                "name": "Components",
                "desc": "Component parts of a Collection Object"
            },
            {
                "key": "conservdescriptions",
                "type": "OneToMany",
                "name": "Conserv Descriptions",
                "desc": "Conserv Descriptions"
            },
            {
                "key": "container",
                "type": "ManyToOne",
                "name": "Container",
                "desc": "Container"
            },
            {
                "key": "containerowner",
                "type": "ManyToOne",
                "name": "Container Owner",
                "desc": "Container Owner"
            },
            {
                "key": "countamt",
                "type": "java.lang.Integer",
                "name": "Count Amount",
                "desc": "The number of objects (specimens, slides, pieces) prepared."
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "date1",
                "type": null,
                "name": "Last Seen",
                "desc": "Date the physical specimen was last seen, pulled, or inventoried"
            },
            {
                "key": "date1precision",
                "type": null,
                "name": "Date1 Precision",
                "desc": "Date1 Precision"
            },
            {
                "key": "deaccessioned",
                "type": "java.lang.Boolean",
                "name": "Deaccessioned",
                "desc": "True if the object has been deaccessioned."
            },
            {
                "key": "description",
                "type": "java.lang.String",
                "name": "Specimen\\nDescription",
                "desc": "Specimen\\nDescription"
            },
            {
                "key": "determinations",
                "type": "OneToMany",
                "name": "Determinations",
                "desc": "Determinations"
            },
            {
                "key": "dnasequences",
                "type": null,
                "name": "DNA Sequences",
                "desc": "DNA Sequences"
            },
            {
                "key": "embargoauthority",
                "type": null,
                "name": "Embargo Authority",
                "desc": "Embargo Authority"
            },
            {
                "key": "embargoreason",
                "type": null,
                "name": "Embargo Reason",
                "desc": "Embargo Reason"
            },
            {
                "key": "embargoreleasedate",
                "type": null,
                "name": "Embargo Release Date",
                "desc": "Embargo Release Date"
            },
            {
                "key": "embargoreleasedateprecision",
                "type": null,
                "name": "Embargo Release Date Precision",
                "desc": "Embargo Release Date Precision"
            },
            {
                "key": "embargostartdate",
                "type": null,
                "name": "Embargo Start Date",
                "desc": "Embargo Start Date"
            },
            {
                "key": "embargostartdateprecision",
                "type": null,
                "name": "Embargo Start Date Precision",
                "desc": "Embargo Start Date Precision"
            },
            {
                "key": "exsiccataitems",
                "type": null,
                "name": "Exsiccata Items",
                "desc": "Exsiccata Items"
            },
            {
                "key": "fieldnotebookpage",
                "type": null,
                "name": "Field Notebook Page",
                "desc": "Field Notebook Page"
            },
            {
                "key": "fieldnumber",
                "type": "java.lang.String",
                "name": "Field Number",
                "desc": "A unique number a collector assigns to each specimen at the time of collection. For example, botanists often keep a running count of the individual specimens they have collected (LKK1023, LKK1024, etc.)."
            },
            {
                "key": "guid",
                "type": "java.lang.String",
                "name": "GUID",
                "desc": "Global Unique Identifier"
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "inventorizedby",
                "type": null,
                "name": "Inventoried By",
                "desc": "Inventoried By"
            },
            {
                "key": "inventorydate",
                "type": null,
                "name": "Inventory Date",
                "desc": "Inventory Date"
            },
            {
                "key": "inventorydateprecision",
                "type": null,
                "name": "Inventory Date Precision",
                "desc": "Inventory Date Precision"
            },
            {
                "key": "leftsiderels",
                "type": "OneToMany",
                "name": "Left Side Rels",
                "desc": "Left Side Rels"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "modifier",
                "type": "java.lang.String",
                "name": "Modifier",
                "desc": "Modifier"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "notifications",
                "type": null,
                "name": "Notifications",
                "desc": "Notifications"
            },
            {
                "key": "number1",
                "type": "java.lang.Float",
                "name": "Number1",
                "desc": "User definable."
            },
            {
                "key": "number2",
                "type": "java.lang.Float",
                "name": "Number2",
                "desc": "User definable."
            },
            {
                "key": "numberofduplicates",
                "type": null,
                "name": "Number Of Duplicates",
                "desc": "Number Of Duplicates"
            },
            {
                "key": "objectcondition",
                "type": null,
                "name": "Object Condition",
                "desc": "Object Condition"
            },
            {
                "key": "ocr",
                "type": null,
                "name": "Ocr",
                "desc": "Ocr"
            },
            {
                "key": "otheridentifiers",
                "type": "OneToMany",
                "name": "Other Identifiers",
                "desc": "Other Identifiers"
            },
            {
                "key": "paleocontext",
                "type": "ManyToOne",
                "name": "Paleo Context",
                "desc": "Paleo Context"
            },
            {
                "key": "preparations",
                "type": "OneToMany",
                "name": "Preparations",
                "desc": "Preparations"
            },
            {
                "key": "projectnumber",
                "type": null,
                "name": "Project ID",
                "desc": "Field for tracking various records for an ongoing project or annotations, e.g. 2024_28, 2024Jul28 - Frank Annotations"
            },
            {
                "key": "projects",
                "type": null,
                "name": "Projects",
                "desc": "Projects"
            },
            {
                "key": "relativeages",
                "type": "OneToMany",
                "name": "Relative Ages",
                "desc": "Relative Ages"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments."
            },
            {
                "key": "reservedinteger3",
                "type": null,
                "name": "Reserved Integer3",
                "desc": "Reserved Integer3"
            },
            {
                "key": "reservedinteger4",
                "type": null,
                "name": "Reserved Integer4",
                "desc": "Reserved Integer4"
            },
            {
                "key": "reservedtext",
                "type": null,
                "name": "Reserved Text",
                "desc": "Reserved Text"
            },
            {
                "key": "reservedtext2",
                "type": null,
                "name": "Reserved Text2",
                "desc": "Reserved Text2"
            },
            {
                "key": "reservedtext3",
                "type": null,
                "name": "Reserved Text3",
                "desc": "Reserved Text3"
            },
            {
                "key": "restrictions",
                "type": null,
                "name": "Restrictions",
                "desc": "Restrictions"
            },
            {
                "key": "rightsiderels",
                "type": "OneToMany",
                "name": "Right Side Rels",
                "desc": "Right Side Rels"
            },
            {
                "key": "sgrstatus",
                "type": null,
                "name": "Sgr Status",
                "desc": "Sgr Status"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Phenology",
                "desc": "Phenology"
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Original Herbarium (Data to move to Other Identifiers)",
                "desc": "The herbarium from which the specimen was obtained"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Special (Legacy Data - to move to Preparations)",
                "desc": "Other information found on the label or specimen sheet"
            },
            {
                "key": "text4",
                "type": null,
                "name": "Sensitive Record",
                "desc": "If not blank, explains a reason why the record is sensitive. Sensitive records are not shared via the public portal."
            },
            {
                "key": "text5",
                "type": null,
                "name": "Text5",
                "desc": "Text5"
            },
            {
                "key": "text6",
                "type": null,
                "name": "Text6",
                "desc": "Text6"
            },
            {
                "key": "text7",
                "type": null,
                "name": "Text7",
                "desc": "Text7"
            },
            {
                "key": "text8",
                "type": null,
                "name": "Text8",
                "desc": "Text8"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Modified Date",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "totalvalue",
                "type": null,
                "name": "Total Value",
                "desc": "Total Value"
            },
            {
                "key": "treatmentevents",
                "type": null,
                "name": "Treatment Events",
                "desc": "Treatment Events"
            },
            {
                "key": "uniqueidentifier",
                "type": null,
                "name": "Unique Identifier",
                "desc": "Unique Identifier"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "visibility",
                "type": "java.lang.Integer",
                "name": "Visibility",
                "desc": "Visibility"
            },
            {
                "key": "visibilitysetby",
                "type": "java.lang.String",
                "name": "Visibility Set By",
                "desc": "Visibility Set By"
            },
            {
                "key": "voucherrelationships",
                "type": null,
                "name": "Voucher Relationships",
                "desc": "Voucher Relationships"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "Imaged",
                "desc": "Specimens that have been imaged using the camera or scanner"
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "Barcoded",
                "desc": "Specimens that have been marked with a linear barcode sticker (not genetically barcoded)"
            },
            {
                "key": "yesno3",
                "type": null,
                "name": "Coralline",
                "desc": "(Algae only) Specimens that have been marked as coralline algae; refer to supervisor for specific handling and preparation protocol"
            },
            {
                "key": "yesno4",
                "type": null,
                "name": "Lock Record",
                "desc": "Checking this box will lock the form in a read-only state. Be sure before you press!"
            },
            {
                "key": "yesno5",
                "type": null,
                "name": "Is Multisheet",
                "desc": "Check this box if this specimen has more than one part (i.e. part of a multisheet)"
            },
            {
                "key": "yesno6",
                "type": null,
                "name": "Missing Specimen",
                "desc": "Check this box if the physical location of the specimen is unknown"
            }
        ]
    },
    {
        "table": "collectionobjectattachment",
        "name": "Collection Object Attachment",
        "desc": "An attachment for a collection object and provides order.",
        "items": [
            {
                "key": "attachment",
                "type": "ManyToOne",
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "collectionobject",
                "type": "ManyToOne",
                "name": "Collection Object",
                "desc": "Collection Object"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": "java.lang.Integer",
                "name": "Ordinal",
                "desc": "The order in the attachment list."
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "collectionobjectattr",
        "name": "Collection Object Attribute",
        "desc": "Extensible attributes introduced for Specify 6.",
        "items": [
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "collectionobject",
                "type": "ManyToOne",
                "name": "Collection Object",
                "desc": "Collection Object"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "dblvalue",
                "type": "java.lang.Double",
                "name": "Double Value",
                "desc": "Double Value"
            },
            {
                "key": "definition",
                "type": "ManyToOne",
                "name": "Definition",
                "desc": "Definition"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "strvalue",
                "type": "java.lang.String",
                "name": "String Value",
                "desc": "String Value"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "collectionobjectattribute",
        "name": "Collection Object Attribute",
        "desc": "Collection Object attributes that were also available in Specify 5.",
        "items": [
            {
                "key": "agent1",
                "type": null,
                "name": "Agent1",
                "desc": "Agent1"
            },
            {
                "key": "bottomdistance",
                "type": null,
                "name": "Bottom Distance",
                "desc": "Bottom Distance"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "collectionobjects",
                "type": null,
                "name": "Collection Objects",
                "desc": "Collection Objects"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "date1",
                "type": null,
                "name": "Date1",
                "desc": "Date1"
            },
            {
                "key": "date1precision",
                "type": null,
                "name": "Date1 Precision",
                "desc": "Date1 Precision"
            },
            {
                "key": "direction",
                "type": null,
                "name": "Direction",
                "desc": "Direction"
            },
            {
                "key": "distanceunits",
                "type": null,
                "name": "Distance Units",
                "desc": "Distance Units"
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer10",
                "type": null,
                "name": "Integer10",
                "desc": "Integer10"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "integer3",
                "type": null,
                "name": "Integer3",
                "desc": "Integer3"
            },
            {
                "key": "integer4",
                "type": null,
                "name": "Integer4",
                "desc": "Integer4"
            },
            {
                "key": "integer5",
                "type": null,
                "name": "Integer5",
                "desc": "Integer5"
            },
            {
                "key": "integer6",
                "type": null,
                "name": "Integer6",
                "desc": "Integer6"
            },
            {
                "key": "integer7",
                "type": null,
                "name": "Integer7",
                "desc": "Integer7"
            },
            {
                "key": "integer8",
                "type": null,
                "name": "Integer8",
                "desc": "Integer8"
            },
            {
                "key": "integer9",
                "type": null,
                "name": "Integer9",
                "desc": "Integer9"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number10",
                "type": null,
                "name": "Number10",
                "desc": "Number10"
            },
            {
                "key": "number11",
                "type": null,
                "name": "Number11",
                "desc": "Number11"
            },
            {
                "key": "number12",
                "type": null,
                "name": "Number12",
                "desc": "Number12"
            },
            {
                "key": "number13",
                "type": null,
                "name": "Number13",
                "desc": "Number13"
            },
            {
                "key": "number14",
                "type": null,
                "name": "Number14",
                "desc": "Number14"
            },
            {
                "key": "number15",
                "type": null,
                "name": "Number15",
                "desc": "Number15"
            },
            {
                "key": "number16",
                "type": null,
                "name": "Number16",
                "desc": "Number16"
            },
            {
                "key": "number17",
                "type": null,
                "name": "Number17",
                "desc": "Number17"
            },
            {
                "key": "number18",
                "type": null,
                "name": "Number18",
                "desc": "Number18"
            },
            {
                "key": "number19",
                "type": null,
                "name": "Number19",
                "desc": "Number19"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "number20",
                "type": null,
                "name": "Number20",
                "desc": "Number20"
            },
            {
                "key": "number21",
                "type": null,
                "name": "Number21",
                "desc": "Number21"
            },
            {
                "key": "number22",
                "type": null,
                "name": "Number22",
                "desc": "Number22"
            },
            {
                "key": "number23",
                "type": null,
                "name": "Number23",
                "desc": "Number23"
            },
            {
                "key": "number24",
                "type": null,
                "name": "Number24",
                "desc": "Number24"
            },
            {
                "key": "number25",
                "type": null,
                "name": "Number25",
                "desc": "Number25"
            },
            {
                "key": "number26",
                "type": null,
                "name": "Number26",
                "desc": "Number26"
            },
            {
                "key": "number27",
                "type": null,
                "name": "Number27",
                "desc": "Number27"
            },
            {
                "key": "number28",
                "type": null,
                "name": "Number28",
                "desc": "Number28"
            },
            {
                "key": "number29",
                "type": null,
                "name": "Number29",
                "desc": "Number29"
            },
            {
                "key": "number3",
                "type": null,
                "name": "Number3",
                "desc": "Number3"
            },
            {
                "key": "number30",
                "type": null,
                "name": "Number30",
                "desc": "Number30"
            },
            {
                "key": "number31",
                "type": null,
                "name": "Number31",
                "desc": "Number31"
            },
            {
                "key": "number32",
                "type": null,
                "name": "Number32",
                "desc": "Number32"
            },
            {
                "key": "number33",
                "type": null,
                "name": "Number33",
                "desc": "Number33"
            },
            {
                "key": "number34",
                "type": null,
                "name": "Number34",
                "desc": "Number34"
            },
            {
                "key": "number35",
                "type": null,
                "name": "Number35",
                "desc": "Number35"
            },
            {
                "key": "number36",
                "type": null,
                "name": "Number36",
                "desc": "Number36"
            },
            {
                "key": "number37",
                "type": null,
                "name": "Number37",
                "desc": "Number37"
            },
            {
                "key": "number38",
                "type": null,
                "name": "Number38",
                "desc": "Number38"
            },
            {
                "key": "number39",
                "type": null,
                "name": "Number39",
                "desc": "Number39"
            },
            {
                "key": "number4",
                "type": null,
                "name": "Number4",
                "desc": "Number4"
            },
            {
                "key": "number40",
                "type": null,
                "name": "Number40",
                "desc": "Number40"
            },
            {
                "key": "number41",
                "type": null,
                "name": "Number41",
                "desc": "Number41"
            },
            {
                "key": "number42",
                "type": null,
                "name": "Number42",
                "desc": "Number42"
            },
            {
                "key": "number5",
                "type": null,
                "name": "Number5",
                "desc": "Number5"
            },
            {
                "key": "number6",
                "type": null,
                "name": "Number6",
                "desc": "Number6"
            },
            {
                "key": "number7",
                "type": null,
                "name": "Number7",
                "desc": "Number7"
            },
            {
                "key": "number8",
                "type": null,
                "name": "Number8",
                "desc": "Number8"
            },
            {
                "key": "number9",
                "type": null,
                "name": "Number9",
                "desc": "Number9"
            },
            {
                "key": "positionstate",
                "type": null,
                "name": "Position State",
                "desc": "Position State"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Reproductive Status",
                "desc": "The reproductive features present in the specimen (as given on the specimen label), e.g. flower, fruit, unilocular (algae), female (algae)"
            },
            {
                "key": "text10",
                "type": null,
                "name": "Text10",
                "desc": "Text10"
            },
            {
                "key": "text11",
                "type": null,
                "name": "Text11",
                "desc": "Text11"
            },
            {
                "key": "text12",
                "type": null,
                "name": "Text12",
                "desc": "Text12"
            },
            {
                "key": "text13",
                "type": null,
                "name": "Text13",
                "desc": "Text13"
            },
            {
                "key": "text14",
                "type": null,
                "name": "Text14",
                "desc": "Text14"
            },
            {
                "key": "text15",
                "type": null,
                "name": "Text15",
                "desc": "Text15"
            },
            {
                "key": "text16",
                "type": null,
                "name": "Text16",
                "desc": "Text16"
            },
            {
                "key": "text17",
                "type": null,
                "name": "Text17",
                "desc": "Text17"
            },
            {
                "key": "text18",
                "type": null,
                "name": "Text18",
                "desc": "Text18"
            },
            {
                "key": "text19",
                "type": null,
                "name": "Text19",
                "desc": "Text19"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Reproductive Flex",
                "desc": "The reproductive features present in the specimen in a vegetative-reproductive transitional state. Only fill for special projects and if directed by a supervisor."
            },
            {
                "key": "text20",
                "type": null,
                "name": "Text20",
                "desc": "Text20"
            },
            {
                "key": "text21",
                "type": null,
                "name": "Text21",
                "desc": "Text21"
            },
            {
                "key": "text22",
                "type": null,
                "name": "Text22",
                "desc": "Text22"
            },
            {
                "key": "text23",
                "type": null,
                "name": "Text23",
                "desc": "Text23"
            },
            {
                "key": "text24",
                "type": null,
                "name": "Text24",
                "desc": "Text24"
            },
            {
                "key": "text25",
                "type": null,
                "name": "Text25",
                "desc": "Text25"
            },
            {
                "key": "text26",
                "type": null,
                "name": "Text26",
                "desc": "Text26"
            },
            {
                "key": "text27",
                "type": null,
                "name": "Text27",
                "desc": "Text27"
            },
            {
                "key": "text28",
                "type": null,
                "name": "Text28",
                "desc": "Text28"
            },
            {
                "key": "text29",
                "type": null,
                "name": "Text29",
                "desc": "Text29"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Remarks",
                "desc": "Additional reproductive notes"
            },
            {
                "key": "text30",
                "type": null,
                "name": "Text30",
                "desc": "Text30"
            },
            {
                "key": "text31",
                "type": null,
                "name": "Text31",
                "desc": "Text31"
            },
            {
                "key": "text32",
                "type": null,
                "name": "Text32",
                "desc": "Text32"
            },
            {
                "key": "text33",
                "type": null,
                "name": "Text33",
                "desc": "Text33"
            },
            {
                "key": "text34",
                "type": null,
                "name": "Text34",
                "desc": "Text34"
            },
            {
                "key": "text35",
                "type": null,
                "name": "Text35",
                "desc": "Text35"
            },
            {
                "key": "text36",
                "type": null,
                "name": "Text36",
                "desc": "Text36"
            },
            {
                "key": "text37",
                "type": null,
                "name": "Text37",
                "desc": "Text37"
            },
            {
                "key": "text38",
                "type": null,
                "name": "Text38",
                "desc": "Text38"
            },
            {
                "key": "text39",
                "type": null,
                "name": "Text39",
                "desc": "Text39"
            },
            {
                "key": "text4",
                "type": null,
                "name": "Text4",
                "desc": "Text4"
            },
            {
                "key": "text40",
                "type": null,
                "name": "Text40",
                "desc": "Text40"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Text5",
                "desc": "Text5"
            },
            {
                "key": "text6",
                "type": null,
                "name": "Text6",
                "desc": "Text6"
            },
            {
                "key": "text7",
                "type": null,
                "name": "Text7",
                "desc": "Text7"
            },
            {
                "key": "text8",
                "type": null,
                "name": "Text8",
                "desc": "Text8"
            },
            {
                "key": "text9",
                "type": null,
                "name": "Text9",
                "desc": "Text9"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "topdistance",
                "type": null,
                "name": "Top Distance",
                "desc": "Top Distance"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno10",
                "type": null,
                "name": "Yes No10",
                "desc": "Yes No10"
            },
            {
                "key": "yesno11",
                "type": null,
                "name": "Yes No11",
                "desc": "Yes No11"
            },
            {
                "key": "yesno12",
                "type": null,
                "name": "Yes No12",
                "desc": "Yes No12"
            },
            {
                "key": "yesno13",
                "type": null,
                "name": "Yes No13",
                "desc": "Yes No13"
            },
            {
                "key": "yesno14",
                "type": null,
                "name": "Yes No14",
                "desc": "Yes No14"
            },
            {
                "key": "yesno15",
                "type": null,
                "name": "Yes No15",
                "desc": "Yes No15"
            },
            {
                "key": "yesno16",
                "type": null,
                "name": "Yes No16",
                "desc": "Yes No16"
            },
            {
                "key": "yesno17",
                "type": null,
                "name": "Yes No17",
                "desc": "Yes No17"
            },
            {
                "key": "yesno18",
                "type": null,
                "name": "Yes No18",
                "desc": "Yes No18"
            },
            {
                "key": "yesno19",
                "type": null,
                "name": "Yes No19",
                "desc": "Yes No19"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            },
            {
                "key": "yesno20",
                "type": null,
                "name": "Yes No20",
                "desc": "Yes No20"
            },
            {
                "key": "yesno3",
                "type": null,
                "name": "Yes No3",
                "desc": "Yes No3"
            },
            {
                "key": "yesno4",
                "type": null,
                "name": "Yes No4",
                "desc": "Yes No4"
            },
            {
                "key": "yesno5",
                "type": null,
                "name": "Yes No5",
                "desc": "Yes No5"
            },
            {
                "key": "yesno6",
                "type": null,
                "name": "Yes No6",
                "desc": "Yes No6"
            },
            {
                "key": "yesno7",
                "type": null,
                "name": "Yes No7",
                "desc": "Yes No7"
            },
            {
                "key": "yesno8",
                "type": null,
                "name": "Yes No8",
                "desc": "Yes No8"
            },
            {
                "key": "yesno9",
                "type": null,
                "name": "Yes No9",
                "desc": "Yes No9"
            }
        ]
    },
    {
        "table": "collectionobjectcitation",
        "name": "Collection Object Citation",
        "desc": "Refers to a citation for a Collection Object.",
        "items": [
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "collectionobject",
                "type": "ManyToOne",
                "name": "Collection Object",
                "desc": "Collection Object"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "figurenumber",
                "type": null,
                "name": "Figure Number",
                "desc": "Figure Number"
            },
            {
                "key": "isfigured",
                "type": null,
                "name": "Is Figured",
                "desc": "Is Figured"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "pagenumber",
                "type": null,
                "name": "Page Number",
                "desc": "Page Number"
            },
            {
                "key": "platenumber",
                "type": null,
                "name": "Plate Number",
                "desc": "Plate Number"
            },
            {
                "key": "referencework",
                "type": "ManyToOne",
                "name": "Reference Work",
                "desc": "Reference Work"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "collectionobjectgroup",
        "name": "Collection Object Group",
        "desc": "Collection Object Group",
        "items": [
            {
                "key": "children",
                "type": "OneToMany",
                "name": "Children",
                "desc": "Children"
            },
            {
                "key": "cogtype",
                "type": "ManyToOne",
                "name": "Type",
                "desc": "Determines the logic Specify should use when managing the children within that COG"
            },
            {
                "key": "cojo",
                "type": "OneToOne",
                "name": "Parent COG",
                "desc": "This connects a Collection Object Group to its parent Collection Object Group, which is used for managing a hierarchy."
            },
            {
                "key": "collection",
                "type": "ManyToOne",
                "name": "collection",
                "desc": "Collection"
            },
            {
                "key": "collectionobjectgroupid",
                "type": "java.lang.Integer",
                "name": "collectionObjectGroupId",
                "desc": "Collection object group id"
            },
            {
                "key": "createdbyagent",
                "type": "ManyToOne",
                "name": "createdByAgent",
                "desc": "Created by agent"
            },
            {
                "key": "decimal1",
                "type": "java.lang.Double",
                "name": "decimal1",
                "desc": "Decimal1"
            },
            {
                "key": "decimal2",
                "type": "java.lang.Double",
                "name": "decimal2",
                "desc": "Decimal2"
            },
            {
                "key": "decimal3",
                "type": "java.lang.Double",
                "name": "decimal3",
                "desc": "Decimal3"
            },
            {
                "key": "description",
                "type": "text",
                "name": "description",
                "desc": "Description"
            },
            {
                "key": "guid",
                "type": "java.lang.String",
                "name": "GUID",
                "desc": "GUID"
            },
            {
                "key": "igsn",
                "type": "java.lang.String",
                "name": "IGSN",
                "desc": "An International Generic Sample Number (IGSN) provides an unambiguous globally unique and persistent identifier for physical samples."
            },
            {
                "key": "integer1",
                "type": "java.lang.Integer",
                "name": "integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer2",
                "type": "java.lang.Integer",
                "name": "integer2",
                "desc": "Integer2"
            },
            {
                "key": "integer3",
                "type": "java.lang.Integer",
                "name": "integer3",
                "desc": "Integer3"
            },
            {
                "key": "modifiedbyagent",
                "type": "ManyToOne",
                "name": "modifiedByAgent",
                "desc": "Modified by agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "name",
                "desc": "Name"
            },
            {
                "key": "parentcojos",
                "type": null,
                "name": "parentCojos",
                "desc": "Parent cojos"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "text2",
                "desc": "Text2"
            },
            {
                "key": "text3",
                "type": "java.lang.String",
                "name": "text3",
                "desc": "Text3"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "timestampCreated",
                "desc": "Timestamp created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "timestampModified",
                "desc": "Timestamp modified"
            },
            {
                "key": "version",
                "type": "java.lang.Integer",
                "name": "version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "YesNo1",
                "desc": "YesNo1"
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "YesNo2",
                "desc": "YesNo2"
            },
            {
                "key": "yesno3",
                "type": "java.lang.Boolean",
                "name": "yesno3",
                "desc": "Yesno3"
            }
        ]
    },
    {
        "table": "collectionobjectgroupjoin",
        "name": "Collection Object Group Join",
        "desc": "Collection Object Group Join",
        "items": [
            {
                "key": "childco",
                "type": "OneToOne",
                "name": "Child Collection Object",
                "desc": "Child Collection Object"
            },
            {
                "key": "childcog",
                "type": "OneToOne",
                "name": "Child Collection Object Group",
                "desc": "Child Collection Object Group"
            },
            {
                "key": "collectionobjectgroupjoinid",
                "type": "java.lang.Integer",
                "name": "collectionObjectGroupJoinId",
                "desc": "Collection object group join id"
            },
            {
                "key": "integer1",
                "type": "java.lang.Integer",
                "name": "integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer2",
                "type": "java.lang.Integer",
                "name": "integer2",
                "desc": "Integer2"
            },
            {
                "key": "integer3",
                "type": "java.lang.Integer",
                "name": "integer3",
                "desc": "Integer3"
            },
            {
                "key": "isprimary",
                "type": "java.lang.Boolean",
                "name": "Is Primary?",
                "desc": "The Collection Object designated as the most significant item in a Consolidated COG. A CO child must be set as \u201cprimary\u201d when using a \u201cConsolidated\u201d COG."
            },
            {
                "key": "issubstrate",
                "type": "java.lang.Boolean",
                "name": "Is Substrate?",
                "desc": "The Collection Object that serves as the physical base for other items within the COG. This designation is useful for COGs with shared substrates."
            },
            {
                "key": "parentcog",
                "type": "ManyToOne",
                "name": "Parent",
                "desc": "Parent Collection Object Group"
            },
            {
                "key": "precedence",
                "type": "java.lang.Integer",
                "name": "precedence",
                "desc": "Precedence"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "text2",
                "desc": "Text2"
            },
            {
                "key": "text3",
                "type": "java.lang.String",
                "name": "text3",
                "desc": "Text3"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "timestampCreated",
                "desc": "Timestamp created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "timestampModified",
                "desc": "Timestamp modified"
            },
            {
                "key": "version",
                "type": "java.lang.Integer",
                "name": "version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "YesNo1",
                "desc": "YesNo1"
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "YesNo2",
                "desc": "YesNo2"
            },
            {
                "key": "yesno3",
                "type": "java.lang.Boolean",
                "name": "YesNo3",
                "desc": "YesNo3"
            }
        ]
    },
    {
        "table": "collectionobjectgrouptype",
        "name": "Collection Object Group Type",
        "desc": "Collection Object Group Type",
        "items": [
            {
                "key": "cogtypeid",
                "type": "java.lang.Integer",
                "name": "Collection Object Group Type ID",
                "desc": "Collection Object Group Type ID"
            },
            {
                "key": "collection",
                "type": "ManyToOne",
                "name": "collection",
                "desc": "Collection"
            },
            {
                "key": "createdbyagent",
                "type": "ManyToOne",
                "name": "createdByAgent",
                "desc": "Created by agent"
            },
            {
                "key": "modifiedbyagent",
                "type": "ManyToOne",
                "name": "modifiedByAgent",
                "desc": "Modified by agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "name",
                "desc": "Name"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "timestampCreated",
                "desc": "Timestamp created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "timestampModified",
                "desc": "Timestamp modified"
            },
            {
                "key": "type",
                "type": "java.lang.String",
                "name": "type",
                "desc": "Type"
            },
            {
                "key": "version",
                "type": "java.lang.Integer",
                "name": "version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "collectionobjectproperty",
        "name": "Collection Object Property",
        "desc": "Collection Object Property",
        "items": [
            {
                "key": "agent1",
                "type": null,
                "name": "Agent1",
                "desc": "Agent1"
            },
            {
                "key": "agent10",
                "type": null,
                "name": "Agent10",
                "desc": "Agent10"
            },
            {
                "key": "agent11",
                "type": null,
                "name": "Agent11",
                "desc": "Agent11"
            },
            {
                "key": "agent12",
                "type": null,
                "name": "Agent12",
                "desc": "Agent12"
            },
            {
                "key": "agent13",
                "type": null,
                "name": "Agent13",
                "desc": "Agent13"
            },
            {
                "key": "agent14",
                "type": null,
                "name": "Agent14",
                "desc": "Agent14"
            },
            {
                "key": "agent15",
                "type": null,
                "name": "Agent15",
                "desc": "Agent15"
            },
            {
                "key": "agent16",
                "type": null,
                "name": "Agent16",
                "desc": "Agent16"
            },
            {
                "key": "agent17",
                "type": null,
                "name": "Agent17",
                "desc": "Agent17"
            },
            {
                "key": "agent18",
                "type": null,
                "name": "Agent18",
                "desc": "Agent18"
            },
            {
                "key": "agent19",
                "type": null,
                "name": "Agent19",
                "desc": "Agent19"
            },
            {
                "key": "agent2",
                "type": null,
                "name": "Agent2",
                "desc": "Agent2"
            },
            {
                "key": "agent20",
                "type": null,
                "name": "Agent20",
                "desc": "Agent20"
            },
            {
                "key": "agent3",
                "type": null,
                "name": "Agent3",
                "desc": "Agent3"
            },
            {
                "key": "agent4",
                "type": null,
                "name": "Agent4",
                "desc": "Agent4"
            },
            {
                "key": "agent5",
                "type": null,
                "name": "Agent5",
                "desc": "Agent5"
            },
            {
                "key": "agent6",
                "type": null,
                "name": "Agent6",
                "desc": "Agent6"
            },
            {
                "key": "agent7",
                "type": null,
                "name": "Agent7",
                "desc": "Agent7"
            },
            {
                "key": "agent8",
                "type": null,
                "name": "Agent8",
                "desc": "Agent8"
            },
            {
                "key": "agent9",
                "type": null,
                "name": "Agent9",
                "desc": "Agent9"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "collectionobject",
                "type": null,
                "name": "Collection Object",
                "desc": "Collection Object"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "date1",
                "type": null,
                "name": "Date1",
                "desc": "Date1"
            },
            {
                "key": "date10",
                "type": null,
                "name": "Date10",
                "desc": "Date10"
            },
            {
                "key": "date11",
                "type": null,
                "name": "Date11",
                "desc": "Date11"
            },
            {
                "key": "date12",
                "type": null,
                "name": "Date12",
                "desc": "Date12"
            },
            {
                "key": "date13",
                "type": null,
                "name": "Date13",
                "desc": "Date13"
            },
            {
                "key": "date14",
                "type": null,
                "name": "Date14",
                "desc": "Date14"
            },
            {
                "key": "date15",
                "type": null,
                "name": "Date15",
                "desc": "Date15"
            },
            {
                "key": "date16",
                "type": null,
                "name": "Date16",
                "desc": "Date16"
            },
            {
                "key": "date17",
                "type": null,
                "name": "Date17",
                "desc": "Date17"
            },
            {
                "key": "date18",
                "type": null,
                "name": "Date18",
                "desc": "Date18"
            },
            {
                "key": "date19",
                "type": null,
                "name": "Date19",
                "desc": "Date19"
            },
            {
                "key": "date2",
                "type": null,
                "name": "Date2",
                "desc": "Date2"
            },
            {
                "key": "date20",
                "type": null,
                "name": "Date20",
                "desc": "Date20"
            },
            {
                "key": "date3",
                "type": null,
                "name": "Date3",
                "desc": "Date3"
            },
            {
                "key": "date4",
                "type": null,
                "name": "Date4",
                "desc": "Date4"
            },
            {
                "key": "date5",
                "type": null,
                "name": "Date5",
                "desc": "Date5"
            },
            {
                "key": "date6",
                "type": null,
                "name": "Date6",
                "desc": "Date6"
            },
            {
                "key": "date7",
                "type": null,
                "name": "Date7",
                "desc": "Date7"
            },
            {
                "key": "date8",
                "type": null,
                "name": "Date8",
                "desc": "Date8"
            },
            {
                "key": "date9",
                "type": null,
                "name": "Date9",
                "desc": "Date9"
            },
            {
                "key": "guid",
                "type": null,
                "name": "Guid",
                "desc": "Guid"
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer10",
                "type": null,
                "name": "Integer10",
                "desc": "Integer10"
            },
            {
                "key": "integer11",
                "type": null,
                "name": "Integer11",
                "desc": "Integer11"
            },
            {
                "key": "integer12",
                "type": null,
                "name": "Integer12",
                "desc": "Integer12"
            },
            {
                "key": "integer13",
                "type": null,
                "name": "Integer13",
                "desc": "Integer13"
            },
            {
                "key": "integer14",
                "type": null,
                "name": "Integer14",
                "desc": "Integer14"
            },
            {
                "key": "integer15",
                "type": null,
                "name": "Integer15",
                "desc": "Integer15"
            },
            {
                "key": "integer16",
                "type": null,
                "name": "Integer16",
                "desc": "Integer16"
            },
            {
                "key": "integer17",
                "type": null,
                "name": "Integer17",
                "desc": "Integer17"
            },
            {
                "key": "integer18",
                "type": null,
                "name": "Integer18",
                "desc": "Integer18"
            },
            {
                "key": "integer19",
                "type": null,
                "name": "Integer19",
                "desc": "Integer19"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "integer20",
                "type": null,
                "name": "Integer20",
                "desc": "Integer20"
            },
            {
                "key": "integer21",
                "type": null,
                "name": "Integer21",
                "desc": "Integer21"
            },
            {
                "key": "integer22",
                "type": null,
                "name": "Integer22",
                "desc": "Integer22"
            },
            {
                "key": "integer23",
                "type": null,
                "name": "Integer23",
                "desc": "Integer23"
            },
            {
                "key": "integer24",
                "type": null,
                "name": "Integer24",
                "desc": "Integer24"
            },
            {
                "key": "integer25",
                "type": null,
                "name": "Integer25",
                "desc": "Integer25"
            },
            {
                "key": "integer26",
                "type": null,
                "name": "Integer26",
                "desc": "Integer26"
            },
            {
                "key": "integer27",
                "type": null,
                "name": "Integer27",
                "desc": "Integer27"
            },
            {
                "key": "integer28",
                "type": null,
                "name": "Integer28",
                "desc": "Integer28"
            },
            {
                "key": "integer29",
                "type": null,
                "name": "Integer29",
                "desc": "Integer29"
            },
            {
                "key": "integer3",
                "type": null,
                "name": "Integer3",
                "desc": "Integer3"
            },
            {
                "key": "integer30",
                "type": null,
                "name": "Integer30",
                "desc": "Integer30"
            },
            {
                "key": "integer4",
                "type": null,
                "name": "Integer4",
                "desc": "Integer4"
            },
            {
                "key": "integer5",
                "type": null,
                "name": "Integer5",
                "desc": "Integer5"
            },
            {
                "key": "integer6",
                "type": null,
                "name": "Integer6",
                "desc": "Integer6"
            },
            {
                "key": "integer7",
                "type": null,
                "name": "Integer7",
                "desc": "Integer7"
            },
            {
                "key": "integer8",
                "type": null,
                "name": "Integer8",
                "desc": "Integer8"
            },
            {
                "key": "integer9",
                "type": null,
                "name": "Integer9",
                "desc": "Integer9"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number10",
                "type": null,
                "name": "Number10",
                "desc": "Number10"
            },
            {
                "key": "number11",
                "type": null,
                "name": "Number11",
                "desc": "Number11"
            },
            {
                "key": "number12",
                "type": null,
                "name": "Number12",
                "desc": "Number12"
            },
            {
                "key": "number13",
                "type": null,
                "name": "Number13",
                "desc": "Number13"
            },
            {
                "key": "number14",
                "type": null,
                "name": "Number14",
                "desc": "Number14"
            },
            {
                "key": "number15",
                "type": null,
                "name": "Number15",
                "desc": "Number15"
            },
            {
                "key": "number16",
                "type": null,
                "name": "Number16",
                "desc": "Number16"
            },
            {
                "key": "number17",
                "type": null,
                "name": "Number17",
                "desc": "Number17"
            },
            {
                "key": "number18",
                "type": null,
                "name": "Number18",
                "desc": "Number18"
            },
            {
                "key": "number19",
                "type": null,
                "name": "Number19",
                "desc": "Number19"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "number20",
                "type": null,
                "name": "Number20",
                "desc": "Number20"
            },
            {
                "key": "number21",
                "type": null,
                "name": "Number21",
                "desc": "Number21"
            },
            {
                "key": "number22",
                "type": null,
                "name": "Number22",
                "desc": "Number22"
            },
            {
                "key": "number23",
                "type": null,
                "name": "Number23",
                "desc": "Number23"
            },
            {
                "key": "number24",
                "type": null,
                "name": "Number24",
                "desc": "Number24"
            },
            {
                "key": "number25",
                "type": null,
                "name": "Number25",
                "desc": "Number25"
            },
            {
                "key": "number26",
                "type": null,
                "name": "Number26",
                "desc": "Number26"
            },
            {
                "key": "number27",
                "type": null,
                "name": "Number27",
                "desc": "Number27"
            },
            {
                "key": "number28",
                "type": null,
                "name": "Number28",
                "desc": "Number28"
            },
            {
                "key": "number29",
                "type": null,
                "name": "Number29",
                "desc": "Number29"
            },
            {
                "key": "number3",
                "type": null,
                "name": "Number3",
                "desc": "Number3"
            },
            {
                "key": "number30",
                "type": null,
                "name": "Number30",
                "desc": "Number30"
            },
            {
                "key": "number4",
                "type": null,
                "name": "Number4",
                "desc": "Number4"
            },
            {
                "key": "number5",
                "type": null,
                "name": "Number5",
                "desc": "Number5"
            },
            {
                "key": "number6",
                "type": null,
                "name": "Number6",
                "desc": "Number6"
            },
            {
                "key": "number7",
                "type": null,
                "name": "Number7",
                "desc": "Number7"
            },
            {
                "key": "number8",
                "type": null,
                "name": "Number8",
                "desc": "Number8"
            },
            {
                "key": "number9",
                "type": null,
                "name": "Number9",
                "desc": "Number9"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text10",
                "type": null,
                "name": "Creation Date",
                "desc": "Date of record creation"
            },
            {
                "key": "text11",
                "type": null,
                "name": "Account Created",
                "desc": "Data entry by"
            },
            {
                "key": "text12",
                "type": null,
                "name": "Modification Date",
                "desc": "Date the record was modified"
            },
            {
                "key": "text13",
                "type": null,
                "name": "Account Modified",
                "desc": "Record modified by"
            },
            {
                "key": "text14",
                "type": null,
                "name": "Text14",
                "desc": "Text14"
            },
            {
                "key": "text15",
                "type": null,
                "name": "Type",
                "desc": "Type of specimen preparation, e.g. mounted, silica, etc"
            },
            {
                "key": "text16",
                "type": null,
                "name": "Basis of Record",
                "desc": "Darwin Core Archive field describing the specific nature of the record, i.e. preserved specimens"
            },
            {
                "key": "text17",
                "type": null,
                "name": "Nomenclatural Code",
                "desc": "Darwin Core Archive field"
            },
            {
                "key": "text18",
                "type": null,
                "name": "Text18",
                "desc": "Text18"
            },
            {
                "key": "text19",
                "type": null,
                "name": "Text19",
                "desc": "Text19"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "text20",
                "type": null,
                "name": "Text20",
                "desc": "Text20"
            },
            {
                "key": "text21",
                "type": null,
                "name": "Text21",
                "desc": "Text21"
            },
            {
                "key": "text22",
                "type": null,
                "name": "Text22",
                "desc": "Text22"
            },
            {
                "key": "text23",
                "type": null,
                "name": "Text23",
                "desc": "Text23"
            },
            {
                "key": "text24",
                "type": null,
                "name": "Text24",
                "desc": "Text24"
            },
            {
                "key": "text25",
                "type": null,
                "name": "Text25",
                "desc": "Text25"
            },
            {
                "key": "text26",
                "type": null,
                "name": "Text26",
                "desc": "Text26"
            },
            {
                "key": "text27",
                "type": null,
                "name": "Text27",
                "desc": "Text27"
            },
            {
                "key": "text28",
                "type": null,
                "name": "Text28",
                "desc": "Text28"
            },
            {
                "key": "text29",
                "type": null,
                "name": "Text29",
                "desc": "Text29"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Text3",
                "desc": "Text3"
            },
            {
                "key": "text30",
                "type": null,
                "name": "Text30",
                "desc": "Text30"
            },
            {
                "key": "text31",
                "type": null,
                "name": "Associated References",
                "desc": "Darwin Core Archive field of scientific publications with citation to the specimen"
            },
            {
                "key": "text32",
                "type": null,
                "name": "Project ID (Data to move to Collection Object)",
                "desc": "Temporary field for \u201cmarking\u201d various records for an ongoing project"
            },
            {
                "key": "text33",
                "type": null,
                "name": "Funding Project",
                "desc": "Field for specially-funded projects (only fill if directed by supervisor)"
            },
            {
                "key": "text34",
                "type": null,
                "name": "Text34",
                "desc": "Text34"
            },
            {
                "key": "text35",
                "type": null,
                "name": "Text35",
                "desc": "Text35"
            },
            {
                "key": "text36",
                "type": null,
                "name": "Text36",
                "desc": "Text36"
            },
            {
                "key": "text37",
                "type": null,
                "name": "Text37",
                "desc": "Text37"
            },
            {
                "key": "text38",
                "type": null,
                "name": "Text38",
                "desc": "Text38"
            },
            {
                "key": "text39",
                "type": null,
                "name": "Text39",
                "desc": "Text39"
            },
            {
                "key": "text4",
                "type": null,
                "name": "Text4",
                "desc": "Text4"
            },
            {
                "key": "text40",
                "type": null,
                "name": "Text40",
                "desc": "Text40"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Text5",
                "desc": "Text5"
            },
            {
                "key": "text6",
                "type": null,
                "name": "Text6",
                "desc": "Text6"
            },
            {
                "key": "text7",
                "type": null,
                "name": "Text7",
                "desc": "Text7"
            },
            {
                "key": "text8",
                "type": null,
                "name": "Text8",
                "desc": "Text8"
            },
            {
                "key": "text9",
                "type": null,
                "name": "Text9",
                "desc": "Text9"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno10",
                "type": null,
                "name": "Yes No10",
                "desc": "Yes No10"
            },
            {
                "key": "yesno11",
                "type": null,
                "name": "Yes No11",
                "desc": "Yes No11"
            },
            {
                "key": "yesno12",
                "type": null,
                "name": "Yes No12",
                "desc": "Yes No12"
            },
            {
                "key": "yesno13",
                "type": null,
                "name": "Yes No13",
                "desc": "Yes No13"
            },
            {
                "key": "yesno14",
                "type": null,
                "name": "Yes No14",
                "desc": "Yes No14"
            },
            {
                "key": "yesno15",
                "type": null,
                "name": "Yes No15",
                "desc": "Yes No15"
            },
            {
                "key": "yesno16",
                "type": null,
                "name": "Yes No16",
                "desc": "Yes No16"
            },
            {
                "key": "yesno17",
                "type": null,
                "name": "Yes No17",
                "desc": "Yes No17"
            },
            {
                "key": "yesno18",
                "type": null,
                "name": "Yes No18",
                "desc": "Yes No18"
            },
            {
                "key": "yesno19",
                "type": null,
                "name": "Yes No19",
                "desc": "Yes No19"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            },
            {
                "key": "yesno20",
                "type": null,
                "name": "Yes No20",
                "desc": "Yes No20"
            },
            {
                "key": "yesno3",
                "type": null,
                "name": "Yes No3",
                "desc": "Yes No3"
            },
            {
                "key": "yesno4",
                "type": null,
                "name": "Yes No4",
                "desc": "Yes No4"
            },
            {
                "key": "yesno5",
                "type": null,
                "name": "Yes No5",
                "desc": "Yes No5"
            },
            {
                "key": "yesno6",
                "type": null,
                "name": "Yes No6",
                "desc": "Yes No6"
            },
            {
                "key": "yesno7",
                "type": null,
                "name": "Yes No7",
                "desc": "Yes No7"
            },
            {
                "key": "yesno8",
                "type": null,
                "name": "Yes No8",
                "desc": "Yes No8"
            },
            {
                "key": "yesno9",
                "type": null,
                "name": "Yes No9",
                "desc": "Yes No9"
            }
        ]
    },
    {
        "table": "collectionobjecttype",
        "name": "Collection Object Type",
        "desc": "Collection Object Type",
        "items": [
            {
                "key": "catalognumberformatname",
                "type": "java.lang.String",
                "name": "Catalog Number Format Name",
                "desc": "Catalog Number Format Name"
            },
            {
                "key": "collection",
                "type": "ManyToOne",
                "name": "collection",
                "desc": "Collection"
            },
            {
                "key": "collectionobjecttypeid",
                "type": "java.lang.Integer",
                "name": "Collection Object Type ID",
                "desc": "Collection Object Type ID"
            },
            {
                "key": "createdbyagent",
                "type": "ManyToOne",
                "name": "createdByAgent",
                "desc": "Created by agent"
            },
            {
                "key": "modifiedbyagent",
                "type": "ManyToOne",
                "name": "modifiedByAgent",
                "desc": "Modified by agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "name",
                "desc": "Name"
            },
            {
                "key": "taxontreedef",
                "type": "ManyToOne",
                "name": "Taxon Tree",
                "desc": "The Taxon Tree associated with this Collection Object Type"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "text2",
                "desc": "Text2"
            },
            {
                "key": "text3",
                "type": "java.lang.String",
                "name": "text3",
                "desc": "Text3"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "timestampCreated",
                "desc": "Timestamp created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "timestampModified",
                "desc": "Timestamp modified"
            },
            {
                "key": "version",
                "type": "java.lang.Integer",
                "name": "version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "collectionrelationship",
        "name": "Collection Relationship",
        "desc": "Enables two collection objects to refer to each other, for example, voucher and tissue.",
        "items": [
            {
                "key": "collectionreltype",
                "type": "ManyToOne",
                "name": "Collection Rel Type",
                "desc": "Collection Rel Type"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "leftside",
                "type": "ManyToOne",
                "name": "Left Side",
                "desc": "Source CollectionObject"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "rightside",
                "type": "ManyToOne",
                "name": "Right Side",
                "desc": "Destination Collection Object"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "User-definable."
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "User definable."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "collectionreltype",
        "name": "Collection Relationship Type",
        "desc": "Describes the type of relationship between two collection objects.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "leftsidecollection",
                "type": null,
                "name": "Left Side Collection",
                "desc": "Source Collection"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "The name of the Collection Relationship."
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Additional comments."
            },
            {
                "key": "rightsidecollection",
                "type": null,
                "name": "Right Side Collection",
                "desc": "Destination Collection"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "collector",
        "name": "Collector",
        "desc": "In Specify, the person or persons who collected a specimen. Collector records are stored in the Agent table.",
        "items": [
            {
                "key": "agent",
                "type": "ManyToOne",
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "collectingevent",
                "type": "ManyToOne",
                "name": "Collecting Information",
                "desc": "Collecting Event"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "division",
                "type": null,
                "name": "Division",
                "desc": "Division"
            },
            {
                "key": "isprimary",
                "type": null,
                "name": "Is Primary",
                "desc": "Is Primary"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordernumber",
                "type": "java.lang.Integer",
                "name": "Order Number",
                "desc": "The position in the list of collectors."
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional comments about the collector, e.g. Primary Collector, Other Collector"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            }
        ]
    },
    {
        "table": "commonnametx",
        "name": "Common Name",
        "desc": "Describes a common name and the localization of the name. This table is used to describe additional Common Names in other languages.",
        "items": [
            {
                "key": "author",
                "type": null,
                "name": "Author",
                "desc": "Author"
            },
            {
                "key": "citations",
                "type": null,
                "name": "Citations",
                "desc": "Citations"
            },
            {
                "key": "country",
                "type": "java.lang.String",
                "name": "Country",
                "desc": "The country code."
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "language",
                "type": "java.lang.String",
                "name": "Language",
                "desc": "The language code."
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "taxon",
                "type": "ManyToOne",
                "name": "Taxon",
                "desc": "Taxon"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "variant",
                "type": "java.lang.String",
                "name": "Variant",
                "desc": "The variant code of the language."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "commonnametxcitation",
        "name": "Common Name Tx Citation",
        "desc": "Common Name Tx Citation",
        "items": [
            {
                "key": "commonnametx",
                "type": null,
                "name": "Common Name Tx",
                "desc": "Common Name Tx"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "figurenumber",
                "type": null,
                "name": "Figure Number",
                "desc": "Figure Number"
            },
            {
                "key": "isfigured",
                "type": null,
                "name": "Is Figured",
                "desc": "Is Figured"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "pagenumber",
                "type": null,
                "name": "Page Number",
                "desc": "Page Number"
            },
            {
                "key": "platenumber",
                "type": null,
                "name": "Plate Number",
                "desc": "Plate Number"
            },
            {
                "key": "referencework",
                "type": null,
                "name": "Reference Work",
                "desc": "Reference Work"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "User definable."
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "User definable."
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            }
        ]
    },
    {
        "table": "conservdescription",
        "name": "Conservator Description",
        "desc": "Describes an object that has participated in a Conservator action. There is only one of these for each Collection Object.",
        "items": [
            {
                "key": "backgroundinfo",
                "type": "text",
                "name": "Background Info",
                "desc": "Any background information on the object."
            },
            {
                "key": "collectionobject",
                "type": "ManyToOne",
                "name": "Collection Object",
                "desc": "The Collection Object that the description describes."
            },
            {
                "key": "composition",
                "type": "text",
                "name": "Composition",
                "desc": "Composition"
            },
            {
                "key": "conservdescriptionattachments",
                "type": "OneToMany",
                "name": "Conserv Description Attachments",
                "desc": "Conserv Description Attachments"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "date1",
                "type": null,
                "name": "Date1",
                "desc": "Date1"
            },
            {
                "key": "date1precision",
                "type": null,
                "name": "Date1 Precision",
                "desc": "date1Precision"
            },
            {
                "key": "date2",
                "type": null,
                "name": "Date2",
                "desc": "Date2"
            },
            {
                "key": "date2precision",
                "type": null,
                "name": "Date2 Precision",
                "desc": "date2Precision"
            },
            {
                "key": "date3",
                "type": null,
                "name": "Date3",
                "desc": "Date3"
            },
            {
                "key": "date3precision",
                "type": null,
                "name": "Date3 Precision",
                "desc": "date3Precision"
            },
            {
                "key": "date4",
                "type": null,
                "name": "Date4",
                "desc": "Date4"
            },
            {
                "key": "date4precision",
                "type": null,
                "name": "Date4 Precision",
                "desc": "date4Precision"
            },
            {
                "key": "date5",
                "type": null,
                "name": "Date5",
                "desc": "Date5"
            },
            {
                "key": "date5precision",
                "type": null,
                "name": "Date5 Precision",
                "desc": "date5Precision"
            },
            {
                "key": "description",
                "type": "text",
                "name": "Description",
                "desc": "Description"
            },
            {
                "key": "determineddate",
                "type": null,
                "name": "Determined Date",
                "desc": "Determined Date"
            },
            {
                "key": "displayrecommendations",
                "type": null,
                "name": "Display Recommendations",
                "desc": "Display Recommendations"
            },
            {
                "key": "division",
                "type": "ManyToOne",
                "name": "Division",
                "desc": "Division"
            },
            {
                "key": "events",
                "type": "OneToMany",
                "name": "Events",
                "desc": "Events"
            },
            {
                "key": "height",
                "type": "java.lang.Float",
                "name": "Height",
                "desc": "The height of the object."
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "integer3",
                "type": null,
                "name": "Integer3",
                "desc": "Integer3"
            },
            {
                "key": "integer4",
                "type": null,
                "name": "Integer4",
                "desc": "Integer4"
            },
            {
                "key": "integer5",
                "type": null,
                "name": "Integer5",
                "desc": "Integer5"
            },
            {
                "key": "lightrecommendations",
                "type": null,
                "name": "Light Recommendations",
                "desc": "Light Recommendations"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": "java.lang.Float",
                "name": "Number1",
                "desc": "User definable"
            },
            {
                "key": "number2",
                "type": "java.lang.Float",
                "name": "Number2",
                "desc": "User definable"
            },
            {
                "key": "number3",
                "type": "java.lang.Float",
                "name": "Number3",
                "desc": "User definable"
            },
            {
                "key": "number4",
                "type": "java.lang.Float",
                "name": "Number4",
                "desc": "User definable"
            },
            {
                "key": "number5",
                "type": "java.lang.Float",
                "name": "Number5",
                "desc": "User definable"
            },
            {
                "key": "objlength",
                "type": "java.lang.Float",
                "name": "Object Length",
                "desc": "The length of the object."
            },
            {
                "key": "otherrecommendations",
                "type": null,
                "name": "Other Recommendations",
                "desc": "Other Recommendations"
            },
            {
                "key": "preparation",
                "type": null,
                "name": "Preparation",
                "desc": "Preparation"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "shortdesc",
                "type": "java.lang.String",
                "name": "Short Description",
                "desc": "A short description of the object."
            },
            {
                "key": "source",
                "type": "text",
                "name": "Source",
                "desc": "Source"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable."
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "User definable."
            },
            {
                "key": "text3",
                "type": "java.lang.String",
                "name": "Text3",
                "desc": "User definable."
            },
            {
                "key": "text4",
                "type": "java.lang.String",
                "name": "Text4",
                "desc": "User definable."
            },
            {
                "key": "text5",
                "type": "java.lang.String",
                "name": "Text5",
                "desc": "User definable."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "units",
                "type": "java.lang.String",
                "name": "Units",
                "desc": "The units for the measurements (`feet` or `meters`)."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "width",
                "type": "java.lang.Float",
                "name": "Width",
                "desc": "The width of the object."
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "Yes No1",
                "desc": "User definable"
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "Yes No2",
                "desc": "User definable"
            },
            {
                "key": "yesno3",
                "type": "java.lang.Boolean",
                "name": "Yes No3",
                "desc": "User definable"
            },
            {
                "key": "yesno4",
                "type": "java.lang.Boolean",
                "name": "Yes No4",
                "desc": "User definable"
            },
            {
                "key": "yesno5",
                "type": "java.lang.Boolean",
                "name": "Yes No5",
                "desc": "User definable"
            }
        ]
    },
    {
        "table": "conservdescriptionattachment",
        "name": "Conservator Description Attachment",
        "desc": "Refers to an attachment and provides order.",
        "items": [
            {
                "key": "attachment",
                "type": "ManyToOne",
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "conservdescription",
                "type": "ManyToOne",
                "name": "Conserv Description",
                "desc": "Conserv Description"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": "java.lang.Integer",
                "name": "Ordinal",
                "desc": "The order or position"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "conservevent",
        "name": "Conservator Event",
        "desc": "An action that takes place as part of a Conservation Description. Over a period of time there may be multiple incidents that require a Conservator to take action.",
        "items": [
            {
                "key": "advtestingexam",
                "type": "text",
                "name": "Advanced Testing Exam",
                "desc": "The advanced testing that was used to examine the object"
            },
            {
                "key": "advtestingexamresults",
                "type": "text",
                "name": "Advanced Testing Exam Results",
                "desc": "The results of the advanced testing"
            },
            {
                "key": "completedcomments",
                "type": null,
                "name": "Completed Comments",
                "desc": "Completed Comments"
            },
            {
                "key": "completeddate",
                "type": null,
                "name": "Completed Date",
                "desc": "Completed Date"
            },
            {
                "key": "completeddateprecision",
                "type": null,
                "name": "Completed Date Precision",
                "desc": "Completed Date Precision"
            },
            {
                "key": "conditionreport",
                "type": "text",
                "name": "Condition Report",
                "desc": "A report on the condition"
            },
            {
                "key": "conservdescription",
                "type": "ManyToOne",
                "name": "Conserv Description",
                "desc": "Conserv Description"
            },
            {
                "key": "conserveventattachments",
                "type": "OneToMany",
                "name": "Conserv Event Attachments",
                "desc": "Conserv Event Attachments"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "curator",
                "type": null,
                "name": "Curator",
                "desc": "Curator"
            },
            {
                "key": "curatorapprovaldate",
                "type": null,
                "name": "Approval Date",
                "desc": "Approval Date"
            },
            {
                "key": "curatorapprovaldateprecision",
                "type": null,
                "name": "Curator Approval Date Precision",
                "desc": "Curator Approval Date Precision"
            },
            {
                "key": "examdate",
                "type": "java.util.Calendar",
                "name": "Exam Date",
                "desc": "The date the object was examined"
            },
            {
                "key": "examdateprecision",
                "type": null,
                "name": "Exam Date Precision",
                "desc": "Exam Date Precision"
            },
            {
                "key": "examinedbyagent",
                "type": "ManyToOne",
                "name": "Examined By Agent",
                "desc": "Examined By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "photodocs",
                "type": "text",
                "name": "Photo Documentation",
                "desc": "Any documentation on the photos that were taken"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "treatedbyagent",
                "type": "ManyToOne",
                "name": "Treated By Agent",
                "desc": "Treated By Agent"
            },
            {
                "key": "treatmentcompdate",
                "type": "java.util.Calendar",
                "name": "Treatment Completion Date",
                "desc": "Treatment Completion Date"
            },
            {
                "key": "treatmentcompdateprecision",
                "type": null,
                "name": "Treatment Comp Date Precision",
                "desc": "Treatment Comp Date Precision"
            },
            {
                "key": "treatmentreport",
                "type": "text",
                "name": "Treatment Report",
                "desc": "A description of the treatment that is needed."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            }
        ]
    },
    {
        "table": "conserveventattachment",
        "name": "Conservator Event Attachment",
        "desc": "Refers to an attachment and provides order.",
        "items": [
            {
                "key": "attachment",
                "type": "ManyToOne",
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "conservevent",
                "type": "ManyToOne",
                "name": "Conserv Event",
                "desc": "Conserv Event"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": "java.lang.Integer",
                "name": "Ordinal",
                "desc": "The order or position"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "container",
        "name": "Container",
        "desc": "A container can optionally be cataloged as a collection object and it contains other collection objects. Describes a logical or physical container.",
        "items": [
            {
                "key": "children",
                "type": null,
                "name": "Children",
                "desc": "Children"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "collectionobjectkids",
                "type": null,
                "name": "Collection Object Kids",
                "desc": "Collection Object Kids"
            },
            {
                "key": "collectionobjects",
                "type": "OneToMany",
                "name": "Collection Objects",
                "desc": "Collection Objects"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "description",
                "type": "java.lang.String",
                "name": "Description",
                "desc": "A description of the container"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "The name of the container"
            },
            {
                "key": "number",
                "type": "java.lang.Integer",
                "name": "Number",
                "desc": "User definable"
            },
            {
                "key": "parent",
                "type": null,
                "name": "Parent",
                "desc": "Parent"
            },
            {
                "key": "storage",
                "type": "ManyToOne",
                "name": "Storage",
                "desc": "Storage"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "type",
                "type": "java.lang.Short",
                "name": "Type",
                "desc": "The type of container"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "datatype",
        "name": "Data Type",
        "desc": "A data type represents a core type of collection data.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "deaccession",
        "name": "Deaccession",
        "desc": "Removal of a biological object (specimen, observation, or preparation type) from the collection. Deaccessions may include loans to other collections that are subsequently given to the borrower, lost specimens, and specimens that are destroyed.",
        "items": [
            {
                "key": "agent1",
                "type": null,
                "name": "Agent1",
                "desc": "Agent1"
            },
            {
                "key": "agent2",
                "type": null,
                "name": "Agent2",
                "desc": "Agent2"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "date1",
                "type": null,
                "name": "Date1",
                "desc": "Date1"
            },
            {
                "key": "date2",
                "type": null,
                "name": "Date2",
                "desc": "Date2"
            },
            {
                "key": "deaccessionagents",
                "type": "OneToMany",
                "name": "Deaccession Agents",
                "desc": "Deaccession Agents"
            },
            {
                "key": "deaccessionattachments",
                "type": null,
                "name": "Deaccession Attachments",
                "desc": "Deaccession Attachments"
            },
            {
                "key": "deaccessiondate",
                "type": "java.util.Calendar",
                "name": "Deaccession Date",
                "desc": "Deaccession Date"
            },
            {
                "key": "deaccessionnumber",
                "type": "java.lang.String",
                "name": "Deacc #",
                "desc": "Name institution assigns to the deaccession"
            },
            {
                "key": "disposals",
                "type": null,
                "name": "Disposals",
                "desc": "Disposals"
            },
            {
                "key": "exchangeouts",
                "type": null,
                "name": "Exchange Outs",
                "desc": "Exchange Outs"
            },
            {
                "key": "gifts",
                "type": null,
                "name": "Gifts",
                "desc": "Gifts"
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "integer3",
                "type": null,
                "name": "Integer3",
                "desc": "Integer3"
            },
            {
                "key": "integer4",
                "type": null,
                "name": "Integer4",
                "desc": "Integer4"
            },
            {
                "key": "integer5",
                "type": null,
                "name": "Integer5",
                "desc": "Integer5"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": "java.lang.Float",
                "name": "Number1",
                "desc": "User definable"
            },
            {
                "key": "number2",
                "type": "java.lang.Float",
                "name": "Number2",
                "desc": "User definable"
            },
            {
                "key": "number3",
                "type": null,
                "name": "Number3",
                "desc": "Number3"
            },
            {
                "key": "number4",
                "type": null,
                "name": "Number4",
                "desc": "Number4"
            },
            {
                "key": "number5",
                "type": null,
                "name": "Number5",
                "desc": "Number5"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "status",
                "type": null,
                "name": "Status",
                "desc": "Status"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable"
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "User definable"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Text3",
                "desc": "Text3"
            },
            {
                "key": "text4",
                "type": null,
                "name": "Text4",
                "desc": "Text4"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Text5",
                "desc": "Text5"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Date Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "type",
                "type": "java.lang.String",
                "name": "Type",
                "desc": "Description of the Type of deaccession; i.e. Gift, disposal, lost"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "Yes No1",
                "desc": "User definable"
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "Yes No2",
                "desc": "User definable"
            },
            {
                "key": "yesno3",
                "type": null,
                "name": "Yes No3",
                "desc": "Yes No3"
            },
            {
                "key": "yesno4",
                "type": null,
                "name": "Yes No4",
                "desc": "Yes No4"
            },
            {
                "key": "yesno5",
                "type": null,
                "name": "Yes No5",
                "desc": "Yes No5"
            }
        ]
    },
    {
        "table": "deaccessionagent",
        "name": "Deaccession Agent",
        "desc": "Refers to an agent and contains their role in the deaccession.",
        "items": [
            {
                "key": "agent",
                "type": "ManyToOne",
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "deaccession",
                "type": "ManyToOne",
                "name": "Deaccession",
                "desc": "Deaccession"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "role",
                "type": "java.lang.String",
                "name": "Role",
                "desc": "Role agent played in deaccession"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "deaccessionattachment",
        "name": "Deaccession Attachment",
        "desc": "Deaccession Attachment",
        "items": [
            {
                "key": "attachment",
                "type": null,
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "deaccession",
                "type": null,
                "name": "Deaccession",
                "desc": "Deaccession"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "determination",
        "name": "Determination",
        "desc": "The determination of the collection object.",
        "items": [
            {
                "key": "addendum",
                "type": null,
                "name": "Addendum",
                "desc": "Special qualifiers \"sensu lato\" or \"sensu stricto\", abbreviations s.s., s.l."
            },
            {
                "key": "alternatename",
                "type": null,
                "name": "Alternate Name",
                "desc": "A free text field for insertion of a name (scientific or common) not recognized in the taxon tree authority. This field operates as an \"either/or\" condition with Preferred Taxon; both cannot be entered in a single Determination."
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "collectionobject",
                "type": "ManyToOne",
                "name": "Collection Object",
                "desc": "Collection Object"
            },
            {
                "key": "confidence",
                "type": "java.lang.String",
                "name": "Confidence",
                "desc": "Confidence of determination."
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "determinationcitations",
                "type": "OneToMany",
                "name": "Determination Citations",
                "desc": "Determination Citations"
            },
            {
                "key": "determineddate",
                "type": "java.util.Calendar",
                "name": "Determined Date",
                "desc": "The date the specimen identification was determined"
            },
            {
                "key": "determineddateprecision",
                "type": null,
                "name": "Determined Date Precision",
                "desc": "Determined Date Precision"
            },
            {
                "key": "determiner",
                "type": "ManyToOne",
                "name": "Determiner",
                "desc": "Individual who assigned or made the decision regarding the taxonomic name of specimen. In some instances, determiner may be an organization or institute. In Specify, determiner information is stored in the Agent table."
            },
            {
                "key": "determiners",
                "type": "OneToMany",
                "name": "Determiners",
                "desc": "Determiners"
            },
            {
                "key": "featureorbasis",
                "type": "java.lang.String",
                "name": "Feature Or Basis",
                "desc": "Body part, or characteristic used as the basis of a determination."
            },
            {
                "key": "guid",
                "type": null,
                "name": "GUID",
                "desc": "GUID"
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "integer3",
                "type": null,
                "name": "Integer3",
                "desc": "Integer3"
            },
            {
                "key": "integer4",
                "type": null,
                "name": "Integer4",
                "desc": "Integer4"
            },
            {
                "key": "integer5",
                "type": null,
                "name": "Integer5",
                "desc": "Integer5"
            },
            {
                "key": "iscurrent",
                "type": null,
                "name": "Current",
                "desc": "Yes if the determination is considered the 'best' (maybe even one of the better)."
            },
            {
                "key": "method",
                "type": "java.lang.String",
                "name": "Method",
                "desc": "Taxonomic tools and information on which a determination is based. These include professional expertise, published taxonomic keys, molecular DNA, or comparisons with previously cataloged specimens."
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Link to lookup table for Method."
            },
            {
                "key": "nameusage",
                "type": null,
                "name": "Name Usage",
                "desc": "User customizable picklist used to describe the context of the name entered into the taxon or Alternate name fields."
            },
            {
                "key": "number1",
                "type": "java.lang.Float",
                "name": "Number1",
                "desc": "User definable."
            },
            {
                "key": "number2",
                "type": "java.lang.Float",
                "name": "Number2",
                "desc": "User definable."
            },
            {
                "key": "number3",
                "type": null,
                "name": "Number3",
                "desc": "Number3"
            },
            {
                "key": "number4",
                "type": null,
                "name": "Number4",
                "desc": "Number4"
            },
            {
                "key": "number5",
                "type": null,
                "name": "Number5",
                "desc": "Number5"
            },
            {
                "key": "preferredtaxon",
                "type": null,
                "name": "Preferred Taxon",
                "desc": "Preferred Taxon"
            },
            {
                "key": "qualifier",
                "type": null,
                "name": "Qualifier",
                "desc": "A term to qualify the identification of the taxon name when doubts have arisen as to its identity or as a comparison to a given name (e.g. \"cf.\", \"aff.\", or \"?\")"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks and Additional Comments"
            },
            {
                "key": "subspqualifier",
                "type": null,
                "name": "Sub Sp Qualifier",
                "desc": "Sub Sp Qualifier"
            },
            {
                "key": "taxon",
                "type": "ManyToOne",
                "name": "Taxon",
                "desc": "The determined name of the specimen."
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable."
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Determination Date Verbatim",
                "desc": "User definable."
            },
            {
                "key": "text3",
                "type": null,
                "name": "Text3",
                "desc": "Text3"
            },
            {
                "key": "text4",
                "type": null,
                "name": "Provisional Name",
                "desc": "Placeholder names that are not yet published or recognised by the phycological community"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Determiner Verbatim",
                "desc": "The first person/people to identify the specimen to its currently filed taxon, as given on the label. May subject to change as annotations are made to the specimen"
            },
            {
                "key": "text6",
                "type": null,
                "name": "Type Status Remarks",
                "desc": "Additional remarks included with the type status, e.g. ISOLECTOTYPE of Iridophycus sinicola Setchell & N.L.Gardner"
            },
            {
                "key": "text7",
                "type": null,
                "name": "Text7",
                "desc": "Text7"
            },
            {
                "key": "text8",
                "type": null,
                "name": "Text8",
                "desc": "Text8"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "typestatusname",
                "type": "java.lang.String",
                "name": "Type Status",
                "desc": "A picklist of all available type designations; Type, Holotype, Lectotype, Isolectotype, Syntype, Isotype, Isosyntype, Neotype, Isoneotype, Paratype, Epitype, Topotype, Non-Type"
            },
            {
                "key": "varqualifier",
                "type": null,
                "name": "Var Qualifier",
                "desc": "Var Qualifier"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "Yes No1",
                "desc": "User definable."
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "Yes No2",
                "desc": "User definable."
            },
            {
                "key": "yesno3",
                "type": null,
                "name": "Yes No3",
                "desc": "Yes No3"
            },
            {
                "key": "yesno4",
                "type": null,
                "name": "Yes No4",
                "desc": "Yes No4"
            },
            {
                "key": "yesno5",
                "type": null,
                "name": "Yes No5",
                "desc": "Yes No5"
            }
        ]
    },
    {
        "table": "determinationcitation",
        "name": "Determination Citation",
        "desc": "Refers to a citation for the determination.",
        "items": [
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "determination",
                "type": "ManyToOne",
                "name": "Determination",
                "desc": "Determination being cited."
            },
            {
                "key": "figurenumber",
                "type": null,
                "name": "Figure Number",
                "desc": "Figure Number"
            },
            {
                "key": "isfigured",
                "type": null,
                "name": "Is Figured",
                "desc": "Is Figured"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "pagenumber",
                "type": null,
                "name": "Page Number",
                "desc": "Page Number"
            },
            {
                "key": "platenumber",
                "type": null,
                "name": "Plate Number",
                "desc": "Plate Number"
            },
            {
                "key": "referencework",
                "type": "ManyToOne",
                "name": "Reference Work",
                "desc": "ID of the publication citing the determination."
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "determiner",
        "name": "Determiner",
        "desc": "Individual who assigned or made the decision regarding the taxonomic name of specimen. In some instances, determiner may be an organization or institute. In Specify, determiner information is stored in the Agent table.",
        "items": [
            {
                "key": "agent",
                "type": "ManyToOne",
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "determination",
                "type": "ManyToOne",
                "name": "Determination",
                "desc": "Determination"
            },
            {
                "key": "isprimary",
                "type": null,
                "name": "Is Primary",
                "desc": "Is Primary"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordernumber",
                "type": "java.lang.Integer",
                "name": "Order Number",
                "desc": "The position in the list of determiners."
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional comments."
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            }
        ]
    },
    {
        "table": "discipline",
        "name": "Discipline",
        "desc": "May include one or more collections that share the Taxon, Geography, LithoStratigraphy, and Chronostratigraphy Trees, Localities, Agents and Determination Status.",
        "items": [
            {
                "key": "attributedefs",
                "type": null,
                "name": "Attribute Defs",
                "desc": "Attribute Defs"
            },
            {
                "key": "collections",
                "type": null,
                "name": "Collections",
                "desc": "Collections"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "datatype",
                "type": null,
                "name": "Data Type",
                "desc": "Data Type"
            },
            {
                "key": "division",
                "type": null,
                "name": "Division",
                "desc": "Division"
            },
            {
                "key": "geographytreedef",
                "type": null,
                "name": "Geography Tree Def",
                "desc": "Geography Tree Def"
            },
            {
                "key": "geologictimeperiodtreedef",
                "type": null,
                "name": "Chronostratigraphy Tree Def",
                "desc": "Chronostratigraphy Tree Def"
            },
            {
                "key": "ispaleocontextembedded",
                "type": null,
                "name": "Is Paleo Context Embedded",
                "desc": "Is Paleo Context Embedded"
            },
            {
                "key": "lithostrattreedef",
                "type": null,
                "name": "LithoStrat Tree Def",
                "desc": "LithoStrat Tree Def"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": null,
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "numberingschemes",
                "type": null,
                "name": "Numbering Schemes",
                "desc": "Numbering Schemes"
            },
            {
                "key": "paleocontextchildtable",
                "type": null,
                "name": "Paleo Context Child Table",
                "desc": "Paleo Context Child Table"
            },
            {
                "key": "regnumber",
                "type": null,
                "name": "Reg Number",
                "desc": "Reg Number"
            },
            {
                "key": "spexportschemas",
                "type": null,
                "name": "Sp Export Schemas",
                "desc": "Sp Export Schemas"
            },
            {
                "key": "splocalecontainers",
                "type": null,
                "name": "Sp Locale Containers",
                "desc": "Sp Locale Containers"
            },
            {
                "key": "taxontreedef",
                "type": null,
                "name": "Taxon Tree Def",
                "desc": "Taxon Tree Def"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "type",
                "type": null,
                "name": "Type",
                "desc": "Type"
            },
            {
                "key": "usergroups",
                "type": null,
                "name": "User Groups",
                "desc": "User Groups"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "disposal",
        "name": "Disposal",
        "desc": "Disposal",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "deaccession",
                "type": null,
                "name": "Deaccession",
                "desc": "Deaccession"
            },
            {
                "key": "disposalagents",
                "type": null,
                "name": "Disposal Agents",
                "desc": "Disposal Agents"
            },
            {
                "key": "disposalattachments",
                "type": null,
                "name": "Disposal Attachments",
                "desc": "Disposal Attachments"
            },
            {
                "key": "disposaldate",
                "type": null,
                "name": "Disposal Date",
                "desc": "Disposal Date"
            },
            {
                "key": "disposalnumber",
                "type": null,
                "name": "Disposal Number",
                "desc": "Disposal Number"
            },
            {
                "key": "disposalpreparations",
                "type": null,
                "name": "Disposal Preparations",
                "desc": "Disposal Preparations"
            },
            {
                "key": "donotexport",
                "type": null,
                "name": "Do Not Export",
                "desc": "Do Not Export"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Date Modified",
                "desc": "Date Modified"
            },
            {
                "key": "type",
                "type": null,
                "name": "Type",
                "desc": "Type"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            }
        ]
    },
    {
        "table": "disposalagent",
        "name": "Disposal Agent",
        "desc": "Disposal Agent",
        "items": [
            {
                "key": "agent",
                "type": null,
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "disposal",
                "type": null,
                "name": "Disposal",
                "desc": "Disposal"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "role",
                "type": null,
                "name": "Role",
                "desc": "Role"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "disposalattachment",
        "name": "Disposal Attachment",
        "desc": "Disposal Attachment",
        "items": [
            {
                "key": "attachment",
                "type": null,
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "disposal",
                "type": null,
                "name": "Disposal",
                "desc": "Disposal"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "disposalpreparation",
        "name": "Disposal Preparation",
        "desc": "Disposal Preparation",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "disposal",
                "type": null,
                "name": "Disposal",
                "desc": "Disposal"
            },
            {
                "key": "loanreturnpreparation",
                "type": null,
                "name": "Loan Return Preparation",
                "desc": "Loan Return Preparation"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "preparation",
                "type": null,
                "name": "Preparation",
                "desc": "Preparation"
            },
            {
                "key": "quantity",
                "type": null,
                "name": "Quantity",
                "desc": "Quantity"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "division",
        "name": "Division",
        "desc": "The division (or department) containing agents.",
        "items": [
            {
                "key": "abbrev",
                "type": "java.lang.String",
                "name": "Abbreviation",
                "desc": "The abbreviation for the division."
            },
            {
                "key": "address",
                "type": null,
                "name": "Address",
                "desc": "Address"
            },
            {
                "key": "altname",
                "type": null,
                "name": "Alt Name",
                "desc": "Alt Name"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "description",
                "type": null,
                "name": "Description",
                "desc": "Description"
            },
            {
                "key": "discipline",
                "type": "java.lang.String",
                "name": "Discipline",
                "desc": "The discipline of the division"
            },
            {
                "key": "disciplines",
                "type": null,
                "name": "Disciplines",
                "desc": "The list of Disciplines that belong to this Division"
            },
            {
                "key": "iconuri",
                "type": "java.lang.String",
                "name": "Icon URL",
                "desc": "The URL to their icon"
            },
            {
                "key": "institution",
                "type": null,
                "name": "Institution",
                "desc": "The institution the division belongs to."
            },
            {
                "key": "members",
                "type": "ManyToMany",
                "name": "Members",
                "desc": "Members"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "The name of the division"
            },
            {
                "key": "numberingschemes",
                "type": null,
                "name": "Numbering Schemes",
                "desc": "Numbering Schemes"
            },
            {
                "key": "regnumber",
                "type": null,
                "name": "Reg Number",
                "desc": "Reg Number"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "uri",
                "type": "java.lang.String",
                "name": "URL",
                "desc": "A URI (web site) address for the department"
            },
            {
                "key": "usergroups",
                "type": null,
                "name": "User Groups",
                "desc": "User Groups"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "dnaprimer",
        "name": "DNA Primer",
        "desc": "DNA Primer",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "dnasequencingruns",
                "type": null,
                "name": "DNA Sequencing Runs",
                "desc": "DNA Sequencing Runs"
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "primerdesignator",
                "type": null,
                "name": "Primer Designator",
                "desc": "Primer Designator"
            },
            {
                "key": "primernameforward",
                "type": null,
                "name": "Primer Name Forward",
                "desc": "Primer Name Forward"
            },
            {
                "key": "primernamereverse",
                "type": null,
                "name": "Primer Name Rev",
                "desc": "Primer Name Rev"
            },
            {
                "key": "primerreferencecitationforward",
                "type": null,
                "name": "Primer Ref Cit Forward",
                "desc": "Primer Ref Cit Forward"
            },
            {
                "key": "primerreferencecitationreverse",
                "type": null,
                "name": "Primer Ref Cit Rev",
                "desc": "Primer Ref Cit Rev"
            },
            {
                "key": "primerreferencelinkforward",
                "type": null,
                "name": "Primer Ref Link Forward",
                "desc": "Primer Ref Link Forward"
            },
            {
                "key": "primerreferencelinkreverse",
                "type": null,
                "name": "Primer Ref Link Rev",
                "desc": "Primer Ref Link Rev"
            },
            {
                "key": "primersequenceforward",
                "type": null,
                "name": "Primer Seq Forward",
                "desc": "Primer Seq Forward"
            },
            {
                "key": "primersequencereverse",
                "type": null,
                "name": "Primer Seq Rev",
                "desc": "Primer Seq Rev"
            },
            {
                "key": "purificationmethod",
                "type": null,
                "name": "Purification Method",
                "desc": "Purification Method"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "reservedinteger3",
                "type": null,
                "name": "Reserved Integer3",
                "desc": "Reserved Integer3"
            },
            {
                "key": "reservedinteger4",
                "type": null,
                "name": "Reserved Integer4",
                "desc": "Reserved Integer4"
            },
            {
                "key": "reservednumber3",
                "type": null,
                "name": "Reserved Number3",
                "desc": "Reserved Number3"
            },
            {
                "key": "reservednumber4",
                "type": null,
                "name": "Reserved Number4",
                "desc": "Reserved Number4"
            },
            {
                "key": "reservedtext3",
                "type": null,
                "name": "Reserved Text3",
                "desc": "Reserved Text3"
            },
            {
                "key": "reservedtext4",
                "type": null,
                "name": "Reserved Text4",
                "desc": "Reserved Text4"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            }
        ]
    },
    {
        "table": "dnasequence",
        "name": "DNA Sequence",
        "desc": "Tracks DNA Sequencing information for a Collection Object.",
        "items": [
            {
                "key": "ambiguousresidues",
                "type": null,
                "name": "Ambiguous",
                "desc": "Ambiguous"
            },
            {
                "key": "attachments",
                "type": null,
                "name": "DNA Sequence Attachments",
                "desc": "DNA Sequence Attachments"
            },
            {
                "key": "boldbarcodeid",
                "type": null,
                "name": "BOLD Number",
                "desc": "BOLD Number associated with the specimen"
            },
            {
                "key": "boldlastupdatedate",
                "type": null,
                "name": "BOLD Last Update",
                "desc": "BOLD Last Update"
            },
            {
                "key": "boldsampleid",
                "type": null,
                "name": "BOLD Sample Id",
                "desc": "BOLD Sample Id"
            },
            {
                "key": "boldtranslationmatrix",
                "type": null,
                "name": "Bold Translation Matrix",
                "desc": "Bold Translation Matrix"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "collectionobject",
                "type": null,
                "name": "Collection Object",
                "desc": "Collection Object"
            },
            {
                "key": "compa",
                "type": null,
                "name": "Comp A",
                "desc": "Comp A"
            },
            {
                "key": "compc",
                "type": null,
                "name": "Comp C",
                "desc": "Comp C"
            },
            {
                "key": "compg",
                "type": null,
                "name": "Comp G",
                "desc": "Comp G"
            },
            {
                "key": "compt",
                "type": null,
                "name": "Comp T",
                "desc": "Comp T"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "dnasequencingruns",
                "type": null,
                "name": "DNA Sequencing Runs",
                "desc": "DNA Sequencing Runs"
            },
            {
                "key": "extractiondate",
                "type": null,
                "name": "Extraction Date",
                "desc": "Extraction Date"
            },
            {
                "key": "extractiondateprecision",
                "type": null,
                "name": "Extraction Date Precision",
                "desc": "Extraction Date Precision"
            },
            {
                "key": "extractor",
                "type": null,
                "name": "Extractor",
                "desc": "Extractor"
            },
            {
                "key": "extractors",
                "type": null,
                "name": "Extractors",
                "desc": "Extractors"
            },
            {
                "key": "genbankaccessionnumber",
                "type": null,
                "name": "Genbank Number",
                "desc": "Genbank Number associated with the specimen"
            },
            {
                "key": "genesequence",
                "type": null,
                "name": "Gene Sequence",
                "desc": "The actual sequence"
            },
            {
                "key": "materialsample",
                "type": null,
                "name": "Material Sample",
                "desc": "Material Sample"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "moleculetype",
                "type": "java.lang.String",
                "name": "Molecule Type",
                "desc": "Molecule Type"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "number3",
                "type": null,
                "name": "Number3",
                "desc": "Number3"
            },
            {
                "key": "pcrpersons",
                "type": null,
                "name": "Pcr Persons",
                "desc": "Pcr Persons"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Associated Sequences (Legacy Data)",
                "desc": "Genbank and BOLD Number data from legacy DarwinCore Archive field"
            },
            {
                "key": "sequencedate",
                "type": null,
                "name": "Sequence Date",
                "desc": "Sequence Date"
            },
            {
                "key": "sequencedateprecision",
                "type": null,
                "name": "Sequence Date Precision",
                "desc": "Sequence Date Precision"
            },
            {
                "key": "sequencer",
                "type": null,
                "name": "Sequencer",
                "desc": "Sequencer"
            },
            {
                "key": "targetmarker",
                "type": null,
                "name": "Target Marker",
                "desc": "Target Marker"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Text3",
                "desc": "Text3"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "totalresidues",
                "type": null,
                "name": "Total Residues",
                "desc": "Total Residues"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            },
            {
                "key": "yesno3",
                "type": null,
                "name": "Yes No3",
                "desc": "Yes No3"
            }
        ]
    },
    {
        "table": "dnasequenceattachment",
        "name": "DNA Sequence Attachment",
        "desc": "Refers to an attachment and provides order.",
        "items": [
            {
                "key": "attachment",
                "type": null,
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "dnasequence",
                "type": null,
                "name": "DNA Sequence",
                "desc": "DNA Sequence"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "dnasequencerunattachment",
        "name": "DNA Sequencing Run Attachment",
        "desc": "DNA Sequencing Run Attachment",
        "items": [
            {
                "key": "attachment",
                "type": null,
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "dnasequencingrun",
                "type": null,
                "name": "DNA Sequencing Run",
                "desc": "DNA Sequencing Run"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "dnasequencingrun",
        "name": "DNA Sequencing Run",
        "desc": "DNA Sequencing Run",
        "items": [
            {
                "key": "attachments",
                "type": null,
                "name": "DNA Sequencing Run Attachments",
                "desc": "DNA Sequencing Run Attachments"
            },
            {
                "key": "citations",
                "type": null,
                "name": "Citations",
                "desc": "Citations"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "dnaprimer",
                "type": null,
                "name": "DNA Primer",
                "desc": "DNA Primer"
            },
            {
                "key": "dnasequence",
                "type": null,
                "name": "DNA Sequence",
                "desc": "DNA Sequence"
            },
            {
                "key": "dryaddoi",
                "type": null,
                "name": "Dryad DOI",
                "desc": "Dryad DOI"
            },
            {
                "key": "genesequence",
                "type": null,
                "name": "Gene Sequence",
                "desc": "Gene Sequence"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "number3",
                "type": null,
                "name": "Number3",
                "desc": "Number3"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "pcrcocktailprimer",
                "type": null,
                "name": "PCR Cocktail Primer",
                "desc": "PCR Cocktail Primer"
            },
            {
                "key": "pcrforwardprimercode",
                "type": null,
                "name": "PCR Forward Primer Code",
                "desc": "PCR Forward Primer Code"
            },
            {
                "key": "pcrprimername",
                "type": null,
                "name": "PCR Primer Name",
                "desc": "PCR Primer Name"
            },
            {
                "key": "pcrprimersequence5_3",
                "type": null,
                "name": "PCR Primer Seq5_3",
                "desc": "PCR Primer Sequence5_3"
            },
            {
                "key": "pcrreverseprimercode",
                "type": null,
                "name": "PCR Rev Primer Code",
                "desc": "PCR Rev Primer Code"
            },
            {
                "key": "preparedbyagent",
                "type": null,
                "name": "Prepared By Agent",
                "desc": "Prepared By Agent"
            },
            {
                "key": "readdirection",
                "type": null,
                "name": "Read Direction",
                "desc": "Read Direction"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "runbyagent",
                "type": null,
                "name": "Run By",
                "desc": "Run By"
            },
            {
                "key": "rundate",
                "type": null,
                "name": "Run Date",
                "desc": "Run Date"
            },
            {
                "key": "scorefilename",
                "type": null,
                "name": "Score File Name",
                "desc": "Score File Name"
            },
            {
                "key": "sequencecocktailprimer",
                "type": null,
                "name": "Seq Cocktail Primer",
                "desc": "Seq Cocktail Primer"
            },
            {
                "key": "sequenceprimercode",
                "type": null,
                "name": "Seq Primer Code",
                "desc": "Sequence Primer Code"
            },
            {
                "key": "sequenceprimername",
                "type": null,
                "name": "Seq Primer Name",
                "desc": "Sequence Primer Name"
            },
            {
                "key": "sequenceprimersequence5_3",
                "type": null,
                "name": "Seq Primer Seq5_3",
                "desc": "Sequence Primer Sequence5_3"
            },
            {
                "key": "sraexperimentid",
                "type": null,
                "name": "SRA Experiment ID",
                "desc": "SRA Experiment ID"
            },
            {
                "key": "srarunid",
                "type": null,
                "name": "SRA Run ID",
                "desc": "SRA Run ID"
            },
            {
                "key": "srasubmissionid",
                "type": null,
                "name": "SRA Submission ID",
                "desc": "SRA Submission ID"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Text3",
                "desc": "Text3"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "tracefilename",
                "type": null,
                "name": "Trace File Name",
                "desc": "Trace File Name"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            },
            {
                "key": "yesno3",
                "type": null,
                "name": "Yes No3",
                "desc": "Yes No3"
            }
        ]
    },
    {
        "table": "dnasequencingruncitation",
        "name": "DNA Sequencing Run Citation",
        "desc": "DNA Sequencing Run Citation",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "figurenumber",
                "type": null,
                "name": "Figure Number",
                "desc": "Figure Number"
            },
            {
                "key": "isfigured",
                "type": null,
                "name": "Is Figured",
                "desc": "Is Figured"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "pagenumber",
                "type": null,
                "name": "Page Number",
                "desc": "Page Number"
            },
            {
                "key": "platenumber",
                "type": null,
                "name": "Plate Number",
                "desc": "Plate Number"
            },
            {
                "key": "referencework",
                "type": null,
                "name": "Reference Work",
                "desc": "Reference Work"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "sequencingrun",
                "type": null,
                "name": "Sequencing Run",
                "desc": "Sequencing Run"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            }
        ]
    },
    {
        "table": "exchangein",
        "name": "Exchange In",
        "desc": "Describes an incoming Exchanged Specimen from a different institution.",
        "items": [
            {
                "key": "addressofrecord",
                "type": null,
                "name": "Address Of Record",
                "desc": "Address Of Record"
            },
            {
                "key": "agentcatalogedby",
                "type": "ManyToOne",
                "name": "Cataloged By",
                "desc": "Cataloged By"
            },
            {
                "key": "agentreceivedfrom",
                "type": "ManyToOne",
                "name": "Received From",
                "desc": "Received From"
            },
            {
                "key": "contents",
                "type": null,
                "name": "Contents",
                "desc": "Contents"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "descriptionofmaterial",
                "type": "java.lang.String",
                "name": "Description",
                "desc": "Description of material."
            },
            {
                "key": "division",
                "type": null,
                "name": "Division",
                "desc": "Division"
            },
            {
                "key": "exchangedate",
                "type": "java.util.Calendar",
                "name": "Exchange Date",
                "desc": "Date exchange was received."
            },
            {
                "key": "exchangeinattachments",
                "type": null,
                "name": "Exchange In Attachments",
                "desc": "Exchange In Attachments"
            },
            {
                "key": "exchangeinnumber",
                "type": null,
                "name": "Exchange In #",
                "desc": "Exchange In #"
            },
            {
                "key": "exchangeinpreps",
                "type": null,
                "name": "Exchange In Preps",
                "desc": "Exchange In Preps"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": "java.lang.Float",
                "name": "Number1",
                "desc": "User definable."
            },
            {
                "key": "number2",
                "type": "java.lang.Float",
                "name": "Number2",
                "desc": "User definable."
            },
            {
                "key": "quantityexchanged",
                "type": "java.lang.Short",
                "name": "Quantity Exch",
                "desc": "Number of items received."
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments."
            },
            {
                "key": "srcgeography",
                "type": null,
                "name": "Source Geography",
                "desc": "Source Geography"
            },
            {
                "key": "srctaxonomy",
                "type": null,
                "name": "Source Taxonomy",
                "desc": "Source Taxonomy"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable."
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "User definable."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "Yes No1",
                "desc": "User definable."
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "Yes No2",
                "desc": "User definable."
            }
        ]
    },
    {
        "table": "exchangeinattachment",
        "name": "Exchange In Attachment",
        "desc": "Exchange In Attachment",
        "items": [
            {
                "key": "attachment",
                "type": null,
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "exchangein",
                "type": null,
                "name": "Exchange In",
                "desc": "Exchange In"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "exchangeinprep",
        "name": "Exchange In Prep",
        "desc": "Exchange In Prep",
        "items": [
            {
                "key": "comments",
                "type": null,
                "name": "Comments",
                "desc": "Comments"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "descriptionofmaterial",
                "type": null,
                "name": "Description Of Material",
                "desc": "Description Of Material"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "exchangein",
                "type": null,
                "name": "Exchange In",
                "desc": "Exchange In"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "preparation",
                "type": null,
                "name": "Preparation",
                "desc": "Preparation"
            },
            {
                "key": "quantity",
                "type": null,
                "name": "Quantity",
                "desc": "Quantity"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "exchangeout",
        "name": "Exchange Out",
        "desc": "Describes an outgoing Exchanged Specimen to a different institution.",
        "items": [
            {
                "key": "addressofrecord",
                "type": null,
                "name": "Address Of Record",
                "desc": "Address Of Record"
            },
            {
                "key": "agentcatalogedby",
                "type": "ManyToOne",
                "name": "Cataloged By",
                "desc": "Agent ID of the person who recorded the exchange."
            },
            {
                "key": "agentsentto",
                "type": "ManyToOne",
                "name": "Sent To",
                "desc": "Sent To"
            },
            {
                "key": "contents",
                "type": null,
                "name": "Contents",
                "desc": "Contents"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "deaccession",
                "type": null,
                "name": "Deaccession",
                "desc": "Deaccession"
            },
            {
                "key": "descriptionofmaterial",
                "type": "java.lang.String",
                "name": "Description",
                "desc": "Description"
            },
            {
                "key": "division",
                "type": null,
                "name": "Division",
                "desc": "Division"
            },
            {
                "key": "exchangedate",
                "type": "java.util.Calendar",
                "name": "Exchange Date",
                "desc": "Date exchange was sent."
            },
            {
                "key": "exchangeoutattachments",
                "type": null,
                "name": "Exchange Out Attachments",
                "desc": "Exchange Out Attachments"
            },
            {
                "key": "exchangeoutnumber",
                "type": null,
                "name": "Exchange Out #",
                "desc": "Exchange Out #"
            },
            {
                "key": "exchangeoutpreps",
                "type": null,
                "name": "Exchange Out Preps",
                "desc": "Exchange Out Preps"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": "java.lang.Float",
                "name": "Number1",
                "desc": "User definable."
            },
            {
                "key": "number2",
                "type": "java.lang.Float",
                "name": "Number2",
                "desc": "User definable."
            },
            {
                "key": "quantityexchanged",
                "type": "java.lang.Short",
                "name": "Quantity Exch",
                "desc": "Number of items sent."
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments."
            },
            {
                "key": "shipments",
                "type": "ManyToMany",
                "name": "Shipments",
                "desc": "Shipments"
            },
            {
                "key": "srcgeography",
                "type": null,
                "name": "Source Geography",
                "desc": "Source Geography"
            },
            {
                "key": "srctaxonomy",
                "type": null,
                "name": "Source Taxonomy",
                "desc": "Source Taxonomy"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable."
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "User definable."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "Yes No1",
                "desc": "User definable."
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "Yes No2",
                "desc": "User definable."
            }
        ]
    },
    {
        "table": "exchangeoutattachment",
        "name": "Exchange Out Attachment",
        "desc": "Exchange Out Attachment",
        "items": [
            {
                "key": "attachment",
                "type": null,
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "exchangeout",
                "type": null,
                "name": "Exchange Out",
                "desc": "Exchange Out"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "exchangeoutprep",
        "name": "Exchange Out Prep",
        "desc": "Exchange Out Prep",
        "items": [
            {
                "key": "comments",
                "type": null,
                "name": "Comments",
                "desc": "Comments"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "descriptionofmaterial",
                "type": null,
                "name": "Description Of Material",
                "desc": "Description Of Material"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "exchangeout",
                "type": null,
                "name": "Exchange Out",
                "desc": "Exchange Out"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "preparation",
                "type": null,
                "name": "Preparation",
                "desc": "Preparation"
            },
            {
                "key": "quantity",
                "type": null,
                "name": "Quantity",
                "desc": "Quantity"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "exsiccata",
        "name": "Exsiccata",
        "desc": "Exsiccata",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "exsiccataitems",
                "type": null,
                "name": "Exsiccata Items",
                "desc": "Exsiccata Items"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "referencework",
                "type": null,
                "name": "Reference Work",
                "desc": "The monograph or journal in which the exsiccata is listed"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "schedae",
                "type": null,
                "name": "Schedae",
                "desc": "Schedae"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "title",
                "type": null,
                "name": "Title",
                "desc": "The title of the exsiccata"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "exsiccataitem",
        "name": "Exsiccata Item",
        "desc": "Exsiccata Item",
        "items": [
            {
                "key": "collectionobject",
                "type": null,
                "name": "Collection Object",
                "desc": "Collection Object"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "exsiccata",
                "type": null,
                "name": "Exsiccata",
                "desc": "The exsiccata to which the collection object belongs"
            },
            {
                "key": "fascicle",
                "type": null,
                "name": "Fascicle",
                "desc": "The fascicle number"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number",
                "type": null,
                "name": "Number",
                "desc": "The list number of the collection object within the exsiccata"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "extractor",
        "name": "Extractor",
        "desc": "Extractor",
        "items": [
            {
                "key": "agent",
                "type": null,
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "dnasequence",
                "type": null,
                "name": "DNA Sequences",
                "desc": "DNA Sequences"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordernumber",
                "type": null,
                "name": "Order Number",
                "desc": "Order Number"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            }
        ]
    },
    {
        "table": "fieldnotebook",
        "name": "Field Notebook",
        "desc": "Describes a physical Field NoteBook.",
        "items": [
            {
                "key": "attachments",
                "type": null,
                "name": "Field Notebook Attachments",
                "desc": "Field Notebook Attachments"
            },
            {
                "key": "collection",
                "type": null,
                "name": "Collection",
                "desc": "Collection"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "description",
                "type": null,
                "name": "Description",
                "desc": "Description"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "enddate",
                "type": null,
                "name": "End Date",
                "desc": "End Date"
            },
            {
                "key": "location",
                "type": null,
                "name": "Location",
                "desc": "Location"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": null,
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "owneragent",
                "type": null,
                "name": "Owner",
                "desc": "Owner"
            },
            {
                "key": "pagesets",
                "type": null,
                "name": "Page Sets",
                "desc": "Page Sets"
            },
            {
                "key": "startdate",
                "type": null,
                "name": "Start Date",
                "desc": "Start Date"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "fieldnotebookattachment",
        "name": "Field Notebook Attachment",
        "desc": "Refers to an attachment and provides order.",
        "items": [
            {
                "key": "attachment",
                "type": null,
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "fieldnotebook",
                "type": null,
                "name": "Field Notebook",
                "desc": "Field Notebook"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "fieldnotebookpage",
        "name": "Field Notebook Page",
        "desc": "Describes a page from a Field Note Book.",
        "items": [
            {
                "key": "attachments",
                "type": null,
                "name": "Field Notebook Page Attachments",
                "desc": "Field Notebook Page Attachments"
            },
            {
                "key": "collectionobjects",
                "type": null,
                "name": "Collection Objects",
                "desc": "Collection Objects"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "description",
                "type": null,
                "name": "Description",
                "desc": "Description"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "pagenumber",
                "type": null,
                "name": "Page Number",
                "desc": "Page Number"
            },
            {
                "key": "pageset",
                "type": null,
                "name": "Page Set",
                "desc": "Page Set"
            },
            {
                "key": "scandate",
                "type": null,
                "name": "Scan Date",
                "desc": "Scan Date"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "fieldnotebookpageattachment",
        "name": "Field Notebook Page Attachment",
        "desc": "Refers to an attachment and provides order.",
        "items": [
            {
                "key": "attachment",
                "type": null,
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "fieldnotebookpage",
                "type": null,
                "name": "Field Notebook Page",
                "desc": "Field Notebook Page"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "fieldnotebookpageset",
        "name": "Field Notebook Page Set",
        "desc": "Describes a set of Field Note Book pages. This can be used to group pages together that were scanned in together.",
        "items": [
            {
                "key": "attachments",
                "type": null,
                "name": "Field Notebook Page Set Attachments",
                "desc": "Field Notebook Page Set Attachments"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "description",
                "type": null,
                "name": "Description",
                "desc": "Description"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "enddate",
                "type": null,
                "name": "End Date",
                "desc": "End Date"
            },
            {
                "key": "fieldnotebook",
                "type": null,
                "name": "Field Notebook",
                "desc": "Field Notebook"
            },
            {
                "key": "method",
                "type": null,
                "name": "Method",
                "desc": "Method"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordernumber",
                "type": null,
                "name": "Order Number",
                "desc": "Order Number"
            },
            {
                "key": "pages",
                "type": null,
                "name": "Pages",
                "desc": "Pages"
            },
            {
                "key": "sourceagent",
                "type": null,
                "name": "Source Agent",
                "desc": "Source Agent"
            },
            {
                "key": "startdate",
                "type": null,
                "name": "Start Date",
                "desc": "Start Date"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "fieldnotebookpagesetattachment",
        "name": "Field Notebook Page Set Attachment",
        "desc": "Refers to an attachment and provides order.",
        "items": [
            {
                "key": "attachment",
                "type": null,
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "fieldnotebookpageset",
                "type": null,
                "name": "Field Notebook Page Set",
                "desc": "Field Notebook Page Set"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "fundingagent",
        "name": "Funding Agent",
        "desc": "Funding Agent",
        "items": [
            {
                "key": "agent",
                "type": null,
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "collectingtrip",
                "type": null,
                "name": "Collecting Trip",
                "desc": "Collecting Trip"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "division",
                "type": null,
                "name": "Division",
                "desc": "Division"
            },
            {
                "key": "isprimary",
                "type": null,
                "name": "Is Primary",
                "desc": "Is Primary"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordernumber",
                "type": null,
                "name": "Order Number",
                "desc": "Order Number"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "type",
                "type": null,
                "name": "Type",
                "desc": "Type"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "geocoorddetail",
        "name": "Geo Coord Detail",
        "desc": "Describes extra detail for a Locality for Manis data.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "errorpolygon",
                "type": null,
                "name": "Error Polygon",
                "desc": "Error Polygon"
            },
            {
                "key": "georefaccuracy",
                "type": null,
                "name": "Geo Ref Accuracy",
                "desc": "Geo Ref Accuracy"
            },
            {
                "key": "georefaccuracyunits",
                "type": null,
                "name": "Geo Ref Accuracy Units",
                "desc": "Geo Ref Accuracy Units"
            },
            {
                "key": "georefcompiledby",
                "type": null,
                "name": "Geo Ref Compiled By",
                "desc": "Geo Ref Compiled By"
            },
            {
                "key": "georefcompileddate",
                "type": null,
                "name": "Geo Ref Compiled Date",
                "desc": "Geo Ref Compiled Date"
            },
            {
                "key": "georefdetby",
                "type": null,
                "name": "Geo Ref Det By",
                "desc": "Geo Ref Det By"
            },
            {
                "key": "georefdetdate",
                "type": null,
                "name": "Geo Date",
                "desc": "Date the specimen was georeferenced"
            },
            {
                "key": "georefdetref",
                "type": null,
                "name": "Geo Source",
                "desc": "Source used for georeferencing procedure, e.g. BC Geographical Names, Google Earth"
            },
            {
                "key": "georefremarks",
                "type": null,
                "name": "Geo Ref Remarks",
                "desc": "Geo Ref Remarks"
            },
            {
                "key": "georefverificationstatus",
                "type": null,
                "name": "Geo Ref Verification Status",
                "desc": "Geo Ref Verification Status"
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "integer3",
                "type": null,
                "name": "Integer3",
                "desc": "Integer3"
            },
            {
                "key": "integer4",
                "type": null,
                "name": "Integer4",
                "desc": "Integer4"
            },
            {
                "key": "integer5",
                "type": null,
                "name": "Integer5",
                "desc": "Integer5"
            },
            {
                "key": "locality",
                "type": null,
                "name": "Locality",
                "desc": "Locality"
            },
            {
                "key": "maxuncertaintyest",
                "type": null,
                "name": "Verbatim Coordinate Uncertainty",
                "desc": "The coordinate uncertainty, as given on the specimen sheet"
            },
            {
                "key": "maxuncertaintyestunit",
                "type": null,
                "name": "Verbatim Coordinate Uncertainty Unit",
                "desc": "The coordinate uncertainty unit, as given on the specimen sheet"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "namedplaceextent",
                "type": null,
                "name": "Named Place Ext",
                "desc": "Named Place Ext"
            },
            {
                "key": "nogeorefbecause",
                "type": null,
                "name": "No Geo Ref Because",
                "desc": "No Geo Ref Because"
            },
            {
                "key": "number1",
                "type": "java.lang.Float",
                "name": "Number1",
                "desc": "User definable"
            },
            {
                "key": "number2",
                "type": "java.lang.Float",
                "name": "Number2",
                "desc": "User definable"
            },
            {
                "key": "number3",
                "type": "java.lang.Float",
                "name": "Number3",
                "desc": "User definable"
            },
            {
                "key": "number4",
                "type": "java.lang.Float",
                "name": "Number4",
                "desc": "User definable"
            },
            {
                "key": "number5",
                "type": "java.lang.Float",
                "name": "Number5",
                "desc": "User definable"
            },
            {
                "key": "originalcoordsystem",
                "type": null,
                "name": "Original Coord System",
                "desc": "Original Coord System"
            },
            {
                "key": "protocol",
                "type": null,
                "name": "Protocol",
                "desc": "Protocol"
            },
            {
                "key": "source",
                "type": null,
                "name": "Source",
                "desc": "Source"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Geo Reference Columns (Legacy Data)",
                "desc": "Legacy georeferenced coordinates and associated details"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Additional Geo Reference Details (Legacy Data)",
                "desc": "Additional legacy georeferenced coordinates and associated details"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Text3",
                "desc": "Text3"
            },
            {
                "key": "text4",
                "type": null,
                "name": "Text4",
                "desc": "Text4"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Text5",
                "desc": "Text5"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "uncertaintypolygon",
                "type": null,
                "name": "Uncertainty Polygon",
                "desc": "Uncertainty Polygon"
            },
            {
                "key": "validation",
                "type": null,
                "name": "Validation",
                "desc": "Validation"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "Yes No1",
                "desc": "User definable"
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "Yes No2",
                "desc": "User definable"
            },
            {
                "key": "yesno3",
                "type": "java.lang.Boolean",
                "name": "Yes No3",
                "desc": "User definable"
            },
            {
                "key": "yesno4",
                "type": "java.lang.Boolean",
                "name": "Yes No4",
                "desc": "User definable"
            },
            {
                "key": "yesno5",
                "type": "java.lang.Boolean",
                "name": "Yes No5",
                "desc": "User definable"
            }
        ]
    },
    {
        "table": "geography",
        "name": "Geography",
        "desc": "Represents political boundary (Country, State, County, Township, etc.).",
        "items": [
            {
                "key": "abbrev",
                "type": "java.lang.String",
                "name": "Abbreviation",
                "desc": "Abbreviation"
            },
            {
                "key": "acceptedchildren",
                "type": null,
                "name": "Synonyms",
                "desc": "Synonyms"
            },
            {
                "key": "acceptedgeography",
                "type": null,
                "name": "Preferred Geo",
                "desc": "Preferred Geo"
            },
            {
                "key": "centroidlat",
                "type": "java.math.BigDecimal",
                "name": "Centroid Latitude",
                "desc": "Centroid Latitude"
            },
            {
                "key": "centroidlon",
                "type": "java.math.BigDecimal",
                "name": "Centroid Longitude",
                "desc": "Centroid Longitude"
            },
            {
                "key": "children",
                "type": null,
                "name": "Child Nodes",
                "desc": "Child Nodes"
            },
            {
                "key": "commonname",
                "type": "java.lang.String",
                "name": "Common Name",
                "desc": "Common Name"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "definition",
                "type": "ManyToOne",
                "name": "Definition",
                "desc": "Definition"
            },
            {
                "key": "definitionitem",
                "type": "ManyToOne",
                "name": "Geographic Rank",
                "desc": "Geographic Rank"
            },
            {
                "key": "fullname",
                "type": "java.lang.String",
                "name": "Full Name",
                "desc": "Full Name"
            },
            {
                "key": "geographycode",
                "type": "java.lang.String",
                "name": "Geography Code",
                "desc": "Geography Code"
            },
            {
                "key": "gml",
                "type": "text",
                "name": "GML",
                "desc": "GML"
            },
            {
                "key": "guid",
                "type": null,
                "name": "GUID",
                "desc": "GUID"
            },
            {
                "key": "highestchildnodenumber",
                "type": "java.lang.Integer",
                "name": "Highest Child Node Number",
                "desc": "Highest Child Node Number"
            },
            {
                "key": "isaccepted",
                "type": "java.lang.Boolean",
                "name": "Is Preferred",
                "desc": "The preferred name of a synonym."
            },
            {
                "key": "iscurrent",
                "type": "java.lang.Boolean",
                "name": "Is Current",
                "desc": "`Yes` if the Name and/or Geographic/Political entity is currently valid."
            },
            {
                "key": "localities",
                "type": "OneToMany",
                "name": "Localities",
                "desc": "Localities"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "nodenumber",
                "type": "java.lang.Integer",
                "name": "Node Number",
                "desc": "Node Number"
            },
            {
                "key": "number1",
                "type": "java.lang.Integer",
                "name": "Number1",
                "desc": "User definable"
            },
            {
                "key": "number2",
                "type": "java.lang.Integer",
                "name": "Number2",
                "desc": "User definable"
            },
            {
                "key": "parent",
                "type": null,
                "name": "Parent of Geo",
                "desc": "Parent of Geo"
            },
            {
                "key": "rankid",
                "type": "java.lang.Integer",
                "name": "Rank Id",
                "desc": "Rank Id"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable."
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "User definable."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "timestampversion",
                "type": "java.util.Date",
                "name": "Timestamp Version",
                "desc": "Timestamp Version"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "geographytreedef",
        "name": "Geography Tree Definition",
        "desc": "Defines the levels of the Geography tree.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "discipline",
                "type": "ManyToOne",
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "disciplines",
                "type": "OneToMany",
                "name": "Disciplines",
                "desc": "Disciplines"
            },
            {
                "key": "fullnamedirection",
                "type": "java.lang.Integer",
                "name": "Full Name Direction",
                "desc": "Full Name Direction"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments."
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "treedefitems",
                "type": "OneToMany",
                "name": "Tree Def Items",
                "desc": "Tree Def Items"
            },
            {
                "key": "treeentries",
                "type": "OneToMany",
                "name": "Tree Entries",
                "desc": "Tree Entries"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "geographytreedefitem",
        "name": "Geography Tree Definition Item",
        "desc": "Describes a level in the definition of the tree.",
        "items": [
            {
                "key": "children",
                "type": null,
                "name": "Child Nodes",
                "desc": "Child Nodes"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "fullnameseparator",
                "type": "java.lang.String",
                "name": "Full Name Separator",
                "desc": "Full Name Separator"
            },
            {
                "key": "isenforced",
                "type": "java.lang.Boolean",
                "name": "Is Enforced",
                "desc": "Is Enforced"
            },
            {
                "key": "isinfullname",
                "type": "java.lang.Boolean",
                "name": "Is In Full Name",
                "desc": "Is In Full Name"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "parent",
                "type": null,
                "name": "Parent",
                "desc": "Parent"
            },
            {
                "key": "rankid",
                "type": "java.lang.Integer",
                "name": "Rank Id",
                "desc": "Rank Id"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments."
            },
            {
                "key": "textafter",
                "type": "java.lang.String",
                "name": "Text After",
                "desc": "User definable."
            },
            {
                "key": "textbefore",
                "type": "java.lang.String",
                "name": "Text Before",
                "desc": "User definable."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "title",
                "type": null,
                "name": "Title",
                "desc": "Title"
            },
            {
                "key": "treedef",
                "type": "ManyToOne",
                "name": "Tree Definition",
                "desc": "Tree Definition"
            },
            {
                "key": "treeentries",
                "type": "OneToMany",
                "name": "Tree Entries",
                "desc": "Tree Entries"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "geologictimeperiod",
        "name": "Chronostratigraphy",
        "desc": "Describes Chronostratigraphy.",
        "items": [
            {
                "key": "acceptedchildren",
                "type": null,
                "name": "Synonyms",
                "desc": "Synonyms"
            },
            {
                "key": "acceptedgeologictimeperiod",
                "type": null,
                "name": "Preferred Chronostratigraphy",
                "desc": "Preferred Chronostratigraphy"
            },
            {
                "key": "biostratspaleocontext",
                "type": "OneToMany",
                "name": "Bio Strats Paleo Context",
                "desc": "Bio Strats Paleo Context"
            },
            {
                "key": "children",
                "type": null,
                "name": "Child Nodes",
                "desc": "Child Nodes"
            },
            {
                "key": "chronosstratspaleocontext",
                "type": "OneToMany",
                "name": "Chronos Strats Paleo Context",
                "desc": "Chronos Strats Paleo Context"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "definition",
                "type": "ManyToOne",
                "name": "Definition",
                "desc": "Definition"
            },
            {
                "key": "definitionitem",
                "type": "ManyToOne",
                "name": "Rank",
                "desc": "Rank"
            },
            {
                "key": "endperiod",
                "type": "java.lang.Float",
                "name": "End Period",
                "desc": "End Period"
            },
            {
                "key": "enduncertainty",
                "type": "java.lang.Float",
                "name": "End Uncertainty",
                "desc": "End Uncertainty"
            },
            {
                "key": "fullname",
                "type": "java.lang.String",
                "name": "Full Name",
                "desc": "Full Name"
            },
            {
                "key": "guid",
                "type": "java.lang.String",
                "name": "GUID",
                "desc": "GUID"
            },
            {
                "key": "highestchildnodenumber",
                "type": "java.lang.Integer",
                "name": "Highest Child Node Number",
                "desc": "Highest Child Node Number"
            },
            {
                "key": "isaccepted",
                "type": "java.lang.Boolean",
                "name": "Is Preferred",
                "desc": "Is Preferred"
            },
            {
                "key": "isbiostrat",
                "type": null,
                "name": "Is BioStratigraphy",
                "desc": "Is BioStratigraphy"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "nodenumber",
                "type": "java.lang.Integer",
                "name": "Node Number",
                "desc": "Node Number"
            },
            {
                "key": "parent",
                "type": null,
                "name": "Parent",
                "desc": "Parent"
            },
            {
                "key": "rankid",
                "type": "java.lang.Integer",
                "name": "Rank Id",
                "desc": "Numeric representation of Items rank in the stratigraphic hierarchy."
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments."
            },
            {
                "key": "standard",
                "type": "java.lang.String",
                "name": "Standard",
                "desc": "The system of Stratigraphy the record is included in."
            },
            {
                "key": "startperiod",
                "type": "java.lang.Float",
                "name": "Start Period",
                "desc": "Start Period"
            },
            {
                "key": "startuncertainty",
                "type": "java.lang.Float",
                "name": "Start Uncertainty",
                "desc": "Start Uncertainty"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "geologictimeperiodtreedef",
        "name": "Geological Time Period Tree Definition",
        "desc": "Defines the levels of the GTP tree.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "discipline",
                "type": "ManyToOne",
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "disciplines",
                "type": "OneToMany",
                "name": "Disciplines",
                "desc": "Disciplines"
            },
            {
                "key": "fullnamedirection",
                "type": "java.lang.Integer",
                "name": "Full Name Direction",
                "desc": "Full Name Direction"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments."
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "treedefitems",
                "type": "OneToMany",
                "name": "Tree Def Items",
                "desc": "Tree Def Items"
            },
            {
                "key": "treeentries",
                "type": "OneToMany",
                "name": "Tree Entries",
                "desc": "Tree Entries"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "geologictimeperiodtreedefitem",
        "name": "Geological Time Period Tree Definition Item",
        "desc": "Describes a level in the definition of the tree.",
        "items": [
            {
                "key": "children",
                "type": null,
                "name": "Child Nodes",
                "desc": "Child Nodes"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "fullnameseparator",
                "type": "java.lang.String",
                "name": "Full Name Separator",
                "desc": "Full Name Separator"
            },
            {
                "key": "isenforced",
                "type": "java.lang.Boolean",
                "name": "Is Enforced",
                "desc": "Is Enforced"
            },
            {
                "key": "isinfullname",
                "type": "java.lang.Boolean",
                "name": "Is In Full Name",
                "desc": "Is In Full Name"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "parent",
                "type": null,
                "name": "Parent",
                "desc": "Parent"
            },
            {
                "key": "rankid",
                "type": "java.lang.Integer",
                "name": "Rank Id",
                "desc": "Rank Id"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments."
            },
            {
                "key": "textafter",
                "type": "java.lang.String",
                "name": "Text After",
                "desc": "User definable."
            },
            {
                "key": "textbefore",
                "type": "java.lang.String",
                "name": "Text Before",
                "desc": "User definable."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "title",
                "type": null,
                "name": "Title",
                "desc": "Title"
            },
            {
                "key": "treedef",
                "type": "ManyToOne",
                "name": "Tree Definition",
                "desc": "Tree Definition"
            },
            {
                "key": "treeentries",
                "type": "OneToMany",
                "name": "Tree Entries",
                "desc": "Tree Entries"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "gift",
        "name": "Gift",
        "desc": "Describes a Gift.",
        "items": [
            {
                "key": "addressofrecord",
                "type": null,
                "name": "Address Of Record",
                "desc": "Address Of Record"
            },
            {
                "key": "contents",
                "type": null,
                "name": "Contents",
                "desc": "Contents"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "date1",
                "type": null,
                "name": "Date1",
                "desc": "Date1"
            },
            {
                "key": "date1precision",
                "type": null,
                "name": "Date1 Precision",
                "desc": "Date1 Precision"
            },
            {
                "key": "datereceived",
                "type": null,
                "name": "Date Received",
                "desc": "Date Received"
            },
            {
                "key": "deaccession",
                "type": null,
                "name": "Deaccession",
                "desc": "Deaccession"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "division",
                "type": null,
                "name": "Division",
                "desc": "Division"
            },
            {
                "key": "giftagents",
                "type": null,
                "name": "Gift Agents",
                "desc": "Gift Agents"
            },
            {
                "key": "giftattachments",
                "type": null,
                "name": "Gift Attachments",
                "desc": "Gift Attachments"
            },
            {
                "key": "giftdate",
                "type": null,
                "name": "Gift Date",
                "desc": "Gift Date"
            },
            {
                "key": "giftnumber",
                "type": "java.lang.String",
                "name": "Gift Number",
                "desc": "Gift Number"
            },
            {
                "key": "giftpreparations",
                "type": null,
                "name": "Gift Preparations",
                "desc": "Gift Preparations"
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "integer3",
                "type": null,
                "name": "Integer3",
                "desc": "Integer3"
            },
            {
                "key": "isfinancialresponsibility",
                "type": null,
                "name": "Is Financial Responsibility",
                "desc": "Is Financial Responsibility"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "User-defined."
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "purposeofgift",
                "type": null,
                "name": "Purpose Of Gift",
                "desc": "Purpose Of Gift"
            },
            {
                "key": "receivedcomments",
                "type": null,
                "name": "Received Comments",
                "desc": "Received Comments"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "shipments",
                "type": null,
                "name": "Shipments",
                "desc": "Shipments"
            },
            {
                "key": "specialconditions",
                "type": null,
                "name": "Special Conditions",
                "desc": "Special Conditions"
            },
            {
                "key": "srcgeography",
                "type": null,
                "name": "Source Geography",
                "desc": "Source Geography"
            },
            {
                "key": "srctaxonomy",
                "type": null,
                "name": "Source Taxonomy",
                "desc": "Source Taxonomy"
            },
            {
                "key": "status",
                "type": null,
                "name": "Status",
                "desc": "Status"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "User definable."
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "User definable."
            },
            {
                "key": "text3",
                "type": null,
                "name": "Text3",
                "desc": "Text3"
            },
            {
                "key": "text4",
                "type": null,
                "name": "Text4",
                "desc": "Text4"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Text5",
                "desc": "Text5"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            }
        ]
    },
    {
        "table": "giftagent",
        "name": "Gift Agent",
        "desc": "Describes the role the Agent played in the giving of a Gift.",
        "items": [
            {
                "key": "agent",
                "type": null,
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "date1",
                "type": null,
                "name": "Date1",
                "desc": "Date1"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "gift",
                "type": null,
                "name": "Gift",
                "desc": "Gift"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "role",
                "type": null,
                "name": "Role",
                "desc": "Role"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "giftattachment",
        "name": "Gift Attachment",
        "desc": "Gift Attachment",
        "items": [
            {
                "key": "attachment",
                "type": null,
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "gift",
                "type": null,
                "name": "Gift",
                "desc": "Gift"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "giftpreparation",
        "name": "Gift Preparation",
        "desc": "Points a gift to a preparation.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "descriptionofmaterial",
                "type": null,
                "name": "Description",
                "desc": "Description"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "gift",
                "type": null,
                "name": "Gift",
                "desc": "Gift"
            },
            {
                "key": "incomments",
                "type": null,
                "name": "In Comments",
                "desc": "In Comments"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "outcomments",
                "type": null,
                "name": "Out Comments",
                "desc": "Out Comments"
            },
            {
                "key": "preparation",
                "type": null,
                "name": "Preparation",
                "desc": "Preparation"
            },
            {
                "key": "quantity",
                "type": null,
                "name": "Quantity",
                "desc": "Number of preparations included in the gift."
            },
            {
                "key": "receivedcomments",
                "type": null,
                "name": "Received Comments",
                "desc": "Received Comments"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable."
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "User definable."
            },
            {
                "key": "text3",
                "type": "java.lang.String",
                "name": "Text3",
                "desc": "User definable."
            },
            {
                "key": "text4",
                "type": "java.lang.String",
                "name": "Text4",
                "desc": "User definable."
            },
            {
                "key": "text5",
                "type": "java.lang.String",
                "name": "Text5",
                "desc": "User definable."
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "groupperson",
        "name": "Group Person",
        "desc": "This is a join table for Agents that are Institutions and Organizations that contain other Agents. It also provides order.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "division",
                "type": null,
                "name": "Division",
                "desc": "Division"
            },
            {
                "key": "group",
                "type": "ManyToOne",
                "name": "Group",
                "desc": "Agent ID of group."
            },
            {
                "key": "member",
                "type": "ManyToOne",
                "name": "Member",
                "desc": "Agent ID of member (member must be of type Person)."
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordernumber",
                "type": "java.lang.Short",
                "name": "Order Number",
                "desc": "Members position in the group; i.e. 1st, 2nd, 3rd."
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "inforequest",
        "name": "Information Request",
        "desc": "Describes a request for information on a collection and refers to a Bundle of Collection Objects.",
        "items": [
            {
                "key": "agent",
                "type": "ManyToOne",
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "email",
                "type": "java.lang.String",
                "name": "Email",
                "desc": "Email"
            },
            {
                "key": "firstname",
                "type": "java.lang.String",
                "name": "First Name",
                "desc": "First Name"
            },
            {
                "key": "inforeqnumber",
                "type": "java.lang.String",
                "name": "Info Req Number",
                "desc": "Number of Information Request."
            },
            {
                "key": "institution",
                "type": "java.lang.String",
                "name": "Institution",
                "desc": "Institution"
            },
            {
                "key": "lastname",
                "type": "java.lang.String",
                "name": "Last Name",
                "desc": "Last Name"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "recordsets",
                "type": null,
                "name": "Items",
                "desc": "Items"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments."
            },
            {
                "key": "replydate",
                "type": "java.util.Calendar",
                "name": "Reply Date",
                "desc": "Reply Date"
            },
            {
                "key": "requestdate",
                "type": "java.util.Calendar",
                "name": "Request Date",
                "desc": "Request Date"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "institution",
        "name": "Institution",
        "desc": "The parent institution. An institution is made up of one or more divisions.",
        "items": [
            {
                "key": "address",
                "type": null,
                "name": "Address",
                "desc": "Address"
            },
            {
                "key": "altname",
                "type": null,
                "name": "Alt Name",
                "desc": "Alt Name"
            },
            {
                "key": "code",
                "type": null,
                "name": "Code",
                "desc": "Code"
            },
            {
                "key": "contentcontacts",
                "type": "OneToMany",
                "name": "Content Contacts",
                "desc": "Content Contacts"
            },
            {
                "key": "copyright",
                "type": "text",
                "name": "Copyright",
                "desc": "Copyright"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "currentmanagedrelversion",
                "type": null,
                "name": "Current Managed Rel Version",
                "desc": "Current Managed Rel Version"
            },
            {
                "key": "currentmanagedschemaversion",
                "type": null,
                "name": "Current Managed Schema Version",
                "desc": "Current Managed Schema Version"
            },
            {
                "key": "description",
                "type": null,
                "name": "Description",
                "desc": "Description"
            },
            {
                "key": "disclaimer",
                "type": "text",
                "name": "Disclaimer",
                "desc": "Disclaimer statement, e.g. concerning responsibility for data quality or legal implications."
            },
            {
                "key": "divisions",
                "type": null,
                "name": "Divisions",
                "desc": "Divisions"
            },
            {
                "key": "guid",
                "type": null,
                "name": "GUID",
                "desc": "GUID"
            },
            {
                "key": "hasbeenasked",
                "type": null,
                "name": "Has Been Asked",
                "desc": "Has Been Asked"
            },
            {
                "key": "iconuri",
                "type": "java.lang.String",
                "name": "Icon URL",
                "desc": "Icon URL"
            },
            {
                "key": "ipr",
                "type": "text",
                "name": "IPR",
                "desc": "A sequence of statements related to Intellectual Property Rights, credit and acknowledgment."
            },
            {
                "key": "isaccessionsglobal",
                "type": null,
                "name": "Are Accessions Global",
                "desc": "Are Accessions Global"
            },
            {
                "key": "isanonymous",
                "type": null,
                "name": "Is Anonymous",
                "desc": "Is Anonymous"
            },
            {
                "key": "isreleasemanagedglobally",
                "type": null,
                "name": "Is Release Managed Globally",
                "desc": "Is Release Managed Globally"
            },
            {
                "key": "issecurityon",
                "type": null,
                "name": "Is Security On",
                "desc": "Is Security On"
            },
            {
                "key": "isserverbased",
                "type": null,
                "name": "Is Server Based",
                "desc": "Is Server Based"
            },
            {
                "key": "issharinglocalities",
                "type": null,
                "name": "Is Sharing Localities",
                "desc": "Is Sharing Localities"
            },
            {
                "key": "issinglegeographytree",
                "type": null,
                "name": "Is Single Geography Tree",
                "desc": "Is Single Geography Tree"
            },
            {
                "key": "license",
                "type": null,
                "name": "License",
                "desc": "License"
            },
            {
                "key": "lsidauthority",
                "type": null,
                "name": "LSID Authority",
                "desc": "LSID Authority"
            },
            {
                "key": "minimumpwdlength",
                "type": null,
                "name": "Minimum Pwd Length",
                "desc": "Minimum Pwd Length"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "regnumber",
                "type": null,
                "name": "Reg Number",
                "desc": "Reg Number"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "storagetreedef",
                "type": null,
                "name": "Storage Tree Def",
                "desc": "Storage Tree Def"
            },
            {
                "key": "technicalcontacts",
                "type": "OneToMany",
                "name": "Technical Contacts",
                "desc": "Technical Contacts"
            },
            {
                "key": "termsofuse",
                "type": "text",
                "name": "Terms Of Use",
                "desc": "Defines conditions under which the data may be analyzed, distributed or changed. \"Terms of use\" includes concepts like \"Usage conditions\" and \"Specific Restrictions\"."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "uri",
                "type": "java.lang.String",
                "name": "URL",
                "desc": "URL"
            },
            {
                "key": "usergroups",
                "type": null,
                "name": "User Groups",
                "desc": "User Groups"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "institutionnetwork",
        "name": "Institution Network",
        "desc": "Institution Network",
        "items": [
            {
                "key": "address",
                "type": null,
                "name": "Address",
                "desc": "Address"
            },
            {
                "key": "altname",
                "type": null,
                "name": "Alt Name",
                "desc": "Alt Name"
            },
            {
                "key": "code",
                "type": null,
                "name": "Code",
                "desc": "Code"
            },
            {
                "key": "collections",
                "type": null,
                "name": "Collections",
                "desc": "Collections"
            },
            {
                "key": "contacts",
                "type": null,
                "name": "Contacts",
                "desc": "Contacts"
            },
            {
                "key": "copyright",
                "type": null,
                "name": "Copyright",
                "desc": "Copyright"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "description",
                "type": null,
                "name": "Description",
                "desc": "Description"
            },
            {
                "key": "disclaimer",
                "type": null,
                "name": "Disclaimer",
                "desc": "Disclaimer"
            },
            {
                "key": "iconuri",
                "type": null,
                "name": "Icon URI",
                "desc": "Icon URI"
            },
            {
                "key": "ipr",
                "type": null,
                "name": "Ipr",
                "desc": "Ipr"
            },
            {
                "key": "license",
                "type": null,
                "name": "License",
                "desc": "License"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": null,
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "termsofuse",
                "type": null,
                "name": "Terms Of Use",
                "desc": "Terms Of Use"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "uri",
                "type": null,
                "name": "Uri",
                "desc": "Uri"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "journal",
        "name": "Journal",
        "desc": "Refers to a published journal.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "guid",
                "type": null,
                "name": "GUID",
                "desc": "GUID"
            },
            {
                "key": "institution",
                "type": null,
                "name": "Institution",
                "desc": "Institution"
            },
            {
                "key": "issn",
                "type": null,
                "name": "ISSN",
                "desc": "ISSN"
            },
            {
                "key": "journalabbreviation",
                "type": "java.lang.String",
                "name": "Journal Abbreviation",
                "desc": "Journal Abbreviation"
            },
            {
                "key": "journalname",
                "type": "java.lang.String",
                "name": "Journal Name",
                "desc": "Full name of the journal."
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "referenceworks",
                "type": "OneToMany",
                "name": "Reference Works",
                "desc": "Reference Works"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "User definable."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "latlonpolygon",
        "name": "Lat Lon Polygon",
        "desc": "Lat Lon Polygon",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "description",
                "type": null,
                "name": "Description",
                "desc": "Description"
            },
            {
                "key": "ispolyline",
                "type": null,
                "name": "Is Polyline",
                "desc": "Is Polyline"
            },
            {
                "key": "locality",
                "type": null,
                "name": "Locality",
                "desc": "Locality"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": null,
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "points",
                "type": null,
                "name": "Points",
                "desc": "Points"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "visualquery",
                "type": null,
                "name": "Visual Query",
                "desc": "Visual Query"
            }
        ]
    },
    {
        "table": "latlonpolygonpnt",
        "name": "Lat Lon Polygon Pnt",
        "desc": "Lat Lon Polygon Pnt",
        "items": [
            {
                "key": "elevation",
                "type": null,
                "name": "Elevation",
                "desc": "Elevation"
            },
            {
                "key": "latitude",
                "type": null,
                "name": "Latitude",
                "desc": "Latitude"
            },
            {
                "key": "latlonpolygon",
                "type": null,
                "name": "Lat Lon Polygon",
                "desc": "Lat Lon Polygon"
            },
            {
                "key": "longitude",
                "type": null,
                "name": "Longitude",
                "desc": "Longitude"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Ordinal"
            }
        ]
    },
    {
        "table": "libraryrole",
        "name": "Library Role",
        "desc": "Stores names and descriptions of default roles that can be added to any collection.",
        "items": [
            {
                "key": "description",
                "type": "text",
                "name": "description",
                "desc": "Description"
            },
            {
                "key": "libraryroleid",
                "type": "java.lang.Integer",
                "name": "libraryRoleId",
                "desc": "Library role id"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "name",
                "desc": "Name"
            }
        ]
    },
    {
        "table": "libraryrolepolicy",
        "name": "Library Role Policy",
        "desc": "Stores resource and action permissions for library roles within a collection.",
        "items": [
            {
                "key": "action",
                "type": "java.lang.String",
                "name": "action",
                "desc": "Action"
            },
            {
                "key": "libraryrolepolicyid",
                "type": "java.lang.Integer",
                "name": "libraryRolePolicyId",
                "desc": "Library role policy id"
            },
            {
                "key": "resource",
                "type": "java.lang.String",
                "name": "resource",
                "desc": "Resource"
            },
            {
                "key": "role",
                "type": "ManyToOne",
                "name": "role",
                "desc": "Role"
            }
        ]
    },
    {
        "table": "lithostrat",
        "name": "Lithostratigraphy",
        "desc": "The Lithostratigraphy tree.",
        "items": [
            {
                "key": "acceptedchildren",
                "type": null,
                "name": "Synonyms",
                "desc": "Synonyms"
            },
            {
                "key": "acceptedlithostrat",
                "type": null,
                "name": "Preferred LithoStrat",
                "desc": "Preferred LithoStrat"
            },
            {
                "key": "children",
                "type": null,
                "name": "Child Nodes",
                "desc": "Child Nodes"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "definition",
                "type": "ManyToOne",
                "name": "Definition",
                "desc": "Definition"
            },
            {
                "key": "definitionitem",
                "type": "ManyToOne",
                "name": "Rank",
                "desc": "Rank"
            },
            {
                "key": "fullname",
                "type": "java.lang.String",
                "name": "Full Name",
                "desc": "Full Name"
            },
            {
                "key": "guid",
                "type": "java.lang.String",
                "name": "GUID",
                "desc": "GUID"
            },
            {
                "key": "highestchildnodenumber",
                "type": "java.lang.Integer",
                "name": "Highest Child Node Number",
                "desc": "Highest Child Node Number"
            },
            {
                "key": "isaccepted",
                "type": "java.lang.Boolean",
                "name": "Is Preferred",
                "desc": "Is Preferred"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "nodenumber",
                "type": "java.lang.Integer",
                "name": "Node Number",
                "desc": "Node Number"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "paleocontexts",
                "type": "OneToMany",
                "name": "Paleo Contexts",
                "desc": "Paleo Contexts"
            },
            {
                "key": "parent",
                "type": null,
                "name": "Parent",
                "desc": "Parent"
            },
            {
                "key": "rankid",
                "type": "java.lang.Integer",
                "name": "Rank Id",
                "desc": "Rank Id"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments."
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            }
        ]
    },
    {
        "table": "lithostrattreedef",
        "name": "Lithostratigraphy Tree Definition",
        "desc": "Defines the levels of the tree.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "discipline",
                "type": "ManyToOne",
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "disciplines",
                "type": "OneToMany",
                "name": "Disciplines",
                "desc": "Disciplines"
            },
            {
                "key": "fullnamedirection",
                "type": "java.lang.Integer",
                "name": "Full Name Direction",
                "desc": "Full Name Direction"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments."
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "treedefitems",
                "type": "OneToMany",
                "name": "Tree Def Items",
                "desc": "Tree Def Items"
            },
            {
                "key": "treeentries",
                "type": "OneToMany",
                "name": "Tree Entries",
                "desc": "Tree Entries"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "lithostrattreedefitem",
        "name": "Lithostratigraphy Tree Definition Item",
        "desc": "Describes a level in the definition of the tree.",
        "items": [
            {
                "key": "children",
                "type": null,
                "name": "Children",
                "desc": "Children"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "fullnameseparator",
                "type": "java.lang.String",
                "name": "Full Name Separator",
                "desc": "Full Name Separator"
            },
            {
                "key": "isenforced",
                "type": "java.lang.Boolean",
                "name": "Is Enforced",
                "desc": "Is Enforced"
            },
            {
                "key": "isinfullname",
                "type": "java.lang.Boolean",
                "name": "Is In Full Name",
                "desc": "Is In Full Name"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "parent",
                "type": null,
                "name": "Parent",
                "desc": "Parent"
            },
            {
                "key": "rankid",
                "type": "java.lang.Integer",
                "name": "Rank Id",
                "desc": "Rank Id"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "textafter",
                "type": "java.lang.String",
                "name": "Text After",
                "desc": "User definable"
            },
            {
                "key": "textbefore",
                "type": "java.lang.String",
                "name": "Text Before",
                "desc": "User definable"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "title",
                "type": null,
                "name": "Title",
                "desc": "Title"
            },
            {
                "key": "treedef",
                "type": "ManyToOne",
                "name": "Tree Def",
                "desc": "Tree Def"
            },
            {
                "key": "treeentries",
                "type": "OneToMany",
                "name": "Tree Entries",
                "desc": "Tree Entries"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "loan",
        "name": "Loan",
        "desc": "A group of specimens that another institution borrows from your collection. Specify lets you manage all aspects of loans electronically so that you always have an up-to-date record of which specimen have been loaned and which have been returned.",
        "items": [
            {
                "key": "addressofrecord",
                "type": null,
                "name": "Address Of Record",
                "desc": "Address Of Record"
            },
            {
                "key": "contents",
                "type": null,
                "name": "Contents",
                "desc": "Contents"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "currentduedate",
                "type": "java.util.Calendar",
                "name": "Current Due Date",
                "desc": "Date the loan is due for return (Same as original Due date unless loan period has been extended)."
            },
            {
                "key": "dateclosed",
                "type": "java.util.Calendar",
                "name": "Date Closed",
                "desc": "Date loan was closed."
            },
            {
                "key": "datereceived",
                "type": null,
                "name": "Date Received",
                "desc": "Date Received"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "division",
                "type": null,
                "name": "Division",
                "desc": "Division"
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "integer3",
                "type": null,
                "name": "Integer3",
                "desc": "Integer3"
            },
            {
                "key": "isclosed",
                "type": "java.lang.Boolean",
                "name": "Is Closed",
                "desc": "'No' until all preparations in the loan have been returned/resolved."
            },
            {
                "key": "isfinancialresponsibility",
                "type": null,
                "name": "Is Financial Responsibility",
                "desc": "Is Financial Responsibility"
            },
            {
                "key": "loanagents",
                "type": "OneToMany",
                "name": "Loan Agents",
                "desc": "Loan Agents"
            },
            {
                "key": "loanattachments",
                "type": "OneToMany",
                "name": "Loan Attachments",
                "desc": "Loan Attachments"
            },
            {
                "key": "loandate",
                "type": "java.util.Calendar",
                "name": "Loan Date",
                "desc": "Date the Loan was created."
            },
            {
                "key": "loannumber",
                "type": "java.lang.String",
                "name": "Loan Number",
                "desc": "A field that contains a record of the loan number and which is automatically incremented when a loan is made."
            },
            {
                "key": "loanpreparations",
                "type": "OneToMany",
                "name": "Loan Preparations",
                "desc": "Preparations included in the loan."
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": "java.lang.Float",
                "name": "Number1",
                "desc": "User definable."
            },
            {
                "key": "number2",
                "type": "java.lang.Float",
                "name": "Number2",
                "desc": "User definable."
            },
            {
                "key": "originalduedate",
                "type": "java.util.Calendar",
                "name": "Original Due Date",
                "desc": "Date the loan was originally due."
            },
            {
                "key": "overduenotisentdate",
                "type": null,
                "name": "Overdue Noti Sent Date",
                "desc": "Overdue Noti Sent Date"
            },
            {
                "key": "purposeofloan",
                "type": null,
                "name": "Purpose Of Loan",
                "desc": "Purpose Of Loan"
            },
            {
                "key": "receivedcomments",
                "type": null,
                "name": "Received Comments",
                "desc": "Received Comments"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "shipments",
                "type": "ManyToMany",
                "name": "Shipments",
                "desc": "Link to Shipments table."
            },
            {
                "key": "specialconditions",
                "type": null,
                "name": "Special Conditions",
                "desc": "Special Conditions"
            },
            {
                "key": "srcgeography",
                "type": null,
                "name": "Source Geography",
                "desc": "Source Geography"
            },
            {
                "key": "srctaxonomy",
                "type": null,
                "name": "Source Taxonomy",
                "desc": "Source Taxonomy"
            },
            {
                "key": "status",
                "type": null,
                "name": "Status",
                "desc": "Status"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable."
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "User definable."
            },
            {
                "key": "text3",
                "type": "java.lang.String",
                "name": "Text3",
                "desc": "User definable."
            },
            {
                "key": "text4",
                "type": "java.lang.String",
                "name": "Text4",
                "desc": "User definable."
            },
            {
                "key": "text5",
                "type": "java.lang.String",
                "name": "Text5",
                "desc": "User definable."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "Extension Granted",
                "desc": "User definable."
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "Yes No2",
                "desc": "User definable."
            }
        ]
    },
    {
        "table": "loanagent",
        "name": "Loan Agent",
        "desc": "An agent associated with a loan. Each agent includes the role played in the loan process.",
        "items": [
            {
                "key": "agent",
                "type": "ManyToOne",
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "loan",
                "type": "ManyToOne",
                "name": "Loan",
                "desc": "Loan"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "role",
                "type": "java.lang.String",
                "name": "Role",
                "desc": "Role the agent played in the loan."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "loanattachment",
        "name": "Loan Attachment",
        "desc": "Refers to an attachment and provides order.",
        "items": [
            {
                "key": "attachment",
                "type": "ManyToOne",
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "loan",
                "type": "ManyToOne",
                "name": "Loan",
                "desc": "Loan"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": "java.lang.Integer",
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional comments."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "loanpreparation",
        "name": "Loan Preparation",
        "desc": "A join table between the Loan and the Preparation. It contains comments and quantity fields.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "descriptionofmaterial",
                "type": "java.lang.String",
                "name": "Description",
                "desc": "Description of loaned material (intended to be used for non-cataloged items, i.e. when PreparationID is null)"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "incomments",
                "type": "text",
                "name": "In Comments",
                "desc": "Comments on item when returned."
            },
            {
                "key": "isresolved",
                "type": "java.lang.Boolean",
                "name": "Is Resolved",
                "desc": "Is Resolved"
            },
            {
                "key": "loan",
                "type": "ManyToOne",
                "name": "Loan",
                "desc": "Loan containing the Preparation."
            },
            {
                "key": "loanreturnpreparations",
                "type": "OneToMany",
                "name": "Loan Return Preparations",
                "desc": "Loan Return Preparations"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "outcomments",
                "type": "text",
                "name": "Out Comments",
                "desc": "Comments on item when loaned."
            },
            {
                "key": "preparation",
                "type": "ManyToOne",
                "name": "Preparation",
                "desc": "Preparation"
            },
            {
                "key": "quantity",
                "type": "java.lang.Integer",
                "name": "Quantity",
                "desc": "The total number of specimens loaned (necessary for lots)."
            },
            {
                "key": "quantityresolved",
                "type": "java.lang.Integer",
                "name": "Quantity Resolved",
                "desc": "Number of specimens returned, deaccessioned or otherwise accounted for. (necessary for Lots)."
            },
            {
                "key": "quantityreturned",
                "type": "java.lang.Integer",
                "name": "Quantity Returned",
                "desc": "Number of specimens returned. (necessary for Lots)"
            },
            {
                "key": "receivedcomments",
                "type": null,
                "name": "Received Comments",
                "desc": "Received Comments"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable."
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "User definable."
            },
            {
                "key": "text3",
                "type": "java.lang.String",
                "name": "Text3",
                "desc": "User definable."
            },
            {
                "key": "text4",
                "type": "java.lang.String",
                "name": "Text4",
                "desc": "User definable."
            },
            {
                "key": "text5",
                "type": "java.lang.String",
                "name": "Text5",
                "desc": "User definable."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "loanreturnpreparation",
        "name": "Loan Return Preparation",
        "desc": "This is used for tracking a returned Preparation for a loan.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "disposalpreparations",
                "type": null,
                "name": "Disposal Preparations",
                "desc": "Disposal Preparations"
            },
            {
                "key": "loanpreparation",
                "type": "ManyToOne",
                "name": "Loan Preparation",
                "desc": "Preparation being loaned."
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "quantityresolved",
                "type": null,
                "name": "Quantity Resolved",
                "desc": "Number of specimens returned, deaccessioned or otherwise accounted for. (necessary for Lots)."
            },
            {
                "key": "quantityreturned",
                "type": null,
                "name": "Quantity Returned",
                "desc": "Number of specimens returned. (necessary for Lots)."
            },
            {
                "key": "receivedby",
                "type": "ManyToOne",
                "name": "Received By",
                "desc": "Person processing the loan return."
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments."
            },
            {
                "key": "returneddate",
                "type": "java.util.Calendar",
                "name": "Returned Date",
                "desc": "Date of return."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "locality",
        "name": "Locality",
        "desc": "The name of the location where a specimen was collected or observed. Some taxonomic disciplines or collectors may use a locality name instead of a field number to associate a collecting event with a specimen.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "datum",
                "type": "java.lang.String",
                "name": "Datum",
                "desc": "The verbatim geodetic datum, if given, on the specimen label"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "elevationaccuracy",
                "type": "java.lang.Double",
                "name": "Elevation Accuracy",
                "desc": "Plus or minus -- in meters."
            },
            {
                "key": "elevationmethod",
                "type": "java.lang.String",
                "name": "Elevation Method",
                "desc": "The method used to determine the elevation."
            },
            {
                "key": "geocoorddetails",
                "type": null,
                "name": "Geo Coord Details",
                "desc": "Geo Coord Details"
            },
            {
                "key": "geography",
                "type": "ManyToOne",
                "name": "Geography",
                "desc": "Link to Country, State, County, WaterBody, Island, IslandGroup ... info."
            },
            {
                "key": "gml",
                "type": "text",
                "name": "GML",
                "desc": "GML"
            },
            {
                "key": "guid",
                "type": null,
                "name": "GUID",
                "desc": "GUID"
            },
            {
                "key": "lat1text",
                "type": "java.lang.String",
                "name": "Lat1text",
                "desc": "User entry for Latitude1"
            },
            {
                "key": "lat2text",
                "type": "java.lang.String",
                "name": "Lat2text",
                "desc": "User entry for Latitude2"
            },
            {
                "key": "latitude1",
                "type": "java.math.BigDecimal",
                "name": "Latitude",
                "desc": "Latitude coordinate in Decimal Degrees"
            },
            {
                "key": "latitude2",
                "type": "java.math.BigDecimal",
                "name": "Latitude2",
                "desc": "Latitude of the second point"
            },
            {
                "key": "latlongaccuracy",
                "type": "java.lang.Double",
                "name": "Latitude/Longitude Accuracy",
                "desc": "radius -- in meters or decimal degrees"
            },
            {
                "key": "latlongmethod",
                "type": "java.lang.String",
                "name": "Lat/Long Method",
                "desc": "the method used to determine the Latitude, Longitude"
            },
            {
                "key": "latlongtype",
                "type": "java.lang.String",
                "name": "Latitude/Longitude Type",
                "desc": "The type of area described by the Latitude Longitude data (Point, Line, Rectangle)"
            },
            {
                "key": "latlonpolygons",
                "type": null,
                "name": "Lat Lonpolygons",
                "desc": "Lat Lonpolygons"
            },
            {
                "key": "localityattachments",
                "type": "OneToMany",
                "name": "Locality Attachments",
                "desc": "Locality Attachments"
            },
            {
                "key": "localitycitations",
                "type": "OneToMany",
                "name": "Locality Citations",
                "desc": "Locality Citations"
            },
            {
                "key": "localitydetails",
                "type": null,
                "name": "Locality Details",
                "desc": "Locality Details"
            },
            {
                "key": "localityname",
                "type": "java.lang.String",
                "name": "Location",
                "desc": "Describes where the specimen was collected"
            },
            {
                "key": "localitynamealiass",
                "type": "OneToMany",
                "name": "Locality Name Alias",
                "desc": "Locality Name Alias"
            },
            {
                "key": "long1text",
                "type": "java.lang.String",
                "name": "Long1text",
                "desc": "User entry for Longitude1"
            },
            {
                "key": "long2text",
                "type": "java.lang.String",
                "name": "Long2text",
                "desc": "User entry for Longitude2"
            },
            {
                "key": "longitude1",
                "type": "java.math.BigDecimal",
                "name": "Longitude",
                "desc": "Longitude coordinate in Decimal Degrees"
            },
            {
                "key": "longitude2",
                "type": "java.math.BigDecimal",
                "name": "Longitude2",
                "desc": "Longitude of the second point"
            },
            {
                "key": "maxelevation",
                "type": "java.lang.Double",
                "name": "Max Elevation",
                "desc": "The maximum elevation in meters"
            },
            {
                "key": "minelevation",
                "type": "java.lang.Double",
                "name": "Min Elevation",
                "desc": "The minimum elevation in meters"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "namedplace",
                "type": "java.lang.String",
                "name": "Named Place",
                "desc": "The named place the locality is closest to"
            },
            {
                "key": "originalelevationunit",
                "type": "java.lang.String",
                "name": "Elevation Unit",
                "desc": "Elevation unit, e.g. meters, feet, ..."
            },
            {
                "key": "originallatlongunit",
                "type": "java.lang.Integer",
                "name": "Original Latitude Longitude Unit",
                "desc": "i.e. Decimal, Deg/Min/Sec, ..."
            },
            {
                "key": "paleocontext",
                "type": null,
                "name": "Paleo Context",
                "desc": "Paleo Context"
            },
            {
                "key": "relationtonamedplace",
                "type": "java.lang.String",
                "name": "Relation To Named Place",
                "desc": "Relation of the locality to the named place"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "sgrstatus",
                "type": null,
                "name": "Sgr Status",
                "desc": "Sgr Status"
            },
            {
                "key": "shortname",
                "type": null,
                "name": "Short Name",
                "desc": "Short Name"
            },
            {
                "key": "srclatlongunit",
                "type": null,
                "name": "Src Lat Long Unit",
                "desc": "Src Lat Long Unit"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Verbatim Elevation",
                "desc": "Elevation information where the specimen was collected, as given on the specimen label"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Text3",
                "desc": "Text3"
            },
            {
                "key": "text4",
                "type": null,
                "name": "Text4",
                "desc": "Text4"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Text5",
                "desc": "Text5"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "uniqueidentifier",
                "type": null,
                "name": "Unique Identifier",
                "desc": "Unique Identifier"
            },
            {
                "key": "verbatimelevation",
                "type": "java.lang.String",
                "name": "Verbatim Elevation",
                "desc": "The verbatim elevation, including units as given in the field notes"
            },
            {
                "key": "verbatimlatitude",
                "type": null,
                "name": "Verbatim Latitude",
                "desc": "Latitude coordinate, as given on the specimen label"
            },
            {
                "key": "verbatimlongitude",
                "type": null,
                "name": "Verbatim Longitude",
                "desc": "Longitude coordinate, as given on the specimen label"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "visibility",
                "type": "java.lang.Integer",
                "name": "Visibility",
                "desc": "Visibility"
            },
            {
                "key": "visibilitysetby",
                "type": "java.lang.String",
                "name": "Visibility Set By",
                "desc": "Visibility Set By"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            },
            {
                "key": "yesno3",
                "type": null,
                "name": "Yes No3",
                "desc": "Yes No3"
            },
            {
                "key": "yesno4",
                "type": null,
                "name": "Yes No4",
                "desc": "Yes No4"
            },
            {
                "key": "yesno5",
                "type": null,
                "name": "Yes No5",
                "desc": "Yes No5"
            }
        ]
    },
    {
        "table": "localityattachment",
        "name": "Locality Attachment",
        "desc": "Refers to an attachment and provides order.",
        "items": [
            {
                "key": "attachment",
                "type": "ManyToOne",
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "locality",
                "type": "ManyToOne",
                "name": "Locality",
                "desc": "Locality"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": "java.lang.Integer",
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "localitycitation",
        "name": "Locality Citation",
        "desc": "A join table to link a Locality to a Citation.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "figurenumber",
                "type": null,
                "name": "Figure Number",
                "desc": "Figure Number"
            },
            {
                "key": "isfigured",
                "type": null,
                "name": "Is Figured",
                "desc": "Is Figured"
            },
            {
                "key": "locality",
                "type": "ManyToOne",
                "name": "Locality",
                "desc": "Locality"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "pagenumber",
                "type": null,
                "name": "Page Number",
                "desc": "Page Number"
            },
            {
                "key": "platenumber",
                "type": null,
                "name": "Plate Number",
                "desc": "Plate Number"
            },
            {
                "key": "referencework",
                "type": "ManyToOne",
                "name": "Reference Work",
                "desc": "Reference Work"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "localitydetail",
        "name": "Locality Detail",
        "desc": "Describes additional Locality detail. For example, water body and island information. Includes UTM fields.",
        "items": [
            {
                "key": "basemeridian",
                "type": null,
                "name": "Base Meridian",
                "desc": "Base Meridian"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "drainage",
                "type": null,
                "name": "Drainage",
                "desc": "Drainage"
            },
            {
                "key": "enddepth",
                "type": null,
                "name": "Max Depth",
                "desc": "End Depth"
            },
            {
                "key": "enddepthunit",
                "type": null,
                "name": "End Depth Unit",
                "desc": "End Depth Unit"
            },
            {
                "key": "enddepthverbatim",
                "type": null,
                "name": "End Depth Verbatim",
                "desc": "End Depth Verbatim"
            },
            {
                "key": "gml",
                "type": null,
                "name": "Gml",
                "desc": "Gml"
            },
            {
                "key": "huccode",
                "type": null,
                "name": "HUC Code",
                "desc": "HUC Code"
            },
            {
                "key": "island",
                "type": null,
                "name": "Island",
                "desc": "Island"
            },
            {
                "key": "islandgroup",
                "type": null,
                "name": "Island Group",
                "desc": "Island Group"
            },
            {
                "key": "locality",
                "type": null,
                "name": "Locality",
                "desc": "Locality"
            },
            {
                "key": "mgrszone",
                "type": null,
                "name": "Mgrs Zone",
                "desc": "Mgrs Zone"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "nationalparkname",
                "type": null,
                "name": "National Park Name",
                "desc": "National Park Name"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "number3",
                "type": null,
                "name": "Number3",
                "desc": "Number3"
            },
            {
                "key": "number4",
                "type": null,
                "name": "Number4",
                "desc": "Number4"
            },
            {
                "key": "number5",
                "type": null,
                "name": "Number5",
                "desc": "Number5"
            },
            {
                "key": "paleolat",
                "type": null,
                "name": "Paleo Latitude",
                "desc": "Paleo Latitude"
            },
            {
                "key": "paleolng",
                "type": null,
                "name": "Paleo Longitude",
                "desc": "Paleo Longitude"
            },
            {
                "key": "rangedesc",
                "type": null,
                "name": "Range",
                "desc": "Range"
            },
            {
                "key": "rangedirection",
                "type": null,
                "name": "Range Direction",
                "desc": "Range Direction"
            },
            {
                "key": "section",
                "type": null,
                "name": "Section",
                "desc": "Section"
            },
            {
                "key": "sectionpart",
                "type": null,
                "name": "Section Part",
                "desc": "Section Part"
            },
            {
                "key": "startdepth",
                "type": null,
                "name": "Min Depth",
                "desc": "Start Depth"
            },
            {
                "key": "startdepthunit",
                "type": null,
                "name": "Depth Unit",
                "desc": "Start Depth Unit"
            },
            {
                "key": "startdepthverbatim",
                "type": null,
                "name": "Start Depth Verbatim",
                "desc": "Start Depth Verbatim"
            },
            {
                "key": "text1",
                "type": null,
                "name": "UTM Verbatim",
                "desc": "The Universal Transverse Mercator (UTM) geographic coordinate, as given on the specimen label"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Grid Reference Verbatim",
                "desc": "Any standard grid references on the specimen label that are not latitude/longitude or UTM"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Depth Verbatim",
                "desc": "Depth at which the specimen was collected as cited on the specimen sheet.  "
            },
            {
                "key": "text4",
                "type": null,
                "name": "Text4",
                "desc": "Text4"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Text5",
                "desc": "Text5"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "township",
                "type": null,
                "name": "Township",
                "desc": "Township"
            },
            {
                "key": "townshipdirection",
                "type": null,
                "name": "Township Direction",
                "desc": "Township Direction"
            },
            {
                "key": "utmdatum",
                "type": null,
                "name": "UTM Datum",
                "desc": "UTM Datum"
            },
            {
                "key": "utmeasting",
                "type": null,
                "name": "UTM Easting",
                "desc": "UTM Easting"
            },
            {
                "key": "utmfalseeasting",
                "type": null,
                "name": "UTM False Easting",
                "desc": "UTM False Easting"
            },
            {
                "key": "utmfalsenorthing",
                "type": null,
                "name": "UTM False Northing",
                "desc": "UTM False Northing"
            },
            {
                "key": "utmnorthing",
                "type": null,
                "name": "UTM Northing",
                "desc": "UTM Northing"
            },
            {
                "key": "utmoriglatitude",
                "type": null,
                "name": "UTM Orig Latitude",
                "desc": "UTM Orig Latitude"
            },
            {
                "key": "utmoriglongitude",
                "type": null,
                "name": "UTM Orig Longitude",
                "desc": "UTM Orig Longitude"
            },
            {
                "key": "utmscale",
                "type": null,
                "name": "UTM Scale",
                "desc": "UTM Scale"
            },
            {
                "key": "utmzone",
                "type": null,
                "name": "UTM Zone",
                "desc": "UTM Zone"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "waterbody",
                "type": null,
                "name": "Water Body",
                "desc": "Water Body"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            },
            {
                "key": "yesno3",
                "type": null,
                "name": "Yes No3",
                "desc": "Yes No3"
            },
            {
                "key": "yesno4",
                "type": null,
                "name": "Yes No4",
                "desc": "Yes No4"
            },
            {
                "key": "yesno5",
                "type": null,
                "name": "Yes No5",
                "desc": "Yes No5"
            }
        ]
    },
    {
        "table": "localitynamealias",
        "name": "Locality Name Alias",
        "desc": "Describes additional names for a given Locality.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "locality",
                "type": "ManyToOne",
                "name": "Locality",
                "desc": "Locality"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "The alias for the locality name."
            },
            {
                "key": "source",
                "type": "java.lang.String",
                "name": "Source",
                "desc": "The source of the alias."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "materialsample",
        "name": "Material Sample",
        "desc": "Material Sample",
        "items": [
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "dnasequences",
                "type": null,
                "name": "DNA Sequences",
                "desc": "DNA Sequences"
            },
            {
                "key": "extractiondate",
                "type": null,
                "name": "Extraction Date",
                "desc": "Extraction Date"
            },
            {
                "key": "extractor",
                "type": null,
                "name": "Extractor",
                "desc": "Extractor"
            },
            {
                "key": "ggbn_absorbanceratio260_230",
                "type": null,
                "name": "Absorb Ratio 260_230",
                "desc": "Absorb Ratio 260_230"
            },
            {
                "key": "ggbn_absorbanceratio260_280",
                "type": null,
                "name": "Absorb Ratio 260_280",
                "desc": "Absorb Ratio 260_280"
            },
            {
                "key": "ggbn_absorbanceratiomethod",
                "type": null,
                "name": "Absorb Ratio Method",
                "desc": "Absorb Ratio Method"
            },
            {
                "key": "ggbn_concentration",
                "type": null,
                "name": "Concentration",
                "desc": "Concentration"
            },
            {
                "key": "ggbn_concentrationunit",
                "type": null,
                "name": "Concentration Unit",
                "desc": "Concentration Unit"
            },
            {
                "key": "ggbn_materialsampletype",
                "type": "java.lang.String",
                "name": "Sample Type",
                "desc": "Sample Type"
            },
            {
                "key": "ggbn_medium",
                "type": null,
                "name": "Medium",
                "desc": "Medium"
            },
            {
                "key": "ggbn_purificationmethod",
                "type": null,
                "name": "Purification Method",
                "desc": "Purification Method"
            },
            {
                "key": "ggbn_quality",
                "type": null,
                "name": "Quality",
                "desc": "Quality"
            },
            {
                "key": "ggbn_qualitycheckdate",
                "type": null,
                "name": "Quality Check Date",
                "desc": "Quality Check Date"
            },
            {
                "key": "ggbn_qualityremarks",
                "type": null,
                "name": "Quality Remarks",
                "desc": "Quality Remarks"
            },
            {
                "key": "ggbn_sampledesignation",
                "type": null,
                "name": "Sample Designation",
                "desc": "Sample Designation"
            },
            {
                "key": "ggbn_samplesize",
                "type": null,
                "name": "Sample Size",
                "desc": "Sample Size"
            },
            {
                "key": "ggbn_volume",
                "type": null,
                "name": "Volume",
                "desc": "Volume"
            },
            {
                "key": "ggbn_volumeunit",
                "type": null,
                "name": "Volume Unit",
                "desc": "Volume Unit"
            },
            {
                "key": "ggbn_weight",
                "type": null,
                "name": "Weight",
                "desc": "Weight"
            },
            {
                "key": "ggbn_weightmethod",
                "type": null,
                "name": "Weight Method",
                "desc": "Weight Method"
            },
            {
                "key": "ggbn_weightunit",
                "type": null,
                "name": "Weight Unit",
                "desc": "Weight Unit"
            },
            {
                "key": "guid",
                "type": null,
                "name": "Guid",
                "desc": "Guid"
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "preparation",
                "type": null,
                "name": "Preparation",
                "desc": "Preparation"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "reservedinteger3",
                "type": null,
                "name": "Reserved Integer3",
                "desc": "Reserved Integer3"
            },
            {
                "key": "reservedinteger4",
                "type": null,
                "name": "Reserved Integer4",
                "desc": "Reserved Integer4"
            },
            {
                "key": "reservednumber3",
                "type": null,
                "name": "Reserved Number3",
                "desc": "Reserved Number3"
            },
            {
                "key": "reservednumber4",
                "type": null,
                "name": "Reserved Number4",
                "desc": "Reserved Number4"
            },
            {
                "key": "reservedtext3",
                "type": null,
                "name": "Reserved Text3",
                "desc": "Reserved Text3"
            },
            {
                "key": "reservedtext4",
                "type": null,
                "name": "Reserved Text4",
                "desc": "Reserved Text4"
            },
            {
                "key": "srabioprojectid",
                "type": null,
                "name": "SRA Bio Project ID",
                "desc": "SRA Bio Project ID"
            },
            {
                "key": "srabiosampleid",
                "type": null,
                "name": "SRA Bio Sample ID",
                "desc": "SRA Bio Sample ID"
            },
            {
                "key": "sraprojectid",
                "type": null,
                "name": "SRA Project ID",
                "desc": "SRA Project ID"
            },
            {
                "key": "srasampleid",
                "type": null,
                "name": "SRA Sample ID",
                "desc": "SRA Sample ID"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            }
        ]
    },
    {
        "table": "message",
        "name": "Message",
        "desc": "Stores user notifications.",
        "items": [
            {
                "key": "content",
                "type": "text",
                "name": "content",
                "desc": "Content"
            },
            {
                "key": "messageid",
                "type": "java.lang.Integer",
                "name": "messageId",
                "desc": "Message id"
            },
            {
                "key": "read",
                "type": "java.lang.Boolean",
                "name": "read",
                "desc": "Read"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "timestampcreated",
                "desc": "Timestampcreated"
            },
            {
                "key": "user",
                "type": "ManyToOne",
                "name": "user",
                "desc": "User"
            }
        ]
    },
    {
        "table": "morphbankview",
        "name": "Morph Bank View",
        "desc": "Morph Bank View",
        "items": [
            {
                "key": "attachmentimageattributes",
                "type": null,
                "name": "Attachment Image Attributes",
                "desc": "Attachment Image Attributes"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "developmentstate",
                "type": null,
                "name": "Development State",
                "desc": "Development State"
            },
            {
                "key": "form",
                "type": null,
                "name": "Form",
                "desc": "Form"
            },
            {
                "key": "imagingpreparationtechnique",
                "type": null,
                "name": "Imaging Preparation Technique",
                "desc": "Imaging Preparation Technique"
            },
            {
                "key": "imagingtechnique",
                "type": null,
                "name": "Imaging Technique",
                "desc": "Imaging Technique"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "morphbankexternalviewid",
                "type": null,
                "name": "Morph Bank External View Id",
                "desc": "Morph Bank External View Id"
            },
            {
                "key": "sex",
                "type": null,
                "name": "Sex",
                "desc": "Sex"
            },
            {
                "key": "specimenpart",
                "type": null,
                "name": "Specimen Part",
                "desc": "Specimen Part"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "viewangle",
                "type": null,
                "name": "View Angle",
                "desc": "View Angle"
            },
            {
                "key": "viewname",
                "type": null,
                "name": "View Name",
                "desc": "View Name"
            }
        ]
    },
    {
        "table": "otheridentifier",
        "name": "Other Identifiers",
        "desc": "Describes an identifier (Catalog Number) of a Collection Object from a different Institution.",
        "items": [
            {
                "key": "agent1",
                "type": null,
                "name": "Agent1",
                "desc": "Agent1"
            },
            {
                "key": "agent2",
                "type": null,
                "name": "Agent2",
                "desc": "Agent2"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "collectionobject",
                "type": "ManyToOne",
                "name": "Collection Object",
                "desc": "Collection Object"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "date1",
                "type": null,
                "name": "Date1",
                "desc": "Date1"
            },
            {
                "key": "date1precision",
                "type": null,
                "name": "Date1 Precision",
                "desc": ""
            },
            {
                "key": "date2",
                "type": null,
                "name": "Date2",
                "desc": "Date2"
            },
            {
                "key": "date2precision",
                "type": null,
                "name": "Date2 Precision",
                "desc": ""
            },
            {
                "key": "identifier",
                "type": "java.lang.String",
                "name": "Number",
                "desc": "Another number associated with the specimen. May be an old accession number from another institution or other sources, retained to preserve history. If no number is available, use \"NA\""
            },
            {
                "key": "institution",
                "type": "java.lang.String",
                "name": "Institution",
                "desc": "Institution that assigned this number"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional information regarding the specimen. Example: \"This specimen was mistakenly uploaded as a vascular specimen. See this number in the algae database for the true record. This old accession number is being preserved for tracking purposes\""
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable."
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "User definable."
            },
            {
                "key": "text3",
                "type": "java.lang.String",
                "name": "Text3",
                "desc": "User definable."
            },
            {
                "key": "text4",
                "type": "java.lang.String",
                "name": "Text4",
                "desc": "User definable."
            },
            {
                "key": "text5",
                "type": "java.lang.String",
                "name": "Text5",
                "desc": "User definable."
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "Yes No1",
                "desc": "User definable"
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "Yes No2",
                "desc": "User definable"
            },
            {
                "key": "yesno3",
                "type": "java.lang.Boolean",
                "name": "Yes No3",
                "desc": "User definable"
            },
            {
                "key": "yesno4",
                "type": "java.lang.Boolean",
                "name": "Yes No4",
                "desc": "User definable"
            },
            {
                "key": "yesno5",
                "type": "java.lang.Boolean",
                "name": "Yes No5",
                "desc": "User definable"
            }
        ]
    },
    {
        "table": "paleocontext",
        "name": "Paleo Context",
        "desc": "Describes the paleontologic information for a Collection Object. This also references Chronostratigraphy and Bio Stratigray.",
        "items": [
            {
                "key": "biostrat",
                "type": "ManyToOne",
                "name": "Bio Strat",
                "desc": "Bio Strat"
            },
            {
                "key": "chronosstrat",
                "type": "ManyToOne",
                "name": "Chrono Strat",
                "desc": "Chrono Strat"
            },
            {
                "key": "chronosstratend",
                "type": null,
                "name": "Chrono Strat End",
                "desc": "Chrono Strat End"
            },
            {
                "key": "collectingevents",
                "type": null,
                "name": "Collecting Events",
                "desc": "Collecting Events"
            },
            {
                "key": "collectionobjects",
                "type": "OneToMany",
                "name": "Collection Objects",
                "desc": "Collection Objects"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "lithostrat",
                "type": "ManyToOne",
                "name": "LithoStrat",
                "desc": "LithoStrat"
            },
            {
                "key": "localities",
                "type": null,
                "name": "Localities",
                "desc": "Localities"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "number3",
                "type": null,
                "name": "Number3",
                "desc": "Number3"
            },
            {
                "key": "number4",
                "type": null,
                "name": "Number4",
                "desc": "Number4"
            },
            {
                "key": "number5",
                "type": null,
                "name": "Number5",
                "desc": "Number5"
            },
            {
                "key": "paleocontextname",
                "type": null,
                "name": "Context Name",
                "desc": "Context Name"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "tectonicunit",
                "type": "ManyToOne",
                "name": "Tectonic Unit",
                "desc": "Tectonic Unit"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Bio Strat",
                "desc": "Bio Strat"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Text3",
                "desc": "Text3"
            },
            {
                "key": "text4",
                "type": null,
                "name": "Text4",
                "desc": "Text4"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Text5",
                "desc": "Text5"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            },
            {
                "key": "yesno3",
                "type": null,
                "name": "Yes No3",
                "desc": "Yes No3"
            },
            {
                "key": "yesno4",
                "type": null,
                "name": "Yes No4",
                "desc": "Yes No4"
            },
            {
                "key": "yesno5",
                "type": null,
                "name": "Yes No5",
                "desc": "Yes No5"
            }
        ]
    },
    {
        "table": "pcrperson",
        "name": "Pcr Persons",
        "desc": "Pcr Persons",
        "items": [
            {
                "key": "agent",
                "type": null,
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "dnasequence",
                "type": null,
                "name": "DNA Sequences",
                "desc": "DNA Sequences"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordernumber",
                "type": null,
                "name": "Order Number",
                "desc": "Order Number"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            }
        ]
    },
    {
        "table": "permit",
        "name": "Permit",
        "desc": "The permit transaction window is designed to hold information linked to legal paperwork for permission from a government agency to collect a specimen or specimens. Preparation: A subdivision of a collection object that refers to the preparation method.",
        "items": [
            {
                "key": "accessionauthorizations",
                "type": "OneToMany",
                "name": "Accession Authorizations",
                "desc": "Accession Authorizations"
            },
            {
                "key": "collectingeventauthorizations",
                "type": null,
                "name": "Collecting Event Authorizations",
                "desc": "Collecting Event Authorizations"
            },
            {
                "key": "collectingtripauthorizations",
                "type": null,
                "name": "Collecting Trip Authorizations",
                "desc": "Collecting Trip Authorizations"
            },
            {
                "key": "copyright",
                "type": null,
                "name": "Copyright",
                "desc": "Copyright"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "enddate",
                "type": "java.util.Calendar",
                "name": "End Date",
                "desc": "Date permit expires"
            },
            {
                "key": "institution",
                "type": null,
                "name": "Institution",
                "desc": "Institution"
            },
            {
                "key": "isavailable",
                "type": null,
                "name": "Is Available",
                "desc": "Is Available"
            },
            {
                "key": "isrequired",
                "type": null,
                "name": "Is Required",
                "desc": "Is Required"
            },
            {
                "key": "issuedby",
                "type": "ManyToOne",
                "name": "Issued By",
                "desc": "Issued By"
            },
            {
                "key": "issueddate",
                "type": "java.util.Calendar",
                "name": "Issued Date",
                "desc": "Date permit was issued"
            },
            {
                "key": "issuedto",
                "type": "ManyToOne",
                "name": "Issued To",
                "desc": "Issued To"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": "java.lang.Float",
                "name": "Number1",
                "desc": "User definable"
            },
            {
                "key": "number2",
                "type": "java.lang.Float",
                "name": "Number2",
                "desc": "User definable"
            },
            {
                "key": "permitattachments",
                "type": "OneToMany",
                "name": "Permit Attachments",
                "desc": "Permit Attachments"
            },
            {
                "key": "permitnumber",
                "type": "java.lang.String",
                "name": "Permit Number",
                "desc": "Identifier for the permit"
            },
            {
                "key": "permittext",
                "type": null,
                "name": "Permit Text",
                "desc": "Permit Text"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "renewaldate",
                "type": "java.util.Calendar",
                "name": "Renewal Date",
                "desc": "Date of renewal"
            },
            {
                "key": "reservedinteger1",
                "type": null,
                "name": "Reserved Integer1",
                "desc": "Reserved Integer1"
            },
            {
                "key": "reservedinteger2",
                "type": null,
                "name": "Reserved Integer2",
                "desc": "Reserved Integer2"
            },
            {
                "key": "reservedtext3",
                "type": null,
                "name": "Reserved Text3",
                "desc": "Reserved Text3"
            },
            {
                "key": "reservedtext4",
                "type": null,
                "name": "Reserved Text4",
                "desc": "Reserved Text4"
            },
            {
                "key": "startdate",
                "type": "java.util.Calendar",
                "name": "Start Date",
                "desc": "Date permit becomes effective"
            },
            {
                "key": "status",
                "type": null,
                "name": "Status",
                "desc": "Status"
            },
            {
                "key": "statusqualifier",
                "type": null,
                "name": "Status Qualifier",
                "desc": "Status Qualifier"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable"
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "User definable"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "type",
                "type": "java.lang.String",
                "name": "Type",
                "desc": "Permit category - `CITES`, `Migratory Bird Treaty Act`, ..."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "Yes No1",
                "desc": "User definable"
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "Yes No2",
                "desc": "User definable"
            }
        ]
    },
    {
        "table": "permitattachment",
        "name": "Permit Attachment",
        "desc": "Refers to an attachment and provides order.",
        "items": [
            {
                "key": "attachment",
                "type": "ManyToOne",
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": "java.lang.Integer",
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "permit",
                "type": "ManyToOne",
                "name": "Permit",
                "desc": "Permit"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "picklist",
        "name": "Pick List",
        "desc": "System Table: A list of items that can be choosen to produce a controlled vocabulary.",
        "items": [
            {
                "key": "collection",
                "type": null,
                "name": "Collection",
                "desc": "Collection"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "fieldname",
                "type": "java.lang.String",
                "name": "Field Name",
                "desc": "Field Name"
            },
            {
                "key": "filterfieldname",
                "type": null,
                "name": "Filter Field Name",
                "desc": "Filter Field Name"
            },
            {
                "key": "filtervalue",
                "type": null,
                "name": "Filter Value",
                "desc": "Filter Value"
            },
            {
                "key": "formatter",
                "type": "java.lang.String",
                "name": "Formatter",
                "desc": "Formatter"
            },
            {
                "key": "issystem",
                "type": null,
                "name": "Is System",
                "desc": "Where system form rely on this picklist, not user-defined"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "picklistitems",
                "type": null,
                "name": "Pick List Items",
                "desc": "The items in the picklist."
            },
            {
                "key": "readonly",
                "type": "java.lang.Boolean",
                "name": "Read Only",
                "desc": "Read Only"
            },
            {
                "key": "sizelimit",
                "type": "java.lang.Integer",
                "name": "Size Limit",
                "desc": "Size Limit"
            },
            {
                "key": "sorttype",
                "type": null,
                "name": "Sort Type",
                "desc": "Sort Type"
            },
            {
                "key": "tablename",
                "type": "java.lang.String",
                "name": "Table Name",
                "desc": "Table Name"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "type",
                "type": "java.lang.Integer",
                "name": "Type",
                "desc": "Type"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "picklistitem",
        "name": "Pick List Item",
        "desc": "Pick List Item",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "picklist",
                "type": null,
                "name": "Pick List",
                "desc": "Pick List"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "title",
                "type": null,
                "name": "Title",
                "desc": "Title"
            },
            {
                "key": "value",
                "type": null,
                "name": "Value",
                "desc": "Value"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "preparation",
        "name": "Preparation",
        "desc": "Preparation information describes the physical status of a specimen and its storage media. Specify provides an extensive array of utilities for curatorial management of specimen preparations.",
        "items": [
            {
                "key": "alternatestorage",
                "type": null,
                "name": "Alternate Storage",
                "desc": "Alternate Storage"
            },
            {
                "key": "barcode",
                "type": null,
                "name": "Bar Code",
                "desc": "Bar Code"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "collectionobject",
                "type": "ManyToOne",
                "name": "Collection Object",
                "desc": "Collection Object"
            },
            {
                "key": "conservdescriptions",
                "type": null,
                "name": "Conserv Descriptions",
                "desc": "Conserv Descriptions"
            },
            {
                "key": "countamt",
                "type": "java.lang.Integer",
                "name": "Count",
                "desc": "Number of specimens per preparation. For vascular collection, this number should always be 1"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "date1",
                "type": null,
                "name": "Date1",
                "desc": "Date1"
            },
            {
                "key": "date1precision",
                "type": null,
                "name": "Date1 Precision",
                "desc": "Date1 Precision"
            },
            {
                "key": "date2",
                "type": null,
                "name": "Date2",
                "desc": "Date2"
            },
            {
                "key": "date2precision",
                "type": null,
                "name": "Date2 Precision",
                "desc": "Date2 Precision"
            },
            {
                "key": "date3",
                "type": null,
                "name": "Date3",
                "desc": "Date3"
            },
            {
                "key": "date3precision",
                "type": null,
                "name": "Date3 Precision",
                "desc": "Date3 Precision"
            },
            {
                "key": "date4",
                "type": null,
                "name": "Date4",
                "desc": "Date4"
            },
            {
                "key": "date4precision",
                "type": null,
                "name": "Date4 Precision",
                "desc": "Date4 Precision"
            },
            {
                "key": "description",
                "type": null,
                "name": "Description",
                "desc": "Description"
            },
            {
                "key": "disposalpreparations",
                "type": null,
                "name": "Disposal Preparations",
                "desc": "Disposal Preparations"
            },
            {
                "key": "exchangeinpreps",
                "type": null,
                "name": "Exchange In Preps",
                "desc": "Exchange In Preps"
            },
            {
                "key": "exchangeoutpreps",
                "type": null,
                "name": "Exchange Out Preps",
                "desc": "Exchange Out Preps"
            },
            {
                "key": "giftpreparations",
                "type": null,
                "name": "Gift Preparations",
                "desc": "Gift Preparations"
            },
            {
                "key": "guid",
                "type": null,
                "name": "Guid",
                "desc": "Guid"
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "loanpreparations",
                "type": "OneToMany",
                "name": "Loan Preparations",
                "desc": "Loan Preparations"
            },
            {
                "key": "materialsamples",
                "type": null,
                "name": "Material Samples",
                "desc": "Material Samples"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "preparationattachments",
                "type": "OneToMany",
                "name": "Preparation Attachments",
                "desc": "Preparation Attachments"
            },
            {
                "key": "preparationattribute",
                "type": "ManyToOne",
                "name": "Preparation Attribute",
                "desc": "Preparation Attribute"
            },
            {
                "key": "preparationattrs",
                "type": "OneToMany",
                "name": "Preparation Attrs",
                "desc": "Preparation Attrs"
            },
            {
                "key": "preparationproperties",
                "type": null,
                "name": "Preparation Properties",
                "desc": "Preparation Properties"
            },
            {
                "key": "preparedbyagent",
                "type": "ManyToOne",
                "name": "Prepared By",
                "desc": "Prepared By"
            },
            {
                "key": "prepareddate",
                "type": "java.util.Calendar",
                "name": "Prepared Date",
                "desc": "Prepared Date"
            },
            {
                "key": "prepareddateprecision",
                "type": null,
                "name": "Prepared Date Precision",
                "desc": "Prepared Date Precision"
            },
            {
                "key": "preptype",
                "type": "ManyToOne",
                "name": "Prep Type",
                "desc": "Prep Type"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Curatorial Notes",
                "desc": "Any notes from the Herbarium staff regarding changes or conditions to the specimen, e.g. multisheets, new filing location, etc"
            },
            {
                "key": "reservedinteger3",
                "type": null,
                "name": "Reserved Integer3",
                "desc": "Reserved Integer3"
            },
            {
                "key": "reservedinteger4",
                "type": null,
                "name": "Reserved Integer4",
                "desc": "Reserved Integer4"
            },
            {
                "key": "samplenumber",
                "type": null,
                "name": "Sample Number",
                "desc": "Sample Number"
            },
            {
                "key": "status",
                "type": null,
                "name": "Disposition",
                "desc": "Status of the physical specimen, ie. missing, on loan, duplicate elsewhere, voucher elsewhere, or on exchange"
            },
            {
                "key": "storage",
                "type": "ManyToOne",
                "name": "Storage",
                "desc": "Storage"
            },
            {
                "key": "storagelocation",
                "type": "java.lang.String",
                "name": "Storage Location",
                "desc": "Storage Location"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Loan",
                "desc": "Information on loans sent out and/or returned to UBC"
            },
            {
                "key": "text10",
                "type": null,
                "name": "Research Annotation",
                "desc": "Annotations of plant material sample taken from the specimen, e.g. pollen sample, leaf tissue sample, etc. "
            },
            {
                "key": "text11",
                "type": null,
                "name": "Multisheet Remarks",
                "desc": "Additional comments on the multisheet, e.g. multiple species names on the same sheet"
            },
            {
                "key": "text12",
                "type": null,
                "name": "Cabinet Location",
                "desc": "Number of the cabinet the specimen should be found in. Based on the Family of the most recent determination. Could be a range"
            },
            {
                "key": "text13",
                "type": null,
                "name": "Multisheet Number",
                "desc": "Number originally assigned to the sheet, for multisheets only"
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Exchange",
                "desc": "Indicates if an accessioned specimen is a duplicate, the specimen it is a duplicate of, the institution to which the specimen was sent and when (when applicable). "
            },
            {
                "key": "text3",
                "type": null,
                "name": "Special (Legacy Data)",
                "desc": "Additional comments in the specimen sheet"
            },
            {
                "key": "text4",
                "type": null,
                "name": "Type Status",
                "desc": "Type status"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Type Remarks",
                "desc": "Type remarks"
            },
            {
                "key": "text6",
                "type": null,
                "name": "Multisheet Other Notes",
                "desc": ""
            },
            {
                "key": "text7",
                "type": null,
                "name": "Text7",
                "desc": "Text7"
            },
            {
                "key": "text8",
                "type": null,
                "name": "Text8",
                "desc": "Text8"
            },
            {
                "key": "text9",
                "type": null,
                "name": "Text9",
                "desc": "Text9"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Missing Specimen (Data to move to Collection Object)",
                "desc": "Check this box if the physical location of the specimen is unknown"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Is Multisheet (Data to move to Collection Object)",
                "desc": "Check this box if this specimen has more than one part (i.e. part of a multisheet)"
            },
            {
                "key": "yesno3",
                "type": null,
                "name": "Yes No3",
                "desc": "Yes No3"
            }
        ]
    },
    {
        "table": "preparationattachment",
        "name": "Preparation Attachment",
        "desc": "Refers to an attachment and provides order.",
        "items": [
            {
                "key": "attachment",
                "type": "ManyToOne",
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": "java.lang.Integer",
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "preparation",
                "type": "ManyToOne",
                "name": "Preparation",
                "desc": "Preparation"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "preparationattr",
        "name": "Preparation Attribute",
        "desc": "Extensible attributes introduced for Specify 6.",
        "items": [
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "dblvalue",
                "type": "java.lang.Double",
                "name": "Double Value",
                "desc": "Double Value"
            },
            {
                "key": "definition",
                "type": "ManyToOne",
                "name": "Definition",
                "desc": "Definition"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "preparation",
                "type": "ManyToOne",
                "name": "Preparation",
                "desc": "Preparation"
            },
            {
                "key": "strvalue",
                "type": "java.lang.String",
                "name": "String Value",
                "desc": "String Value"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "preparationattribute",
        "name": "Preparation Attribute",
        "desc": "Preparation attributes that were also available in Specify 5.",
        "items": [
            {
                "key": "attrdate",
                "type": null,
                "name": "Attr Date",
                "desc": "Attr Date"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "number3",
                "type": null,
                "name": "Number3",
                "desc": "Number3"
            },
            {
                "key": "number4",
                "type": null,
                "name": "Number4",
                "desc": "Number4"
            },
            {
                "key": "number5",
                "type": null,
                "name": "Number5",
                "desc": "Number5"
            },
            {
                "key": "number6",
                "type": null,
                "name": "Number6",
                "desc": "Number6"
            },
            {
                "key": "number7",
                "type": null,
                "name": "Number7",
                "desc": "Number7"
            },
            {
                "key": "number8",
                "type": null,
                "name": "Number8",
                "desc": "Number8"
            },
            {
                "key": "number9",
                "type": null,
                "name": "Number9",
                "desc": "Number9"
            },
            {
                "key": "preparations",
                "type": null,
                "name": "Preparations",
                "desc": "Preparations"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text10",
                "type": null,
                "name": "Text10",
                "desc": "Text10"
            },
            {
                "key": "text11",
                "type": null,
                "name": "Text11",
                "desc": "Text11"
            },
            {
                "key": "text12",
                "type": null,
                "name": "Text12",
                "desc": "Text12"
            },
            {
                "key": "text13",
                "type": null,
                "name": "Text13",
                "desc": "Text13"
            },
            {
                "key": "text14",
                "type": null,
                "name": "Text14",
                "desc": "Text14"
            },
            {
                "key": "text15",
                "type": null,
                "name": "Text15",
                "desc": "Text15"
            },
            {
                "key": "text16",
                "type": null,
                "name": "Text16",
                "desc": "Text16"
            },
            {
                "key": "text17",
                "type": null,
                "name": "Text17",
                "desc": "Text17"
            },
            {
                "key": "text18",
                "type": null,
                "name": "Text18",
                "desc": "Text18"
            },
            {
                "key": "text19",
                "type": null,
                "name": "Text19",
                "desc": "Text19"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "text20",
                "type": null,
                "name": "Text20",
                "desc": "Text20"
            },
            {
                "key": "text21",
                "type": null,
                "name": "Text21",
                "desc": "Text21"
            },
            {
                "key": "text22",
                "type": null,
                "name": "Text22",
                "desc": "Text22"
            },
            {
                "key": "text23",
                "type": null,
                "name": "Text23",
                "desc": "Text23"
            },
            {
                "key": "text24",
                "type": null,
                "name": "Text24",
                "desc": "Text24"
            },
            {
                "key": "text25",
                "type": null,
                "name": "Text25",
                "desc": "Text25"
            },
            {
                "key": "text26",
                "type": null,
                "name": "Text26",
                "desc": "Text26"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Text3",
                "desc": "Text3"
            },
            {
                "key": "text4",
                "type": null,
                "name": "Text4",
                "desc": "Text4"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Text5",
                "desc": "Text5"
            },
            {
                "key": "text6",
                "type": null,
                "name": "Text6",
                "desc": "Text6"
            },
            {
                "key": "text7",
                "type": null,
                "name": "Text7",
                "desc": "Text7"
            },
            {
                "key": "text8",
                "type": null,
                "name": "Text8",
                "desc": "Text8"
            },
            {
                "key": "text9",
                "type": null,
                "name": "Text9",
                "desc": "Text9"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            },
            {
                "key": "yesno3",
                "type": null,
                "name": "Yes No3",
                "desc": "Yes No3"
            },
            {
                "key": "yesno4",
                "type": null,
                "name": "Yes No4",
                "desc": "Yes No4"
            }
        ]
    },
    {
        "table": "preparationproperty",
        "name": "Preparation Property",
        "desc": "Preparation Property",
        "items": [
            {
                "key": "agent1",
                "type": null,
                "name": "Agent1",
                "desc": "Agent1"
            },
            {
                "key": "agent10",
                "type": null,
                "name": "Agent10",
                "desc": "Agent10"
            },
            {
                "key": "agent11",
                "type": null,
                "name": "Agent11",
                "desc": "Agent11"
            },
            {
                "key": "agent12",
                "type": null,
                "name": "Agent12",
                "desc": "Agent12"
            },
            {
                "key": "agent13",
                "type": null,
                "name": "Agent13",
                "desc": "Agent13"
            },
            {
                "key": "agent14",
                "type": null,
                "name": "Agent14",
                "desc": "Agent14"
            },
            {
                "key": "agent15",
                "type": null,
                "name": "Agent15",
                "desc": "Agent15"
            },
            {
                "key": "agent16",
                "type": null,
                "name": "Agent16",
                "desc": "Agent16"
            },
            {
                "key": "agent17",
                "type": null,
                "name": "Agent17",
                "desc": "Agent17"
            },
            {
                "key": "agent18",
                "type": null,
                "name": "Agent18",
                "desc": "Agent18"
            },
            {
                "key": "agent19",
                "type": null,
                "name": "Agent19",
                "desc": "Agent19"
            },
            {
                "key": "agent2",
                "type": null,
                "name": "Agent2",
                "desc": "Agent2"
            },
            {
                "key": "agent20",
                "type": null,
                "name": "Agent20",
                "desc": "Agent20"
            },
            {
                "key": "agent3",
                "type": null,
                "name": "Agent3",
                "desc": "Agent3"
            },
            {
                "key": "agent4",
                "type": null,
                "name": "Agent4",
                "desc": "Agent4"
            },
            {
                "key": "agent5",
                "type": null,
                "name": "Agent5",
                "desc": "Agent5"
            },
            {
                "key": "agent6",
                "type": null,
                "name": "Agent6",
                "desc": "Agent6"
            },
            {
                "key": "agent7",
                "type": null,
                "name": "Agent7",
                "desc": "Agent7"
            },
            {
                "key": "agent8",
                "type": null,
                "name": "Agent8",
                "desc": "Agent8"
            },
            {
                "key": "agent9",
                "type": null,
                "name": "Agent9",
                "desc": "Agent9"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "date1",
                "type": null,
                "name": "Date1",
                "desc": "Date1"
            },
            {
                "key": "date10",
                "type": null,
                "name": "Date10",
                "desc": "Date10"
            },
            {
                "key": "date11",
                "type": null,
                "name": "Date11",
                "desc": "Date11"
            },
            {
                "key": "date12",
                "type": null,
                "name": "Date12",
                "desc": "Date12"
            },
            {
                "key": "date13",
                "type": null,
                "name": "Date13",
                "desc": "Date13"
            },
            {
                "key": "date14",
                "type": null,
                "name": "Date14",
                "desc": "Date14"
            },
            {
                "key": "date15",
                "type": null,
                "name": "Date15",
                "desc": "Date15"
            },
            {
                "key": "date16",
                "type": null,
                "name": "Date16",
                "desc": "Date16"
            },
            {
                "key": "date17",
                "type": null,
                "name": "Date17",
                "desc": "Date17"
            },
            {
                "key": "date18",
                "type": null,
                "name": "Date18",
                "desc": "Date18"
            },
            {
                "key": "date19",
                "type": null,
                "name": "Date19",
                "desc": "Date19"
            },
            {
                "key": "date2",
                "type": null,
                "name": "Date2",
                "desc": "Date2"
            },
            {
                "key": "date20",
                "type": null,
                "name": "Date20",
                "desc": "Date20"
            },
            {
                "key": "date3",
                "type": null,
                "name": "Date3",
                "desc": "Date3"
            },
            {
                "key": "date4",
                "type": null,
                "name": "Date4",
                "desc": "Date4"
            },
            {
                "key": "date5",
                "type": null,
                "name": "Date5",
                "desc": "Date5"
            },
            {
                "key": "date6",
                "type": null,
                "name": "Date6",
                "desc": "Date6"
            },
            {
                "key": "date7",
                "type": null,
                "name": "Date7",
                "desc": "Date7"
            },
            {
                "key": "date8",
                "type": null,
                "name": "Date8",
                "desc": "Date8"
            },
            {
                "key": "date9",
                "type": null,
                "name": "Date9",
                "desc": "Date9"
            },
            {
                "key": "guid",
                "type": null,
                "name": "Guid",
                "desc": "Guid"
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer10",
                "type": null,
                "name": "Integer10",
                "desc": "Integer10"
            },
            {
                "key": "integer11",
                "type": null,
                "name": "Integer11",
                "desc": "Integer11"
            },
            {
                "key": "integer12",
                "type": null,
                "name": "Integer12",
                "desc": "Integer12"
            },
            {
                "key": "integer13",
                "type": null,
                "name": "Integer13",
                "desc": "Integer13"
            },
            {
                "key": "integer14",
                "type": null,
                "name": "Integer14",
                "desc": "Integer14"
            },
            {
                "key": "integer15",
                "type": null,
                "name": "Integer15",
                "desc": "Integer15"
            },
            {
                "key": "integer16",
                "type": null,
                "name": "Integer16",
                "desc": "Integer16"
            },
            {
                "key": "integer17",
                "type": null,
                "name": "Integer17",
                "desc": "Integer17"
            },
            {
                "key": "integer18",
                "type": null,
                "name": "Integer18",
                "desc": "Integer18"
            },
            {
                "key": "integer19",
                "type": null,
                "name": "Integer19",
                "desc": "Integer19"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "integer20",
                "type": null,
                "name": "Integer20",
                "desc": "Integer20"
            },
            {
                "key": "integer21",
                "type": null,
                "name": "Integer21",
                "desc": "Integer21"
            },
            {
                "key": "integer22",
                "type": null,
                "name": "Integer22",
                "desc": "Integer22"
            },
            {
                "key": "integer23",
                "type": null,
                "name": "Integer23",
                "desc": "Integer23"
            },
            {
                "key": "integer24",
                "type": null,
                "name": "Integer24",
                "desc": "Integer24"
            },
            {
                "key": "integer25",
                "type": null,
                "name": "Integer25",
                "desc": "Integer25"
            },
            {
                "key": "integer26",
                "type": null,
                "name": "Integer26",
                "desc": "Integer26"
            },
            {
                "key": "integer27",
                "type": null,
                "name": "Integer27",
                "desc": "Integer27"
            },
            {
                "key": "integer28",
                "type": null,
                "name": "Integer28",
                "desc": "Integer28"
            },
            {
                "key": "integer29",
                "type": null,
                "name": "Integer29",
                "desc": "Integer29"
            },
            {
                "key": "integer3",
                "type": null,
                "name": "Integer3",
                "desc": "Integer3"
            },
            {
                "key": "integer30",
                "type": null,
                "name": "Integer30",
                "desc": "Integer30"
            },
            {
                "key": "integer4",
                "type": null,
                "name": "Integer4",
                "desc": "Integer4"
            },
            {
                "key": "integer5",
                "type": null,
                "name": "Integer5",
                "desc": "Integer5"
            },
            {
                "key": "integer6",
                "type": null,
                "name": "Integer6",
                "desc": "Integer6"
            },
            {
                "key": "integer7",
                "type": null,
                "name": "Integer7",
                "desc": "Integer7"
            },
            {
                "key": "integer8",
                "type": null,
                "name": "Integer8",
                "desc": "Integer8"
            },
            {
                "key": "integer9",
                "type": null,
                "name": "Integer9",
                "desc": "Integer9"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number10",
                "type": null,
                "name": "Number10",
                "desc": "Number10"
            },
            {
                "key": "number11",
                "type": null,
                "name": "Number11",
                "desc": "Number11"
            },
            {
                "key": "number12",
                "type": null,
                "name": "Number12",
                "desc": "Number12"
            },
            {
                "key": "number13",
                "type": null,
                "name": "Number13",
                "desc": "Number13"
            },
            {
                "key": "number14",
                "type": null,
                "name": "Number14",
                "desc": "Number14"
            },
            {
                "key": "number15",
                "type": null,
                "name": "Number15",
                "desc": "Number15"
            },
            {
                "key": "number16",
                "type": null,
                "name": "Number16",
                "desc": "Number16"
            },
            {
                "key": "number17",
                "type": null,
                "name": "Number17",
                "desc": "Number17"
            },
            {
                "key": "number18",
                "type": null,
                "name": "Number18",
                "desc": "Number18"
            },
            {
                "key": "number19",
                "type": null,
                "name": "Number19",
                "desc": "Number19"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "number20",
                "type": null,
                "name": "Number20",
                "desc": "Number20"
            },
            {
                "key": "number21",
                "type": null,
                "name": "Number21",
                "desc": "Number21"
            },
            {
                "key": "number22",
                "type": null,
                "name": "Number22",
                "desc": "Number22"
            },
            {
                "key": "number23",
                "type": null,
                "name": "Number23",
                "desc": "Number23"
            },
            {
                "key": "number24",
                "type": null,
                "name": "Number24",
                "desc": "Number24"
            },
            {
                "key": "number25",
                "type": null,
                "name": "Number25",
                "desc": "Number25"
            },
            {
                "key": "number26",
                "type": null,
                "name": "Number26",
                "desc": "Number26"
            },
            {
                "key": "number27",
                "type": null,
                "name": "Number27",
                "desc": "Number27"
            },
            {
                "key": "number28",
                "type": null,
                "name": "Number28",
                "desc": "Number28"
            },
            {
                "key": "number29",
                "type": null,
                "name": "Number29",
                "desc": "Number29"
            },
            {
                "key": "number3",
                "type": null,
                "name": "Number3",
                "desc": "Number3"
            },
            {
                "key": "number30",
                "type": null,
                "name": "Number30",
                "desc": "Number30"
            },
            {
                "key": "number4",
                "type": null,
                "name": "Number4",
                "desc": "Number4"
            },
            {
                "key": "number5",
                "type": null,
                "name": "Number5",
                "desc": "Number5"
            },
            {
                "key": "number6",
                "type": null,
                "name": "Number6",
                "desc": "Number6"
            },
            {
                "key": "number7",
                "type": null,
                "name": "Number7",
                "desc": "Number7"
            },
            {
                "key": "number8",
                "type": null,
                "name": "Number8",
                "desc": "Number8"
            },
            {
                "key": "number9",
                "type": null,
                "name": "Number9",
                "desc": "Number9"
            },
            {
                "key": "preparation",
                "type": null,
                "name": "Preparation",
                "desc": "Preparation"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text10",
                "type": null,
                "name": "Text10",
                "desc": "Text10"
            },
            {
                "key": "text11",
                "type": null,
                "name": "Text11",
                "desc": "Text11"
            },
            {
                "key": "text12",
                "type": null,
                "name": "Text12",
                "desc": "Text12"
            },
            {
                "key": "text13",
                "type": null,
                "name": "Text13",
                "desc": "Text13"
            },
            {
                "key": "text14",
                "type": null,
                "name": "Text14",
                "desc": "Text14"
            },
            {
                "key": "text15",
                "type": null,
                "name": "Text15",
                "desc": "Text15"
            },
            {
                "key": "text16",
                "type": null,
                "name": "Text16",
                "desc": "Text16"
            },
            {
                "key": "text17",
                "type": null,
                "name": "Text17",
                "desc": "Text17"
            },
            {
                "key": "text18",
                "type": null,
                "name": "Text18",
                "desc": "Text18"
            },
            {
                "key": "text19",
                "type": null,
                "name": "Text19",
                "desc": "Text19"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "text20",
                "type": null,
                "name": "Text20",
                "desc": "Text20"
            },
            {
                "key": "text21",
                "type": null,
                "name": "Text21",
                "desc": "Text21"
            },
            {
                "key": "text22",
                "type": null,
                "name": "Text22",
                "desc": "Text22"
            },
            {
                "key": "text23",
                "type": null,
                "name": "Text23",
                "desc": "Text23"
            },
            {
                "key": "text24",
                "type": null,
                "name": "Text24",
                "desc": "Text24"
            },
            {
                "key": "text25",
                "type": null,
                "name": "Text25",
                "desc": "Text25"
            },
            {
                "key": "text26",
                "type": null,
                "name": "Text26",
                "desc": "Text26"
            },
            {
                "key": "text27",
                "type": null,
                "name": "Text27",
                "desc": "Text27"
            },
            {
                "key": "text28",
                "type": null,
                "name": "Text28",
                "desc": "Text28"
            },
            {
                "key": "text29",
                "type": null,
                "name": "Text29",
                "desc": "Text29"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Text3",
                "desc": "Text3"
            },
            {
                "key": "text30",
                "type": null,
                "name": "Text30",
                "desc": "Text30"
            },
            {
                "key": "text31",
                "type": null,
                "name": "Text31",
                "desc": "Text31"
            },
            {
                "key": "text32",
                "type": null,
                "name": "Text32",
                "desc": "Text32"
            },
            {
                "key": "text33",
                "type": null,
                "name": "Text33",
                "desc": "Text33"
            },
            {
                "key": "text34",
                "type": null,
                "name": "Text34",
                "desc": "Text34"
            },
            {
                "key": "text35",
                "type": null,
                "name": "Text35",
                "desc": "Text35"
            },
            {
                "key": "text36",
                "type": null,
                "name": "Text36",
                "desc": "Text36"
            },
            {
                "key": "text37",
                "type": null,
                "name": "Text37",
                "desc": "Text37"
            },
            {
                "key": "text38",
                "type": null,
                "name": "Text38",
                "desc": "Text38"
            },
            {
                "key": "text39",
                "type": null,
                "name": "Text39",
                "desc": "Text39"
            },
            {
                "key": "text4",
                "type": null,
                "name": "Text4",
                "desc": "Text4"
            },
            {
                "key": "text40",
                "type": null,
                "name": "Text40",
                "desc": "Text40"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Text5",
                "desc": "Text5"
            },
            {
                "key": "text6",
                "type": null,
                "name": "Text6",
                "desc": "Text6"
            },
            {
                "key": "text7",
                "type": null,
                "name": "Text7",
                "desc": "Text7"
            },
            {
                "key": "text8",
                "type": null,
                "name": "Text8",
                "desc": "Text8"
            },
            {
                "key": "text9",
                "type": null,
                "name": "Text9",
                "desc": "Text9"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno10",
                "type": null,
                "name": "Yes No10",
                "desc": "Yes No10"
            },
            {
                "key": "yesno11",
                "type": null,
                "name": "Yes No11",
                "desc": "Yes No11"
            },
            {
                "key": "yesno12",
                "type": null,
                "name": "Yes No12",
                "desc": "Yes No12"
            },
            {
                "key": "yesno13",
                "type": null,
                "name": "Yes No13",
                "desc": "Yes No13"
            },
            {
                "key": "yesno14",
                "type": null,
                "name": "Yes No14",
                "desc": "Yes No14"
            },
            {
                "key": "yesno15",
                "type": null,
                "name": "Yes No15",
                "desc": "Yes No15"
            },
            {
                "key": "yesno16",
                "type": null,
                "name": "Yes No16",
                "desc": "Yes No16"
            },
            {
                "key": "yesno17",
                "type": null,
                "name": "Yes No17",
                "desc": "Yes No17"
            },
            {
                "key": "yesno18",
                "type": null,
                "name": "Yes No18",
                "desc": "Yes No18"
            },
            {
                "key": "yesno19",
                "type": null,
                "name": "Yes No19",
                "desc": "Yes No19"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            },
            {
                "key": "yesno20",
                "type": null,
                "name": "Yes No20",
                "desc": "Yes No20"
            },
            {
                "key": "yesno3",
                "type": null,
                "name": "Yes No3",
                "desc": "Yes No3"
            },
            {
                "key": "yesno4",
                "type": null,
                "name": "Yes No4",
                "desc": "Yes No4"
            },
            {
                "key": "yesno5",
                "type": null,
                "name": "Yes No5",
                "desc": "Yes No5"
            },
            {
                "key": "yesno6",
                "type": null,
                "name": "Yes No6",
                "desc": "Yes No6"
            },
            {
                "key": "yesno7",
                "type": null,
                "name": "Yes No7",
                "desc": "Yes No7"
            },
            {
                "key": "yesno8",
                "type": null,
                "name": "Yes No8",
                "desc": "Yes No8"
            },
            {
                "key": "yesno9",
                "type": null,
                "name": "Yes No9",
                "desc": "Yes No9"
            }
        ]
    },
    {
        "table": "preptype",
        "name": "Preparation Type",
        "desc": "Describe a Preparation Type. For example, Cleared and Stained, Mounted, etc.",
        "items": [
            {
                "key": "attributedefs",
                "type": "OneToMany",
                "name": "Attribute Defs",
                "desc": "Attribute Defs"
            },
            {
                "key": "collection",
                "type": null,
                "name": "Collection",
                "desc": "Collection"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "isloanable",
                "type": "java.lang.Boolean",
                "name": "Is Loanable",
                "desc": "Is Loanable"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "project",
        "name": "Project",
        "desc": "Describes a grouping of Collection Objects.",
        "items": [
            {
                "key": "agent",
                "type": "ManyToOne",
                "name": "Agent",
                "desc": "Agent"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "collectionobjects",
                "type": null,
                "name": "Collection Objects",
                "desc": "Collection Objects"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "enddate",
                "type": "java.util.Calendar",
                "name": "End Date",
                "desc": "Date project ended"
            },
            {
                "key": "grantagency",
                "type": null,
                "name": "Grant Agency",
                "desc": "Grant Agency"
            },
            {
                "key": "grantnumber",
                "type": null,
                "name": "Grant Number",
                "desc": "Grant Number"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": "java.lang.Float",
                "name": "Number1",
                "desc": "User definable"
            },
            {
                "key": "number2",
                "type": "java.lang.Float",
                "name": "Number2",
                "desc": "User definable"
            },
            {
                "key": "projectdescription",
                "type": "java.lang.String",
                "name": "Description",
                "desc": "Description of the project"
            },
            {
                "key": "projectname",
                "type": "java.lang.String",
                "name": "Project Name",
                "desc": "Name of the project"
            },
            {
                "key": "projectnumber",
                "type": null,
                "name": "Project Number",
                "desc": "Project Number"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "startdate",
                "type": "java.util.Calendar",
                "name": "Start Date",
                "desc": "Date project began"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable"
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "User definable"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "url",
                "type": "java.lang.String",
                "name": "URL",
                "desc": "URL for project"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "Yes No1",
                "desc": "User definable"
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "Yes No2",
                "desc": "User definable"
            }
        ]
    },
    {
        "table": "recordset",
        "name": "Record Set",
        "desc": "Describes a set of records of any type that can be acted upon within the applicatiton.",
        "items": [
            {
                "key": "allpermissionlevel",
                "type": "java.lang.Integer",
                "name": "All Permission Level",
                "desc": "All Permission Level"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "dbtableid",
                "type": "java.lang.Integer",
                "name": "Database Table Id",
                "desc": "Database Table Id"
            },
            {
                "key": "group",
                "type": "ManyToOne",
                "name": "Group",
                "desc": "Group"
            },
            {
                "key": "grouppermissionlevel",
                "type": "java.lang.Integer",
                "name": "Group Permission Level",
                "desc": "Group Permission Level"
            },
            {
                "key": "inforequest",
                "type": null,
                "name": "Info Request",
                "desc": "Info Request"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "ownerpermissionlevel",
                "type": "java.lang.Integer",
                "name": "Owner Permission Level",
                "desc": "Owner Permission Level"
            },
            {
                "key": "recordsetitems",
                "type": null,
                "name": "Record Set Items",
                "desc": "Record Set Items"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "specifyuser",
                "type": null,
                "name": "Specify User",
                "desc": "Specify User"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "type",
                "type": null,
                "name": "Type",
                "desc": "Type"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "recordsetitem",
        "name": "Record Set Item",
        "desc": "Record Set Item",
        "items": [
            {
                "key": "order",
                "type": null,
                "name": "Order",
                "desc": "Order"
            },
            {
                "key": "recordid",
                "type": null,
                "name": "Record Id",
                "desc": "Record Id"
            },
            {
                "key": "recordset",
                "type": null,
                "name": "Record Set",
                "desc": "Record Set"
            }
        ]
    },
    {
        "table": "referencework",
        "name": "Reference Work",
        "desc": "A literary reference work.",
        "items": [
            {
                "key": "authors",
                "type": "OneToMany",
                "name": "Authors",
                "desc": "Authors"
            },
            {
                "key": "collectionobjectcitations",
                "type": "OneToMany",
                "name": "Collection Object Citations",
                "desc": "Collection Object Citations"
            },
            {
                "key": "containedreferenceworks",
                "type": null,
                "name": "Contained Reference Works",
                "desc": "Contained Reference Works"
            },
            {
                "key": "containedrfparent",
                "type": null,
                "name": "Contained R F Parent",
                "desc": "Contained R F Parent"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "determinationcitations",
                "type": "OneToMany",
                "name": "Determination Citations",
                "desc": "Determination Citations"
            },
            {
                "key": "doi",
                "type": null,
                "name": "Doi",
                "desc": "Doi"
            },
            {
                "key": "exsiccatae",
                "type": null,
                "name": "Exsiccatae",
                "desc": "Exsiccatae"
            },
            {
                "key": "guid",
                "type": "java.lang.String",
                "name": "GUID",
                "desc": "GUID"
            },
            {
                "key": "institution",
                "type": null,
                "name": "Institution",
                "desc": "Institution"
            },
            {
                "key": "isbn",
                "type": null,
                "name": "ISBN",
                "desc": "ISBN"
            },
            {
                "key": "ispublished",
                "type": "java.lang.Boolean",
                "name": "Is Published",
                "desc": "Is Published"
            },
            {
                "key": "journal",
                "type": "ManyToOne",
                "name": "Journal",
                "desc": "Journal"
            },
            {
                "key": "librarynumber",
                "type": "java.lang.String",
                "name": "Library Number",
                "desc": "Library Number"
            },
            {
                "key": "localitycitations",
                "type": "OneToMany",
                "name": "Locality Citations",
                "desc": "Locality Citations"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": "java.lang.Float",
                "name": "Number1",
                "desc": "User definable"
            },
            {
                "key": "number2",
                "type": "java.lang.Float",
                "name": "Number2",
                "desc": "User definable"
            },
            {
                "key": "pages",
                "type": "java.lang.String",
                "name": "Pages",
                "desc": "Number of pages or Page range for Journal articles"
            },
            {
                "key": "placeofpublication",
                "type": "java.lang.String",
                "name": "Place Of Publication",
                "desc": "Place Of Publication"
            },
            {
                "key": "publisher",
                "type": "java.lang.String",
                "name": "Publisher",
                "desc": "Publisher"
            },
            {
                "key": "referenceworkattachments",
                "type": null,
                "name": "Reference Work Attachments",
                "desc": "Reference Work Attachments"
            },
            {
                "key": "referenceworktype",
                "type": "java.lang.Byte",
                "name": "Type",
                "desc": "Type of Reference (Book(0), Electronic Media(1), Paper(2), Technical Report(3), Thesis(4), Section in book(5))"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "taxoncitations",
                "type": "OneToMany",
                "name": "Taxon Citations",
                "desc": "Taxon Citations"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable"
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "User definable"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "title",
                "type": "java.lang.String",
                "name": "Title",
                "desc": "Title of reference"
            },
            {
                "key": "uri",
                "type": null,
                "name": "Uri",
                "desc": "Uri"
            },
            {
                "key": "url",
                "type": "java.lang.String",
                "name": "URL",
                "desc": "URL"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "volume",
                "type": "java.lang.String",
                "name": "Volume",
                "desc": "Volume/Issue for Journal articles"
            },
            {
                "key": "workdate",
                "type": "java.lang.String",
                "name": "Work Date",
                "desc": "Work Date"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "Yes No1",
                "desc": "User definable"
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "Yes No2",
                "desc": "User definable"
            }
        ]
    },
    {
        "table": "referenceworkattachment",
        "name": "Reference Work Attachment",
        "desc": "Reference Work Attachment",
        "items": [
            {
                "key": "attachment",
                "type": null,
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "referencework",
                "type": null,
                "name": "Reference Work",
                "desc": "Reference Work"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "relativeage",
        "name": "Relative Age",
        "desc": "Relative Age",
        "items": [
            {
                "key": "agename",
                "type": "ManyToOne",
                "name": "Age Name",
                "desc": "Age Name"
            },
            {
                "key": "agenameend",
                "type": "ManyToOne",
                "name": "Age Name End",
                "desc": "Age Name End"
            },
            {
                "key": "agent1",
                "type": "ManyToOne",
                "name": "Agent1",
                "desc": "Agent1"
            },
            {
                "key": "agent2",
                "type": "ManyToOne",
                "name": "Agent2",
                "desc": "Agent2"
            },
            {
                "key": "agetype",
                "type": "java.lang.String",
                "name": "Age Type",
                "desc": "Age Type"
            },
            {
                "key": "ageuncertainty",
                "type": "java.math.BigDecimal",
                "name": "Age Uncertainty",
                "desc": "Age Uncertainty"
            },
            {
                "key": "collectiondate",
                "type": "java.util.Date",
                "name": "Collection Date",
                "desc": "Collection Date"
            },
            {
                "key": "collectionobject",
                "type": "ManyToOne",
                "name": "Collection Object",
                "desc": "Collection Object"
            },
            {
                "key": "createdbyagent",
                "type": "ManyToOne",
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "date1",
                "type": "java.util.Date",
                "name": "Date1",
                "desc": "Date1"
            },
            {
                "key": "date2",
                "type": "java.util.Date",
                "name": "Date2",
                "desc": "Date2"
            },
            {
                "key": "datingmethod",
                "type": "java.lang.String",
                "name": "Dating Method",
                "desc": "Dating Method"
            },
            {
                "key": "datingmethodremarks",
                "type": "text",
                "name": "Dating Method Remarks",
                "desc": "Dating Method Remarks"
            },
            {
                "key": "modifiedbyagent",
                "type": "ManyToOne",
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": "java.math.BigDecimal",
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": "java.math.BigDecimal",
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "relativeageattachments",
                "type": "OneToMany",
                "name": "Relative Age Attachments",
                "desc": "Relative Age Attachments"
            },
            {
                "key": "relativeagecitations",
                "type": "OneToMany",
                "name": "Relative Age Citations",
                "desc": "Relative Age Citations"
            },
            {
                "key": "relativeageid",
                "type": "java.lang.Integer",
                "name": "Relative Age Id",
                "desc": "Relative Age Id"
            },
            {
                "key": "relativeageperiod",
                "type": "java.math.BigDecimal",
                "name": "Relative Age Period",
                "desc": "Relative Age Period"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "text1",
                "type": "text",
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": "text",
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "verbatimname",
                "type": "text",
                "name": "Verbatim Name",
                "desc": "Verbatim Name"
            },
            {
                "key": "verbatimperiod",
                "type": "text",
                "name": "Verbatim Period",
                "desc": "Verbatim Period"
            },
            {
                "key": "version",
                "type": "java.lang.Integer",
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "YesNo1",
                "desc": "YesNo1"
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "YesNo2",
                "desc": "YesNo2"
            }
        ]
    },
    {
        "table": "relativeageattachment",
        "name": "Relative Age Attachment",
        "desc": "Relative Age Attachment",
        "items": [
            {
                "key": "attachment",
                "type": "ManyToOne",
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "collectionmember",
                "type": "ManyToOne",
                "name": "Collection Member",
                "desc": "Collection Member"
            },
            {
                "key": "createdbyagent",
                "type": "ManyToOne",
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": "ManyToOne",
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": "java.lang.Integer",
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "relativeage",
                "type": "ManyToOne",
                "name": "Relative Age",
                "desc": "Relative Age"
            },
            {
                "key": "relativeageattachmentid",
                "type": "java.lang.Integer",
                "name": "Relative Age Attachment Id",
                "desc": "Relative Age Attachment Id"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": "java.lang.Integer",
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "relativeagecitation",
        "name": "Relative Age Citation",
        "desc": "Relative Age Citation",
        "items": [
            {
                "key": "collectionmember",
                "type": "ManyToOne",
                "name": "Collection Member",
                "desc": "Collection Member"
            },
            {
                "key": "createdbyagent",
                "type": "ManyToOne",
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "figurenumber",
                "type": "java.lang.String",
                "name": "Figure Number",
                "desc": "Figure Number"
            },
            {
                "key": "isfigured",
                "type": "java.lang.Boolean",
                "name": "Is Figured",
                "desc": "Is Figured"
            },
            {
                "key": "modifiedbyagent",
                "type": "ManyToOne",
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "pagenumber",
                "type": "java.lang.String",
                "name": "Page Number",
                "desc": "Page Number"
            },
            {
                "key": "platenumber",
                "type": "java.lang.String",
                "name": "Plate Number",
                "desc": "Plate Number"
            },
            {
                "key": "referencework",
                "type": "ManyToOne",
                "name": "Reference Work",
                "desc": "Reference Work"
            },
            {
                "key": "relativeage",
                "type": "ManyToOne",
                "name": "Relative Age",
                "desc": "Relative Age"
            },
            {
                "key": "relativeagecitationid",
                "type": "java.lang.Integer",
                "name": "Relative Age Citation Id",
                "desc": "Relative Age Citation Id"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": "java.lang.Integer",
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "repositoryagreement",
        "name": "Repository Agreement",
        "desc": "An agreement for allowing an Accession to occur, but does not include ownership.",
        "items": [
            {
                "key": "accessions",
                "type": "OneToMany",
                "name": "Accessions",
                "desc": "Accessions"
            },
            {
                "key": "addressofrecord",
                "type": null,
                "name": "Address Of Record",
                "desc": "Address Of Record"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "datereceived",
                "type": "java.util.Calendar",
                "name": "Date Received",
                "desc": "Date Received"
            },
            {
                "key": "division",
                "type": null,
                "name": "Division",
                "desc": "Division"
            },
            {
                "key": "enddate",
                "type": "java.util.Calendar",
                "name": "End Date",
                "desc": "End Date"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": "java.lang.Float",
                "name": "Number1",
                "desc": "User definable"
            },
            {
                "key": "number2",
                "type": "java.lang.Float",
                "name": "Number2",
                "desc": "User definable"
            },
            {
                "key": "originator",
                "type": "ManyToOne",
                "name": "Originator",
                "desc": "Originator"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "repositoryagreementagents",
                "type": "OneToMany",
                "name": "Repository Agreement Agents",
                "desc": "Repository Agreement Agents"
            },
            {
                "key": "repositoryagreementattachments",
                "type": "OneToMany",
                "name": "Repository Agreement Attachments",
                "desc": "Repository Agreement Attachments"
            },
            {
                "key": "repositoryagreementauthorizations",
                "type": "OneToMany",
                "name": "Repository Agreement Authorizations",
                "desc": "Repository Agreement Authorizations"
            },
            {
                "key": "repositoryagreementnumber",
                "type": null,
                "name": "RA Number",
                "desc": "RA Number"
            },
            {
                "key": "startdate",
                "type": "java.util.Calendar",
                "name": "Start Date",
                "desc": "Start Date"
            },
            {
                "key": "status",
                "type": "java.lang.String",
                "name": "Status",
                "desc": "Status"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable"
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "User definable"
            },
            {
                "key": "text3",
                "type": "java.lang.String",
                "name": "Text3",
                "desc": "User definable"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "Yes No1",
                "desc": "User definable"
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "Yes No2",
                "desc": "User definable"
            }
        ]
    },
    {
        "table": "repositoryagreementattachment",
        "name": "Repository Agreement Attachment",
        "desc": "Refers to an attachment and provides order.",
        "items": [
            {
                "key": "attachment",
                "type": "ManyToOne",
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": "java.lang.Integer",
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "repositoryagreement",
                "type": "ManyToOne",
                "name": "Repository Agreement",
                "desc": "Repository Agreement"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "role",
        "name": "Role",
        "desc": "Stores names, descriptions, and collection information for user-created roles.",
        "items": [
            {
                "key": "collection",
                "type": "ManyToOne",
                "name": "collection",
                "desc": "Collection"
            },
            {
                "key": "description",
                "type": "text",
                "name": "description",
                "desc": "Description"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "name",
                "desc": "Name"
            },
            {
                "key": "roleid",
                "type": "java.lang.Integer",
                "name": "roleId",
                "desc": "Role id"
            }
        ]
    },
    {
        "table": "rolepolicy",
        "name": "Role Policy",
        "desc": "Stores resource and action permissions for user-created roles within a collection.",
        "items": [
            {
                "key": "action",
                "type": "java.lang.String",
                "name": "action",
                "desc": "Action"
            },
            {
                "key": "resource",
                "type": "java.lang.String",
                "name": "resource",
                "desc": "Resource"
            },
            {
                "key": "role",
                "type": "ManyToOne",
                "name": "role",
                "desc": "Role"
            },
            {
                "key": "rolepolicyid",
                "type": "java.lang.Integer",
                "name": "rolePolicyId",
                "desc": "Role policy id"
            }
        ]
    },
    {
        "table": "shipment",
        "name": "Shipment",
        "desc": "Describes the shipment of a Loan or Exchange.",
        "items": [
            {
                "key": "borrow",
                "type": null,
                "name": "Borrow",
                "desc": "Borrow"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "exchangeout",
                "type": null,
                "name": "Exchange Out",
                "desc": "Exchange Out"
            },
            {
                "key": "gift",
                "type": null,
                "name": "Gift",
                "desc": "Gift"
            },
            {
                "key": "insuredforamount",
                "type": "java.lang.String",
                "name": "Insured For Amount",
                "desc": "Insured For Amount"
            },
            {
                "key": "loan",
                "type": null,
                "name": "Loan",
                "desc": "Loan"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": "java.lang.Float",
                "name": "Number1",
                "desc": "User definable"
            },
            {
                "key": "number2",
                "type": "java.lang.Float",
                "name": "Number2",
                "desc": "User definable"
            },
            {
                "key": "numberofpackages",
                "type": "java.lang.Short",
                "name": "Num Of Packages",
                "desc": "Number of packages shipped"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "shipmentdate",
                "type": "java.util.Calendar",
                "name": "Shipment Date",
                "desc": "Date of shipment"
            },
            {
                "key": "shipmentmethod",
                "type": "java.lang.String",
                "name": "Method",
                "desc": "Description of shipment. E.g. `Hand-carried`, `Overnight`, `Air`, `Land`, `Sea`, ..."
            },
            {
                "key": "shipmentnumber",
                "type": "java.lang.String",
                "name": "Shipment Number",
                "desc": "Shipper`s tracking number"
            },
            {
                "key": "shippedby",
                "type": "ManyToOne",
                "name": "Shipped By",
                "desc": "Shipped By"
            },
            {
                "key": "shippedto",
                "type": "ManyToOne",
                "name": "Shipped To",
                "desc": "Shipped To"
            },
            {
                "key": "shipper",
                "type": "ManyToOne",
                "name": "Shipper",
                "desc": "Shipper"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable"
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "User definable"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "weight",
                "type": "java.lang.String",
                "name": "Weight",
                "desc": "The weight of the shipment"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "Yes No1",
                "desc": "User definable"
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "Yes No2",
                "desc": "User definable"
            }
        ]
    },
    {
        "table": "spappresource",
        "name": "App Resource",
        "desc": "System Table: This represents a resource, typically XML, that the application uses during run time.",
        "items": [
            {
                "key": "allpermissionlevel",
                "type": "java.lang.Integer",
                "name": "All Permission Level",
                "desc": "All Permission Level"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "description",
                "type": "java.lang.String",
                "name": "Description",
                "desc": "Description"
            },
            {
                "key": "group",
                "type": "ManyToOne",
                "name": "Group",
                "desc": "Group"
            },
            {
                "key": "grouppermissionlevel",
                "type": "java.lang.Integer",
                "name": "Group Permission Level",
                "desc": "Group Permission Level"
            },
            {
                "key": "level",
                "type": "java.lang.Short",
                "name": "Level",
                "desc": "Level"
            },
            {
                "key": "metadata",
                "type": "java.lang.String",
                "name": "Meta Data",
                "desc": "Meta Data"
            },
            {
                "key": "mimetype",
                "type": "java.lang.String",
                "name": "Mime Type",
                "desc": "Mime Type"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "ownerpermissionlevel",
                "type": "java.lang.Integer",
                "name": "Owner Permission Level",
                "desc": "Owner Permission Level"
            },
            {
                "key": "spappresourcedatas",
                "type": "OneToMany",
                "name": "App Resource Datas",
                "desc": "App Resource Datas"
            },
            {
                "key": "spappresourcedir",
                "type": null,
                "name": "Sp App Resource Dir",
                "desc": "Sp App Resource Dir"
            },
            {
                "key": "specifyuser",
                "type": "ManyToOne",
                "name": "Specify User",
                "desc": "Specify User"
            },
            {
                "key": "spreports",
                "type": null,
                "name": "Sp Reports",
                "desc": "Sp Reports"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "spappresourcedata",
        "name": "App Resource Data",
        "desc": "System Table: The data associated with an application resource.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "data",
                "type": "text",
                "name": "Data",
                "desc": "Data"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "spappresource",
                "type": "ManyToOne",
                "name": "App Resource",
                "desc": "App Resource"
            },
            {
                "key": "spviewsetobj",
                "type": "ManyToOne",
                "name": "View Set Obj",
                "desc": "View Set Obj"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "spappresourcedir",
        "name": "App Resource Default",
        "desc": "System Table: the default for application resources.",
        "items": [
            {
                "key": "collection",
                "type": "ManyToOne",
                "name": "Collection",
                "desc": "Collection"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "discipline",
                "type": "ManyToOne",
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "disciplinetype",
                "type": "java.lang.String",
                "name": "Discipline Type",
                "desc": "Discipline Type"
            },
            {
                "key": "ispersonal",
                "type": null,
                "name": "Is Personal",
                "desc": "Is Personal"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "specifyuser",
                "type": "ManyToOne",
                "name": "Specify User",
                "desc": "Specify User"
            },
            {
                "key": "sppersistedappresources",
                "type": null,
                "name": "Sp Persisted App Resources",
                "desc": "Sp Persisted App Resources"
            },
            {
                "key": "sppersistedviewsets",
                "type": null,
                "name": "Sp Persisted View Sets",
                "desc": "Sp Persisted View Sets"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "usertype",
                "type": "java.lang.String",
                "name": "User Group",
                "desc": "User Group"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "spattachmentdataset",
        "name": "Spattachmentdataset",
        "desc": "Holds attachment data sets.",
        "items": [
            {
                "key": "collection",
                "type": "ManyToOne",
                "name": "collection",
                "desc": "Collection"
            },
            {
                "key": "createdbyagent",
                "type": "ManyToOne",
                "name": "createdbyagent",
                "desc": "Createdbyagent"
            },
            {
                "key": "data",
                "type": "json",
                "name": "data",
                "desc": "Data"
            },
            {
                "key": "importedfilename",
                "type": "text",
                "name": "importedfilename",
                "desc": "Importedfilename"
            },
            {
                "key": "modifiedbyagent",
                "type": "ManyToOne",
                "name": "modifiedbyagent",
                "desc": "Modifiedbyagent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "name",
                "desc": "Name"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "remarks",
                "desc": "Remarks"
            },
            {
                "key": "spattachmentdatasetid",
                "type": "java.lang.Integer",
                "name": "spAttachmentDataSetId",
                "desc": "Sp attachment data set id"
            },
            {
                "key": "specifyuser",
                "type": "ManyToOne",
                "name": "specifyuser",
                "desc": "Specifyuser"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "timestampcreated",
                "desc": "Timestampcreated"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "timestampmodified",
                "desc": "Timestampmodified"
            },
            {
                "key": "uploadplan",
                "type": "text",
                "name": "uploadplan",
                "desc": "Uploadplan"
            },
            {
                "key": "uploadresult",
                "type": "json",
                "name": "uploadresult",
                "desc": "Uploadresult"
            }
        ]
    },
    {
        "table": "spauditlog",
        "name": "Sp Audit Log",
        "desc": "Sp Audit Log",
        "items": [
            {
                "key": "action",
                "type": null,
                "name": "Action",
                "desc": "The addition, update, or deletion action that was taken on the data field."
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "A foreign key link to the Agent table and to the name of the logged-in user who made a change."
            },
            {
                "key": "fields",
                "type": null,
                "name": "Fields",
                "desc": "The SpAuditlogField records associated with the change."
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "This is the same data as in the CreatedByAgent field."
            },
            {
                "key": "parentrecordid",
                "type": null,
                "name": "Parent Record Id",
                "desc": "The unique record ID of the record in the parent table to which the changed record is linked."
            },
            {
                "key": "parenttablenum",
                "type": null,
                "name": "Parent Table Num",
                "desc": "The number ID or name of the parent table of the record that has been modified.  For example if the changed record is in the Collection Object table, this value points to the 'Collection' table."
            },
            {
                "key": "recordid",
                "type": null,
                "name": "Record Id",
                "desc": "The unique record ID of the record that was created, changed, or deleted."
            },
            {
                "key": "recordversion",
                "type": null,
                "name": "Record Version",
                "desc": "The internal number used by Hibernate within Specify to keep track of the version of the changed record."
            },
            {
                "key": "tablenum",
                "type": null,
                "name": "Table Num",
                "desc": "The table of the new, changed, or deleted record."
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "The date and time the record change, addition, or deletion was made."
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Same information as the TimestampCreated field."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Internal number, always = 0. No reporting value."
            }
        ]
    },
    {
        "table": "spauditlogfield",
        "name": "Sp Audit Log Field",
        "desc": "Sp Audit Log Field",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Same information as CreatedByAgent in the SpAuditlog table."
            },
            {
                "key": "fieldname",
                "type": null,
                "name": "Field Name",
                "desc": "Name of the data field which had a changed or deleted value."
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Same information as CreatedByAgent in the SpAuditlog table."
            },
            {
                "key": "newvalue",
                "type": null,
                "name": "New Value",
                "desc": "Resulting value of changed field."
            },
            {
                "key": "oldvalue",
                "type": null,
                "name": "Old Value",
                "desc": "Original value of the field before the change or deletion."
            },
            {
                "key": "spauditlog",
                "type": null,
                "name": "Sp Audit Log",
                "desc": "Primary key value for linking to SpAuditlog table."
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Same information as timestampCreated in the spAuditLog table."
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Same information as timestampCreated in the spAuditLog table."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Internal number, always = 0. No reporting value."
            }
        ]
    },
    {
        "table": "spdataset",
        "name": "Spdataset",
        "desc": "Stores Specify Data Sets created during bulk import using the WorkBench, typically through spreadsheet uploads.",
        "items": [
            {
                "key": "collection",
                "type": "ManyToOne",
                "name": "collection",
                "desc": "Collection"
            },
            {
                "key": "columns",
                "type": "json",
                "name": "columns",
                "desc": "Columns"
            },
            {
                "key": "createdbyagent",
                "type": "ManyToOne",
                "name": "createdbyagent",
                "desc": "Createdbyagent"
            },
            {
                "key": "data",
                "type": "json",
                "name": "data",
                "desc": "Data"
            },
            {
                "key": "importedfilename",
                "type": "text",
                "name": "importedfilename",
                "desc": "Importedfilename"
            },
            {
                "key": "modifiedbyagent",
                "type": "ManyToOne",
                "name": "modifiedbyagent",
                "desc": "Modifiedbyagent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "name",
                "desc": "Name"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "remarks",
                "desc": "Remarks"
            },
            {
                "key": "rowresults",
                "type": "java.lang.String",
                "name": "rowresults",
                "desc": "Rowresults"
            },
            {
                "key": "spdatasetattachments",
                "type": "OneToMany",
                "name": "Sp Data Set Attachments",
                "desc": "Sp Data Set Attachments"
            },
            {
                "key": "spdatasetid",
                "type": "java.lang.Integer",
                "name": "spDataSetId",
                "desc": "Sp data set id"
            },
            {
                "key": "specifyuser",
                "type": "ManyToOne",
                "name": "specifyuser",
                "desc": "Specifyuser"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "timestampcreated",
                "desc": "Timestampcreated"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "timestampmodified",
                "desc": "Timestampmodified"
            },
            {
                "key": "uploadplan",
                "type": "text",
                "name": "uploadplan",
                "desc": "Uploadplan"
            },
            {
                "key": "uploadresult",
                "type": "json",
                "name": "uploadresult",
                "desc": "Uploadresult"
            },
            {
                "key": "visualorder",
                "type": "json",
                "name": "visualorder",
                "desc": "Visualorder"
            }
        ]
    },
    {
        "table": "spdatasetattachment",
        "name": "Sp Data Set Attachment",
        "desc": "An attachment temporarily associated with a Specify Data Set for use in a WorkBench upload.",
        "items": [
            {
                "key": "attachment",
                "type": "ManyToOne",
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "collectionmemberid",
                "type": "java.lang.Integer",
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": "ManyToOne",
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": "ManyToOne",
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": "java.lang.Integer",
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "spdataset",
                "type": "ManyToOne",
                "name": "Spdataset",
                "desc": "Spdataset"
            },
            {
                "key": "spdatasetattachmentid",
                "type": "java.lang.Integer",
                "name": "Sp Data Set Attachment Id",
                "desc": "Sp Data Set Attachment Id"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": "java.lang.Integer",
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "specifyuser",
        "name": "Specify User",
        "desc": "System Table: This represents Specify User within the application.",
        "items": [
            {
                "key": "accumminloggedin",
                "type": null,
                "name": "Accumulated Minutes Logged In",
                "desc": "Accumulated Minutes Logged In"
            },
            {
                "key": "agents",
                "type": null,
                "name": "Agents",
                "desc": "Agents"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "email",
                "type": "java.lang.String",
                "name": "Email",
                "desc": "Email"
            },
            {
                "key": "isloggedin",
                "type": null,
                "name": "Is Logged In",
                "desc": "Is Logged In"
            },
            {
                "key": "isloggedinreport",
                "type": null,
                "name": "Is Logged In Report",
                "desc": "Is Logged In Report"
            },
            {
                "key": "logincollectionname",
                "type": null,
                "name": "Login Collection Name",
                "desc": "Login Collection Name"
            },
            {
                "key": "logindisciplinename",
                "type": null,
                "name": "Login Discipline Name",
                "desc": "Login Discipline Name"
            },
            {
                "key": "loginouttime",
                "type": null,
                "name": "Login Out Time",
                "desc": "Login Out Time"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "password",
                "type": null,
                "name": "Password",
                "desc": "Password"
            },
            {
                "key": "spappresourcedirs",
                "type": null,
                "name": "Sp App Resource Dirs",
                "desc": "Sp App Resource Dirs"
            },
            {
                "key": "spappresources",
                "type": "OneToMany",
                "name": "App Resources",
                "desc": "App Resources"
            },
            {
                "key": "spprincipals",
                "type": null,
                "name": "Sp Principals",
                "desc": "Sp Principals"
            },
            {
                "key": "spquerys",
                "type": null,
                "name": "Sp Queries",
                "desc": "Sp Queries"
            },
            {
                "key": "tasksemaphores",
                "type": null,
                "name": "Task Semaphores",
                "desc": "Task Semaphores"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "usertype",
                "type": "java.lang.String",
                "name": "User Group",
                "desc": "User Group"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "workbenches",
                "type": "OneToMany",
                "name": "Workbenches",
                "desc": "Workbenches"
            },
            {
                "key": "workbenchtemplates",
                "type": "OneToMany",
                "name": "Workbench Templates",
                "desc": "Workbench Templates"
            }
        ]
    },
    {
        "table": "spexportschema",
        "name": "Sp Export Schema",
        "desc": "System Table:",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "description",
                "type": null,
                "name": "Description",
                "desc": "Description"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "schemaname",
                "type": null,
                "name": "Schema Name",
                "desc": "Schema Name"
            },
            {
                "key": "schemaversion",
                "type": null,
                "name": "Schema Version",
                "desc": "Schema Version"
            },
            {
                "key": "spexportschemaitems",
                "type": null,
                "name": "Sp Export Schema Items",
                "desc": "Sp Export Schema Items"
            },
            {
                "key": "spexportschemamappings",
                "type": null,
                "name": "Sp Export Schema Mappings",
                "desc": "Sp Export Schema Mappings"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "spexportschemaitem",
        "name": "Sp Export Schema Item",
        "desc": "System Table:",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "datatype",
                "type": null,
                "name": "Data Type",
                "desc": "Data Type"
            },
            {
                "key": "description",
                "type": null,
                "name": "Description",
                "desc": "Description"
            },
            {
                "key": "fieldname",
                "type": null,
                "name": "Field Name",
                "desc": "Field Name"
            },
            {
                "key": "formatter",
                "type": null,
                "name": "Formatter",
                "desc": "Formatter"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "spexportschema",
                "type": null,
                "name": "Sp Export Schema",
                "desc": "Sp Export Schema"
            },
            {
                "key": "splocalecontaineritem",
                "type": null,
                "name": "Sp Locale Container Item",
                "desc": "Sp Locale Container Item"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "spexportschemaitemmapping",
        "name": "Sp Export Schema Item Mapping",
        "desc": "Sp Export Schema Item Mapping",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "exportedfieldname",
                "type": null,
                "name": "Exported Field Name",
                "desc": "Exported Field Name"
            },
            {
                "key": "exportschemaitem",
                "type": null,
                "name": "Export Schema Item",
                "desc": "Export Schema Item"
            },
            {
                "key": "exportschemamapping",
                "type": null,
                "name": "Export Schema Mapping",
                "desc": "Export Schema Mapping"
            },
            {
                "key": "extensionitem",
                "type": null,
                "name": "Extension Item",
                "desc": "Extension Item"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "queryfield",
                "type": null,
                "name": "Query Field",
                "desc": "Query Field"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "rowtype",
                "type": null,
                "name": "Row Type",
                "desc": "Row Type"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "spexportschemamapping",
        "name": "Sp Export Schema Mapping",
        "desc": "Sp Export Schema Mapping",
        "items": [
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "description",
                "type": null,
                "name": "Description",
                "desc": "Description"
            },
            {
                "key": "mappingname",
                "type": null,
                "name": "Mapping Name",
                "desc": "Mapping Name"
            },
            {
                "key": "mappings",
                "type": null,
                "name": "Mappings",
                "desc": "Mappings"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "spexportschemas",
                "type": null,
                "name": "Sp Export Schemas",
                "desc": "Sp Export Schemas"
            },
            {
                "key": "symbiotainstances",
                "type": null,
                "name": "Symbiota Instances",
                "desc": "Symbiota Instances"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampexported",
                "type": null,
                "name": "Timestamp Exported",
                "desc": "Timestamp Exported"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "spfieldvaluedefault",
        "name": "Sp Field Value Default",
        "desc": "System Table: This represents a default field value for a form.",
        "items": [
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "fieldname",
                "type": null,
                "name": "Field Name",
                "desc": "Field Name"
            },
            {
                "key": "idvalue",
                "type": null,
                "name": "Id Value",
                "desc": "Id Value"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "strvalue",
                "type": null,
                "name": "Str Value",
                "desc": "Str Value"
            },
            {
                "key": "tablename",
                "type": null,
                "name": "Table Name",
                "desc": "Table Name"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "splocalecontainer",
        "name": "Locale Container",
        "desc": "System Table: This is used for localizing the database schema it has a localized name and description but can also contain localizable items.",
        "items": [
            {
                "key": "aggregator",
                "type": null,
                "name": "Aggregator",
                "desc": "Aggregator"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "defaultui",
                "type": null,
                "name": "Default U I",
                "desc": "Default U I"
            },
            {
                "key": "descs",
                "type": "OneToMany",
                "name": "Descs",
                "desc": "Descs"
            },
            {
                "key": "discipline",
                "type": "ManyToOne",
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "format",
                "type": null,
                "name": "Format",
                "desc": "Format"
            },
            {
                "key": "ishidden",
                "type": null,
                "name": "Is Hidden",
                "desc": "Is Hidden"
            },
            {
                "key": "issystem",
                "type": null,
                "name": "Is System",
                "desc": "Is System"
            },
            {
                "key": "isuiformatter",
                "type": null,
                "name": "Is U I Formatter",
                "desc": "Is U I Formatter"
            },
            {
                "key": "items",
                "type": "OneToMany",
                "name": "Items",
                "desc": "Items"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "names",
                "type": "OneToMany",
                "name": "Names",
                "desc": "Names"
            },
            {
                "key": "picklistname",
                "type": null,
                "name": "Pick List Name",
                "desc": "Pick List Name"
            },
            {
                "key": "schematype",
                "type": null,
                "name": "Schema Type",
                "desc": "The type of schema it belongs to: the core schema or the workbench schema"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "type",
                "type": "java.lang.String",
                "name": "Type",
                "desc": "Type"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "splocalecontaineritem",
        "name": "Locale Container Item",
        "desc": "System Table: This is used for localizing the database schema it has a localized name and description.",
        "items": [
            {
                "key": "container",
                "type": "ManyToOne",
                "name": "Container",
                "desc": "Container"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "descs",
                "type": "OneToMany",
                "name": "Descs",
                "desc": "Descs"
            },
            {
                "key": "format",
                "type": null,
                "name": "Format",
                "desc": "Format"
            },
            {
                "key": "ishidden",
                "type": null,
                "name": "Is Hidden",
                "desc": "Is Hidden"
            },
            {
                "key": "isrequired",
                "type": null,
                "name": "Is Required",
                "desc": "Is Required"
            },
            {
                "key": "issystem",
                "type": null,
                "name": "Is System",
                "desc": "Is System"
            },
            {
                "key": "isuiformatter",
                "type": null,
                "name": "Is U I Formatter",
                "desc": "Is U I Formatter"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "names",
                "type": "OneToMany",
                "name": "Names",
                "desc": "Names"
            },
            {
                "key": "picklistname",
                "type": null,
                "name": "Pick List Name",
                "desc": "Pick List Name"
            },
            {
                "key": "spexportschemaitems",
                "type": null,
                "name": "Sp Export Schema Items",
                "desc": "Sp Export Schema Items"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "type",
                "type": "java.lang.String",
                "name": "Type",
                "desc": "Type"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "weblinkname",
                "type": null,
                "name": "Web Link Name",
                "desc": "Web Link Name"
            }
        ]
    },
    {
        "table": "splocaleitemstr",
        "name": "Locale Item String",
        "desc": "System Table: This is used for localizing the database schema it represents a string and also a Language, Country and Variant for that string.",
        "items": [
            {
                "key": "containerdesc",
                "type": null,
                "name": "Container Desc",
                "desc": "Container Desc"
            },
            {
                "key": "containername",
                "type": null,
                "name": "Container Name",
                "desc": "Container Name"
            },
            {
                "key": "country",
                "type": "java.lang.String",
                "name": "Country",
                "desc": "Country"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "itemdesc",
                "type": null,
                "name": "Item Desc",
                "desc": "Item Desc"
            },
            {
                "key": "itemname",
                "type": null,
                "name": "Item Name",
                "desc": "Item Name"
            },
            {
                "key": "language",
                "type": "java.lang.String",
                "name": "Language",
                "desc": "Language"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "text",
                "type": "java.lang.String",
                "name": "Text",
                "desc": "Text"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "variant",
                "type": "java.lang.String",
                "name": "Variant",
                "desc": "Variant"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "spmerging",
        "name": "Spmerging",
        "desc": "Tracks record and task IDs of records being merged.",
        "items": [
            {
                "key": "collection",
                "type": "ManyToOne",
                "name": "collection",
                "desc": "Collection"
            },
            {
                "key": "createdbyagent",
                "type": "ManyToOne",
                "name": "createdbyagent",
                "desc": "Createdbyagent"
            },
            {
                "key": "modifiedbyagent",
                "type": "ManyToOne",
                "name": "modifiedbyagent",
                "desc": "Modifiedbyagent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "name",
                "desc": "Name"
            },
            {
                "key": "newrecorddata",
                "type": "json",
                "name": "newrecorddata",
                "desc": "Newrecorddata"
            },
            {
                "key": "newrecordid",
                "type": "java.lang.Integer",
                "name": "newrecordid",
                "desc": "Newrecordid"
            },
            {
                "key": "oldrecordids",
                "type": "json",
                "name": "oldrecordids",
                "desc": "Oldrecordids"
            },
            {
                "key": "response",
                "type": "text",
                "name": "response",
                "desc": "Response"
            },
            {
                "key": "specifyuser",
                "type": "ManyToOne",
                "name": "specifyuser",
                "desc": "Specifyuser"
            },
            {
                "key": "spmergingid",
                "type": "java.lang.Integer",
                "name": "spMergingId",
                "desc": "Sp merging id"
            },
            {
                "key": "status",
                "type": "java.lang.String",
                "name": "status",
                "desc": "Status"
            },
            {
                "key": "table",
                "type": "java.lang.String",
                "name": "table",
                "desc": "Table"
            },
            {
                "key": "taskid",
                "type": "java.lang.String",
                "name": "taskid",
                "desc": "Taskid"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "timestampcreated",
                "desc": "Timestampcreated"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "timestampmodified",
                "desc": "Timestampmodified"
            }
        ]
    },
    {
        "table": "sppermission",
        "name": "Sp Permission",
        "desc": "System Table:",
        "items": [
            {
                "key": "actions",
                "type": null,
                "name": "Actions",
                "desc": "Actions"
            },
            {
                "key": "name",
                "type": null,
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "permissionclass",
                "type": null,
                "name": "Permission Class",
                "desc": "Permission Class"
            },
            {
                "key": "principals",
                "type": null,
                "name": "Principals",
                "desc": "Principals"
            },
            {
                "key": "targetid",
                "type": null,
                "name": "Target Id",
                "desc": "Target Id"
            }
        ]
    },
    {
        "table": "spprincipal",
        "name": "Sp Principal",
        "desc": "System Table:",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "groupsubclass",
                "type": null,
                "name": "Group Sub Class",
                "desc": "Group Sub Class"
            },
            {
                "key": "grouptype",
                "type": null,
                "name": "Group Type",
                "desc": "Group Type"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": null,
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "permissions",
                "type": null,
                "name": "Permissions",
                "desc": "Permissions"
            },
            {
                "key": "priority",
                "type": null,
                "name": "Priority",
                "desc": "Priority"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "scope",
                "type": null,
                "name": "Scope",
                "desc": "Scope"
            },
            {
                "key": "specifyusers",
                "type": null,
                "name": "Specify Users",
                "desc": "Specify Users"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "spquery",
        "name": "Sp Query",
        "desc": "System Table: This represents a saved Query.",
        "items": [
            {
                "key": "contextname",
                "type": null,
                "name": "Context Name",
                "desc": "Context Name"
            },
            {
                "key": "contexttableid",
                "type": null,
                "name": "Context Table Id",
                "desc": "Context Table Id"
            },
            {
                "key": "countonly",
                "type": null,
                "name": "Count Only",
                "desc": "Count Only"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "fields",
                "type": null,
                "name": "Fields",
                "desc": "Fields"
            },
            {
                "key": "formatauditrecids",
                "type": null,
                "name": "Format Audit Rec Ids",
                "desc": "Format Audit Rec Ids"
            },
            {
                "key": "isfavorite",
                "type": null,
                "name": "Is Favorite",
                "desc": "Is Favorite"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": null,
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "reports",
                "type": null,
                "name": "Reports",
                "desc": "Reports"
            },
            {
                "key": "searchsynonymy",
                "type": null,
                "name": "Search Synonymy",
                "desc": "Search Synonymy"
            },
            {
                "key": "selectdistinct",
                "type": null,
                "name": "Select Distinct",
                "desc": "Select Distinct"
            },
            {
                "key": "smushed",
                "type": null,
                "name": "Smushed",
                "desc": "Smushed"
            },
            {
                "key": "specifyuser",
                "type": null,
                "name": "Specify User",
                "desc": "Specify User"
            },
            {
                "key": "sqlstr",
                "type": null,
                "name": "SQL Str",
                "desc": "SQL Str"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "spqueryfield",
        "name": "Sp Query Field",
        "desc": "System Table: This represents a single field in a saved Query.",
        "items": [
            {
                "key": "allownulls",
                "type": null,
                "name": "Allow Nulls",
                "desc": "Allow Nulls"
            },
            {
                "key": "alwaysfilter",
                "type": null,
                "name": "Always Filter",
                "desc": "Always Filter"
            },
            {
                "key": "columnalias",
                "type": null,
                "name": "Column Alias",
                "desc": "Column Alias"
            },
            {
                "key": "contexttableident",
                "type": null,
                "name": "Context Table Ident",
                "desc": "Context Table Ident"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "endvalue",
                "type": null,
                "name": "End Value",
                "desc": "End Value"
            },
            {
                "key": "fieldname",
                "type": null,
                "name": "Field Name",
                "desc": "Field Name"
            },
            {
                "key": "formatname",
                "type": null,
                "name": "Format Name",
                "desc": "Format Name"
            },
            {
                "key": "isdisplay",
                "type": null,
                "name": "Is Display",
                "desc": "Is Display"
            },
            {
                "key": "isnot",
                "type": null,
                "name": "Is Not",
                "desc": "Is Not"
            },
            {
                "key": "isprompt",
                "type": null,
                "name": "Is Prompt",
                "desc": "Is Prompt"
            },
            {
                "key": "isrelfld",
                "type": null,
                "name": "Is Rel Fld",
                "desc": "Is Rel Fld"
            },
            {
                "key": "mappings",
                "type": null,
                "name": "Mappings",
                "desc": "Mappings"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "operend",
                "type": null,
                "name": "Oper End",
                "desc": "Oper End"
            },
            {
                "key": "operstart",
                "type": null,
                "name": "Oper Start",
                "desc": "Oper Start"
            },
            {
                "key": "position",
                "type": null,
                "name": "Position",
                "desc": "Position"
            },
            {
                "key": "query",
                "type": null,
                "name": "Query",
                "desc": "Query"
            },
            {
                "key": "sorttype",
                "type": null,
                "name": "Sort Type",
                "desc": "Sort Type"
            },
            {
                "key": "startvalue",
                "type": null,
                "name": "Start Value",
                "desc": "Start Value"
            },
            {
                "key": "stringid",
                "type": null,
                "name": "String Id",
                "desc": "String Id"
            },
            {
                "key": "tablelist",
                "type": null,
                "name": "Table List",
                "desc": "Table List"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "spreport",
        "name": "Sp Report",
        "desc": "System Table: This represents a saved Report.",
        "items": [
            {
                "key": "appresource",
                "type": null,
                "name": "App Resource",
                "desc": "App Resource"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": null,
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "query",
                "type": null,
                "name": "Query",
                "desc": "Query"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "repeatcount",
                "type": null,
                "name": "Repeat Count",
                "desc": "Repeat Count"
            },
            {
                "key": "repeatfield",
                "type": null,
                "name": "Repeat Field",
                "desc": "Repeat Field"
            },
            {
                "key": "specifyuser",
                "type": null,
                "name": "Specify User",
                "desc": "Specify User"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "workbenchtemplate",
                "type": null,
                "name": "Workbench Template",
                "desc": "Workbench Template"
            }
        ]
    },
    {
        "table": "spsymbiotainstance",
        "name": "Sp Symbiota Instance",
        "desc": "Sp Symbiota Instance",
        "items": [
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "description",
                "type": null,
                "name": "Description",
                "desc": "Description"
            },
            {
                "key": "instancename",
                "type": null,
                "name": "Instance Name",
                "desc": "Instance Name"
            },
            {
                "key": "lastcachebuild",
                "type": null,
                "name": "Last Cache Build",
                "desc": "Last Cache Build"
            },
            {
                "key": "lastpull",
                "type": null,
                "name": "Last Pull",
                "desc": "Last Pull"
            },
            {
                "key": "lastpush",
                "type": null,
                "name": "Last Push",
                "desc": "Last Push"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "schemamapping",
                "type": null,
                "name": "Schema Mapping",
                "desc": "Schema Mapping"
            },
            {
                "key": "symbiotakey",
                "type": null,
                "name": "Symbiota Key",
                "desc": "Symbiota Key"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "sptasksemaphore",
        "name": "Sp Task Semaphore",
        "desc": "System Table:",
        "items": [
            {
                "key": "collection",
                "type": null,
                "name": "Collection",
                "desc": "Collection"
            },
            {
                "key": "context",
                "type": null,
                "name": "Context",
                "desc": "Context"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "islocked",
                "type": null,
                "name": "Is Locked",
                "desc": "Is Locked"
            },
            {
                "key": "lockedtime",
                "type": null,
                "name": "Locked Time",
                "desc": "Locked Time"
            },
            {
                "key": "machinename",
                "type": null,
                "name": "Machine Name",
                "desc": "Machine Name"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "owner",
                "type": null,
                "name": "Owner",
                "desc": "Owner"
            },
            {
                "key": "scope",
                "type": null,
                "name": "Scope",
                "desc": "Scope"
            },
            {
                "key": "taskname",
                "type": null,
                "name": "Task Name",
                "desc": "Task Name"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "usagecount",
                "type": null,
                "name": "Usage Count",
                "desc": "Usage Count"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "spuserexternalid",
        "name": "Spuserexternalid",
        "desc": "Stores provider identifiers and tokens for users who sign in using Single Sign On (SSO).",
        "items": [
            {
                "key": "enabled",
                "type": "java.lang.Boolean",
                "name": "enabled",
                "desc": "Enabled"
            },
            {
                "key": "idtoken",
                "type": "java.lang.String",
                "name": "idtoken",
                "desc": "Idtoken"
            },
            {
                "key": "provider",
                "type": "java.lang.String",
                "name": "provider",
                "desc": "Provider"
            },
            {
                "key": "providerid",
                "type": "java.lang.String",
                "name": "providerid",
                "desc": "Providerid"
            },
            {
                "key": "specifyuser",
                "type": "ManyToOne",
                "name": "specifyuser",
                "desc": "Specifyuser"
            },
            {
                "key": "spuserexternalidid",
                "type": "java.lang.Integer",
                "name": "spUserExternalIdId",
                "desc": "Sp user external id id"
            }
        ]
    },
    {
        "table": "spversion",
        "name": "Sp Version",
        "desc": "Sp Version",
        "items": [
            {
                "key": "appname",
                "type": null,
                "name": "App Name",
                "desc": "App Name"
            },
            {
                "key": "appversion",
                "type": null,
                "name": "App Version",
                "desc": "App Version"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "dbclosedby",
                "type": null,
                "name": "Db Closed By",
                "desc": "Db Closed By"
            },
            {
                "key": "isdbclosed",
                "type": null,
                "name": "Is D B Closed",
                "desc": "Is D B Closed"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "schemaversion",
                "type": null,
                "name": "Schema Version",
                "desc": "Schema Version"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "workbenchschemaversion",
                "type": null,
                "name": "Workbench Schema Version",
                "desc": "Workbench Schema Version"
            }
        ]
    },
    {
        "table": "spviewsetobj",
        "name": "View Set Object",
        "desc": "System Table: This represents a View Set used in the form system.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "description",
                "type": "java.lang.String",
                "name": "Description",
                "desc": "Description"
            },
            {
                "key": "filename",
                "type": null,
                "name": "File Name",
                "desc": "File Name"
            },
            {
                "key": "level",
                "type": "java.lang.Short",
                "name": "Level",
                "desc": "Level"
            },
            {
                "key": "metadata",
                "type": "java.lang.String",
                "name": "Meta Data",
                "desc": "Meta Data"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "spappresourcedatas",
                "type": "OneToMany",
                "name": "App Resource Datas",
                "desc": "App Resource Datas"
            },
            {
                "key": "spappresourcedir",
                "type": null,
                "name": "Sp App Resource Dir",
                "desc": "Sp App Resource Dir"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "spvisualquery",
        "name": "Sp Visual Query",
        "desc": "Sp Visual Query",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "description",
                "type": null,
                "name": "Description",
                "desc": "Description"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": null,
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "polygons",
                "type": null,
                "name": "Polygons",
                "desc": "Polygons"
            },
            {
                "key": "specifyuser",
                "type": null,
                "name": "Specify User",
                "desc": "Specify User"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "storage",
        "name": "Storage",
        "desc": "A tree data structure for describing where Collection Objects are physically stored.",
        "items": [
            {
                "key": "abbrev",
                "type": "java.lang.String",
                "name": "Abbreviation",
                "desc": "Abbreviation"
            },
            {
                "key": "acceptedchildren",
                "type": null,
                "name": "Children",
                "desc": "Children"
            },
            {
                "key": "acceptedstorage",
                "type": null,
                "name": "Preferred Storage",
                "desc": "Preferred Storage"
            },
            {
                "key": "children",
                "type": null,
                "name": "Children",
                "desc": "Children"
            },
            {
                "key": "containers",
                "type": "OneToMany",
                "name": "Containers",
                "desc": "Containers"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "definition",
                "type": "ManyToOne",
                "name": "Definition",
                "desc": "Definition"
            },
            {
                "key": "definitionitem",
                "type": "ManyToOne",
                "name": "Level",
                "desc": "Level"
            },
            {
                "key": "fullname",
                "type": "java.lang.String",
                "name": "Full Name",
                "desc": "Full Name"
            },
            {
                "key": "highestchildnodenumber",
                "type": "java.lang.Integer",
                "name": "Highest Child Node Number",
                "desc": "Highest Child Node Number"
            },
            {
                "key": "isaccepted",
                "type": "java.lang.Boolean",
                "name": "Is Preferred",
                "desc": "Is Preferred"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "nodenumber",
                "type": "java.lang.Integer",
                "name": "Node Number",
                "desc": "Node Number"
            },
            {
                "key": "number1",
                "type": "java.lang.Integer",
                "name": "Number1",
                "desc": "User definable"
            },
            {
                "key": "number2",
                "type": "java.lang.Integer",
                "name": "Number2",
                "desc": "User definable"
            },
            {
                "key": "parent",
                "type": null,
                "name": "Parent",
                "desc": "Parent"
            },
            {
                "key": "preparations",
                "type": "OneToMany",
                "name": "Preparations",
                "desc": "Preparations"
            },
            {
                "key": "rankid",
                "type": "java.lang.Integer",
                "name": "Rank Id",
                "desc": "Rank Id"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "storageattachments",
                "type": null,
                "name": "Storage Attachments",
                "desc": "Storage Attachments"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable"
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "User definable"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "timestampversion",
                "type": "java.util.Date",
                "name": "Timestamp Version",
                "desc": "Timestamp Version"
            },
            {
                "key": "uniqueidentifier",
                "type": "java.lang.String",
                "name": "Unique Identifier",
                "desc": "Unique Identifier"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "storageattachment",
        "name": "Storage Attachment",
        "desc": "Storage Attachment",
        "items": [
            {
                "key": "attachment",
                "type": null,
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "storage",
                "type": null,
                "name": "Storage",
                "desc": "Storage"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "storagetreedef",
        "name": "Storage Tree Definition",
        "desc": "Defines the levels of the tree.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "fullnamedirection",
                "type": "java.lang.Integer",
                "name": "Full Name Direction",
                "desc": "Full Name Direction"
            },
            {
                "key": "institution",
                "type": "ManyToOne",
                "name": "Institution",
                "desc": "Institution"
            },
            {
                "key": "institutions",
                "type": null,
                "name": "Institutions",
                "desc": "Institutions"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "treedefitems",
                "type": "OneToMany",
                "name": "Tree Def Items",
                "desc": "Tree Def Items"
            },
            {
                "key": "treeentries",
                "type": "OneToMany",
                "name": "Tree Entries",
                "desc": "Tree Entries"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "storagetreedefitem",
        "name": "Storage Tree Definition Item",
        "desc": "Describes a level in the definition of the tree.",
        "items": [
            {
                "key": "children",
                "type": null,
                "name": "Children",
                "desc": "Children"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "fullnameseparator",
                "type": "java.lang.String",
                "name": "Full Name Separator",
                "desc": "Full Name Separator"
            },
            {
                "key": "isenforced",
                "type": "java.lang.Boolean",
                "name": "Is Enforced",
                "desc": "Is Enforced"
            },
            {
                "key": "isinfullname",
                "type": "java.lang.Boolean",
                "name": "Is In Full Name",
                "desc": "Is In Full Name"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "parent",
                "type": null,
                "name": "Parent",
                "desc": "Parent"
            },
            {
                "key": "rankid",
                "type": "java.lang.Integer",
                "name": "Rank Id",
                "desc": "Rank Id"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "textafter",
                "type": "java.lang.String",
                "name": "Text After",
                "desc": "User definable"
            },
            {
                "key": "textbefore",
                "type": "java.lang.String",
                "name": "Text Before",
                "desc": "User definable"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "title",
                "type": null,
                "name": "Title",
                "desc": "Title"
            },
            {
                "key": "treedef",
                "type": "ManyToOne",
                "name": "Tree Def",
                "desc": "Tree Def"
            },
            {
                "key": "treeentries",
                "type": "OneToMany",
                "name": "Tree Entries",
                "desc": "Tree Entries"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "taxon",
        "name": "Taxon",
        "desc": "Describes the taxonomy of a Determination.",
        "items": [
            {
                "key": "acceptedchildren",
                "type": null,
                "name": "Synonyms",
                "desc": "Synonyms"
            },
            {
                "key": "acceptedtaxon",
                "type": null,
                "name": "Preferred Taxon",
                "desc": "Preferred Taxon"
            },
            {
                "key": "author",
                "type": "java.lang.String",
                "name": "Author",
                "desc": "Author"
            },
            {
                "key": "children",
                "type": null,
                "name": "Child Taxa",
                "desc": "Child Taxa"
            },
            {
                "key": "citesstatus",
                "type": null,
                "name": "CITES Status",
                "desc": "CITES Status"
            },
            {
                "key": "collectingeventattributes",
                "type": null,
                "name": "Collecting Event Attributes",
                "desc": "Collecting Event Attributes"
            },
            {
                "key": "colstatus",
                "type": null,
                "name": "Col Status",
                "desc": "Col Status"
            },
            {
                "key": "commonname",
                "type": "java.lang.String",
                "name": "Common Name",
                "desc": "Common Name"
            },
            {
                "key": "commonnames",
                "type": "OneToMany",
                "name": "Common Names",
                "desc": "Common Names"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "cultivarname",
                "type": null,
                "name": "Cultivar",
                "desc": "Cultivar Name"
            },
            {
                "key": "definition",
                "type": "ManyToOne",
                "name": "Definition",
                "desc": "Definition"
            },
            {
                "key": "definitionitem",
                "type": "ManyToOne",
                "name": "Taxonomic Rank",
                "desc": "Taxonomic Rank"
            },
            {
                "key": "determinations",
                "type": null,
                "name": "Determinations",
                "desc": "Determinations"
            },
            {
                "key": "environmentalprotectionstatus",
                "type": "java.lang.String",
                "name": "Environmental Protection Status",
                "desc": "Environmental Protection Status"
            },
            {
                "key": "esastatus",
                "type": null,
                "name": "ESA Status",
                "desc": "ESA Status"
            },
            {
                "key": "fullname",
                "type": "java.lang.String",
                "name": "Full Name",
                "desc": "Full Name"
            },
            {
                "key": "groupnumber",
                "type": "java.lang.String",
                "name": "Group Number",
                "desc": "Taxonomic group number"
            },
            {
                "key": "guid",
                "type": "java.lang.String",
                "name": "GUID",
                "desc": "GUID"
            },
            {
                "key": "highestchildnodenumber",
                "type": "java.lang.Integer",
                "name": "Highest Child Node Number",
                "desc": "Highest Child Node Number"
            },
            {
                "key": "hybridchildren1",
                "type": null,
                "name": "Hybrid Children1",
                "desc": "Hybrid Children1"
            },
            {
                "key": "hybridchildren2",
                "type": null,
                "name": "Hybrid Children2",
                "desc": "Hybrid Children2"
            },
            {
                "key": "hybridparent1",
                "type": null,
                "name": "Hybrid Parent1",
                "desc": "Hybrid Parent1"
            },
            {
                "key": "hybridparent2",
                "type": null,
                "name": "Hybrid Parent2",
                "desc": "Hybrid Parent2"
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "integer3",
                "type": null,
                "name": "Integer3",
                "desc": "Integer3"
            },
            {
                "key": "integer4",
                "type": null,
                "name": "Integer4",
                "desc": "Integer4"
            },
            {
                "key": "integer5",
                "type": null,
                "name": "Integer5",
                "desc": "Integer5"
            },
            {
                "key": "isaccepted",
                "type": "java.lang.Boolean",
                "name": "Is Preferred",
                "desc": "Is Preferred"
            },
            {
                "key": "ishybrid",
                "type": "java.lang.Boolean",
                "name": "Is Hybrid",
                "desc": "Is Hybrid"
            },
            {
                "key": "isisnumber",
                "type": null,
                "name": "ISIS Number",
                "desc": "ISIS Number"
            },
            {
                "key": "labelformat",
                "type": null,
                "name": "Label Format",
                "desc": "Label Format"
            },
            {
                "key": "lsid",
                "type": null,
                "name": "LSID",
                "desc": "LSID"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "ncbitaxonnumber",
                "type": null,
                "name": "NCBI Taxon Number",
                "desc": "NCBI Taxon Number"
            },
            {
                "key": "nodenumber",
                "type": "java.lang.Integer",
                "name": "Node Number",
                "desc": "Node Number"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number 1",
                "desc": "Number 1"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number 2",
                "desc": "Number 2"
            },
            {
                "key": "number3",
                "type": null,
                "name": "Number3",
                "desc": "Number3"
            },
            {
                "key": "number4",
                "type": null,
                "name": "Number4",
                "desc": "Number4"
            },
            {
                "key": "number5",
                "type": null,
                "name": "Number5",
                "desc": "Number5"
            },
            {
                "key": "parent",
                "type": null,
                "name": "Parent of Taxon",
                "desc": "Parent of Taxon"
            },
            {
                "key": "rankid",
                "type": "java.lang.Integer",
                "name": "Rank ID",
                "desc": "Rank ID"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks and additional nomenclatural comments"
            },
            {
                "key": "source",
                "type": "java.lang.String",
                "name": "Source",
                "desc": "If the record has been imported then this field holds information about the authority file it was obtained from, else it is user-editable."
            },
            {
                "key": "taxonattachments",
                "type": "OneToMany",
                "name": "Taxon Attachments",
                "desc": "Taxon Attachments"
            },
            {
                "key": "taxonattribute",
                "type": null,
                "name": "Taxon Attribute",
                "desc": "Taxon Attribute"
            },
            {
                "key": "taxoncitations",
                "type": "OneToMany",
                "name": "Taxon Citations",
                "desc": "Taxon Citations"
            },
            {
                "key": "taxonomicserialnumber",
                "type": "java.lang.String",
                "name": "Taxonomic Serial Number",
                "desc": "If the record has been imported from an Authority File then this field stores a unique ID assigned by the provider, else it is null"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Infraspecific Rank",
                "desc": "Text 1 (Vascular)"
            },
            {
                "key": "text10",
                "type": null,
                "name": "Infraspecific Rank (A)",
                "desc": "Infraspecific rank, i.e. subspecies, variety, forma. Not preceded by subsp., var., f.\n"
            },
            {
                "key": "text11",
                "type": null,
                "name": "Text11",
                "desc": "Text11"
            },
            {
                "key": "text12",
                "type": null,
                "name": "Text12",
                "desc": "Text12"
            },
            {
                "key": "text13",
                "type": null,
                "name": "Text13",
                "desc": "Text13"
            },
            {
                "key": "text14",
                "type": null,
                "name": "Text14",
                "desc": "Text14"
            },
            {
                "key": "text15",
                "type": null,
                "name": "Text15",
                "desc": "Text15"
            },
            {
                "key": "text16",
                "type": null,
                "name": "Text16",
                "desc": "Text16"
            },
            {
                "key": "text17",
                "type": null,
                "name": "Text17",
                "desc": "Text17"
            },
            {
                "key": "text18",
                "type": null,
                "name": "Text18",
                "desc": "Text18"
            },
            {
                "key": "text19",
                "type": null,
                "name": "Text19",
                "desc": "Text19"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text 2",
                "desc": "Text 2"
            },
            {
                "key": "text20",
                "type": null,
                "name": "Text20",
                "desc": "Text20"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Text3",
                "desc": "Text3"
            },
            {
                "key": "text4",
                "type": null,
                "name": "Text4",
                "desc": "Text4"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Text5",
                "desc": "Text5"
            },
            {
                "key": "text6",
                "type": null,
                "name": "Text6",
                "desc": "Text6"
            },
            {
                "key": "text7",
                "type": null,
                "name": "Text7",
                "desc": "Text7"
            },
            {
                "key": "text8",
                "type": null,
                "name": "Text8",
                "desc": "Text8"
            },
            {
                "key": "text9",
                "type": null,
                "name": "Text9",
                "desc": "Text9"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "unitind1",
                "type": "java.lang.String",
                "name": "Unit Ind1",
                "desc": "Unit Ind1"
            },
            {
                "key": "unitind2",
                "type": "java.lang.String",
                "name": "Unit Ind2",
                "desc": "Unit Ind2"
            },
            {
                "key": "unitind3",
                "type": "java.lang.String",
                "name": "Unit Ind3",
                "desc": "Unit Ind3"
            },
            {
                "key": "unitind4",
                "type": "java.lang.String",
                "name": "Unit Ind4",
                "desc": "Unit Ind4"
            },
            {
                "key": "unitname1",
                "type": "java.lang.String",
                "name": "Unit Name1",
                "desc": "Unit Name1"
            },
            {
                "key": "unitname2",
                "type": "java.lang.String",
                "name": "Unit Name2",
                "desc": "Unit Name2"
            },
            {
                "key": "unitname3",
                "type": "java.lang.String",
                "name": "Unit Name3",
                "desc": "Unit Name3"
            },
            {
                "key": "unitname4",
                "type": "java.lang.String",
                "name": "Unit Name4",
                "desc": "Unit Name4"
            },
            {
                "key": "usfwscode",
                "type": null,
                "name": "USFWS Code",
                "desc": "USFWS Code"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "visibility",
                "type": "java.lang.Integer",
                "name": "Visibility",
                "desc": "Visibility"
            },
            {
                "key": "visibilitysetby",
                "type": "java.lang.String",
                "name": "Visibility Set By",
                "desc": "Visibility Set By"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno10",
                "type": null,
                "name": "Yes No10",
                "desc": "Yes No10"
            },
            {
                "key": "yesno11",
                "type": null,
                "name": "Yes No11",
                "desc": "Yes No11"
            },
            {
                "key": "yesno12",
                "type": null,
                "name": "Yes No12",
                "desc": "Yes No12"
            },
            {
                "key": "yesno13",
                "type": null,
                "name": "Yes No13",
                "desc": "Yes No13"
            },
            {
                "key": "yesno14",
                "type": null,
                "name": "Yes No14",
                "desc": "Yes No14"
            },
            {
                "key": "yesno15",
                "type": null,
                "name": "Yes No15",
                "desc": "Yes No15"
            },
            {
                "key": "yesno16",
                "type": null,
                "name": "Yes No16",
                "desc": "Yes No16"
            },
            {
                "key": "yesno17",
                "type": null,
                "name": "Yes No17",
                "desc": "Yes No17"
            },
            {
                "key": "yesno18",
                "type": null,
                "name": "Yes No18",
                "desc": "Yes No18"
            },
            {
                "key": "yesno19",
                "type": null,
                "name": "Yes No19",
                "desc": "Yes No19"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            },
            {
                "key": "yesno3",
                "type": null,
                "name": "Yes No3",
                "desc": "Yes No3"
            },
            {
                "key": "yesno4",
                "type": null,
                "name": "Yes No4",
                "desc": "Yes No4"
            },
            {
                "key": "yesno5",
                "type": null,
                "name": "Yes No5",
                "desc": "Yes No5"
            },
            {
                "key": "yesno6",
                "type": null,
                "name": "Yes No6",
                "desc": "Yes No6"
            },
            {
                "key": "yesno7",
                "type": null,
                "name": "Yes No7",
                "desc": "Yes No7"
            },
            {
                "key": "yesno8",
                "type": null,
                "name": "Yes No8",
                "desc": "Yes No8"
            },
            {
                "key": "yesno9",
                "type": null,
                "name": "Yes No9",
                "desc": "Yes No9"
            }
        ]
    },
    {
        "table": "taxonattachment",
        "name": "Taxon Attachment",
        "desc": "This refers to an attachment and provides order.",
        "items": [
            {
                "key": "attachment",
                "type": "ManyToOne",
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": "java.lang.Integer",
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "taxon",
                "type": "ManyToOne",
                "name": "Taxon",
                "desc": "Taxon"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "taxonattribute",
        "name": "Taxon Attribute",
        "desc": "Taxon Attribute",
        "items": [
            {
                "key": "agent1",
                "type": null,
                "name": "Agent1",
                "desc": "Agent1"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "date1",
                "type": null,
                "name": "Date1",
                "desc": "Date1"
            },
            {
                "key": "date1precision",
                "type": null,
                "name": "Date1 Precision",
                "desc": "Date1 Precision"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number10",
                "type": null,
                "name": "Number10",
                "desc": "Number10"
            },
            {
                "key": "number11",
                "type": null,
                "name": "Number11",
                "desc": "Number11"
            },
            {
                "key": "number12",
                "type": null,
                "name": "Number12",
                "desc": "Number12"
            },
            {
                "key": "number13",
                "type": null,
                "name": "Number13",
                "desc": "Number13"
            },
            {
                "key": "number14",
                "type": null,
                "name": "Number14",
                "desc": "Number14"
            },
            {
                "key": "number15",
                "type": null,
                "name": "Number15",
                "desc": "Number15"
            },
            {
                "key": "number16",
                "type": null,
                "name": "Number16",
                "desc": "Number16"
            },
            {
                "key": "number17",
                "type": null,
                "name": "Number17",
                "desc": "Number17"
            },
            {
                "key": "number18",
                "type": null,
                "name": "Number18",
                "desc": "Number18"
            },
            {
                "key": "number19",
                "type": null,
                "name": "Number19",
                "desc": "Number19"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "number20",
                "type": null,
                "name": "Number20",
                "desc": "Number20"
            },
            {
                "key": "number3",
                "type": null,
                "name": "Number3",
                "desc": "Number3"
            },
            {
                "key": "number4",
                "type": null,
                "name": "Number4",
                "desc": "Number4"
            },
            {
                "key": "number5",
                "type": null,
                "name": "Number5",
                "desc": "Number5"
            },
            {
                "key": "number6",
                "type": null,
                "name": "Number6",
                "desc": "Number6"
            },
            {
                "key": "number7",
                "type": null,
                "name": "Number7",
                "desc": "Number7"
            },
            {
                "key": "number8",
                "type": null,
                "name": "Number8",
                "desc": "Number8"
            },
            {
                "key": "number9",
                "type": null,
                "name": "Number9",
                "desc": "Number9"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "taxons",
                "type": null,
                "name": "Taxons",
                "desc": "Taxons"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text10",
                "type": null,
                "name": "Text10",
                "desc": "Text10"
            },
            {
                "key": "text11",
                "type": null,
                "name": "Text11",
                "desc": "Text11"
            },
            {
                "key": "text12",
                "type": null,
                "name": "Text12",
                "desc": "Text12"
            },
            {
                "key": "text13",
                "type": null,
                "name": "Text13",
                "desc": "Text13"
            },
            {
                "key": "text14",
                "type": null,
                "name": "Text14",
                "desc": "Text14"
            },
            {
                "key": "text15",
                "type": null,
                "name": "Text15",
                "desc": "Text15"
            },
            {
                "key": "text16",
                "type": null,
                "name": "Text16",
                "desc": "Text16"
            },
            {
                "key": "text17",
                "type": null,
                "name": "Text17",
                "desc": "Text17"
            },
            {
                "key": "text18",
                "type": null,
                "name": "Text18",
                "desc": "Text18"
            },
            {
                "key": "text19",
                "type": null,
                "name": "Text19",
                "desc": "Text19"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "text20",
                "type": null,
                "name": "Text20",
                "desc": "Text20"
            },
            {
                "key": "text21",
                "type": null,
                "name": "Text21",
                "desc": "Text21"
            },
            {
                "key": "text22",
                "type": null,
                "name": "Text22",
                "desc": "Text22"
            },
            {
                "key": "text23",
                "type": null,
                "name": "Text23",
                "desc": "Text23"
            },
            {
                "key": "text24",
                "type": null,
                "name": "Text24",
                "desc": "Text24"
            },
            {
                "key": "text25",
                "type": null,
                "name": "Text25",
                "desc": "Text25"
            },
            {
                "key": "text26",
                "type": null,
                "name": "Text26",
                "desc": "Text26"
            },
            {
                "key": "text27",
                "type": null,
                "name": "Text27",
                "desc": "Text27"
            },
            {
                "key": "text28",
                "type": null,
                "name": "Text28",
                "desc": "Text28"
            },
            {
                "key": "text29",
                "type": null,
                "name": "Text29",
                "desc": "Text29"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Text3",
                "desc": "Text3"
            },
            {
                "key": "text30",
                "type": null,
                "name": "Text30",
                "desc": "Text30"
            },
            {
                "key": "text31",
                "type": null,
                "name": "Text31",
                "desc": "Text31"
            },
            {
                "key": "text32",
                "type": null,
                "name": "Text32",
                "desc": "Text32"
            },
            {
                "key": "text33",
                "type": null,
                "name": "Text33",
                "desc": "Text33"
            },
            {
                "key": "text34",
                "type": null,
                "name": "Text34",
                "desc": "Text34"
            },
            {
                "key": "text35",
                "type": null,
                "name": "Text35",
                "desc": "Text35"
            },
            {
                "key": "text36",
                "type": null,
                "name": "Text36",
                "desc": "Text36"
            },
            {
                "key": "text37",
                "type": null,
                "name": "Text37",
                "desc": "Text37"
            },
            {
                "key": "text38",
                "type": null,
                "name": "Text38",
                "desc": "Text38"
            },
            {
                "key": "text39",
                "type": null,
                "name": "Text39",
                "desc": "Text39"
            },
            {
                "key": "text4",
                "type": null,
                "name": "Text4",
                "desc": "Text4"
            },
            {
                "key": "text40",
                "type": null,
                "name": "Text40",
                "desc": "Text40"
            },
            {
                "key": "text41",
                "type": null,
                "name": "Text41",
                "desc": "Text41"
            },
            {
                "key": "text42",
                "type": null,
                "name": "Text42",
                "desc": "Text42"
            },
            {
                "key": "text43",
                "type": null,
                "name": "Text43",
                "desc": "Text43"
            },
            {
                "key": "text44",
                "type": null,
                "name": "Text44",
                "desc": "Text44"
            },
            {
                "key": "text45",
                "type": null,
                "name": "Text45",
                "desc": "Text45"
            },
            {
                "key": "text46",
                "type": null,
                "name": "Text46",
                "desc": "Text46"
            },
            {
                "key": "text47",
                "type": null,
                "name": "Text47",
                "desc": "Text47"
            },
            {
                "key": "text48",
                "type": null,
                "name": "Text48",
                "desc": "Text48"
            },
            {
                "key": "text49",
                "type": null,
                "name": "Text49",
                "desc": "Text49"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Text5",
                "desc": "Text5"
            },
            {
                "key": "text50",
                "type": null,
                "name": "Text50",
                "desc": "Text50"
            },
            {
                "key": "text51",
                "type": null,
                "name": "Text51",
                "desc": "Text51"
            },
            {
                "key": "text52",
                "type": null,
                "name": "Text52",
                "desc": "Text52"
            },
            {
                "key": "text53",
                "type": null,
                "name": "Text53",
                "desc": "Text53"
            },
            {
                "key": "text54",
                "type": null,
                "name": "Text54",
                "desc": "Text54"
            },
            {
                "key": "text55",
                "type": null,
                "name": "Text55",
                "desc": "Text55"
            },
            {
                "key": "text56",
                "type": null,
                "name": "Text56",
                "desc": "Text56"
            },
            {
                "key": "text57",
                "type": null,
                "name": "Text57",
                "desc": "Text57"
            },
            {
                "key": "text58",
                "type": null,
                "name": "Text58",
                "desc": "Text58"
            },
            {
                "key": "text6",
                "type": null,
                "name": "Text6",
                "desc": "Text6"
            },
            {
                "key": "text7",
                "type": null,
                "name": "Text7",
                "desc": "Text7"
            },
            {
                "key": "text8",
                "type": null,
                "name": "Text8",
                "desc": "Text8"
            },
            {
                "key": "text9",
                "type": null,
                "name": "Text9",
                "desc": "Text9"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno10",
                "type": null,
                "name": "Yes No10",
                "desc": "Yes No10"
            },
            {
                "key": "yesno11",
                "type": null,
                "name": "Yes No11",
                "desc": "Yes No11"
            },
            {
                "key": "yesno12",
                "type": null,
                "name": "Yes No12",
                "desc": "Yes No12"
            },
            {
                "key": "yesno13",
                "type": null,
                "name": "Yes No13",
                "desc": "Yes No13"
            },
            {
                "key": "yesno14",
                "type": null,
                "name": "Yes No14",
                "desc": "Yes No14"
            },
            {
                "key": "yesno15",
                "type": null,
                "name": "Yes No15",
                "desc": "Yes No15"
            },
            {
                "key": "yesno16",
                "type": null,
                "name": "Yes No16",
                "desc": "Yes No16"
            },
            {
                "key": "yesno17",
                "type": null,
                "name": "Yes No17",
                "desc": "Yes No17"
            },
            {
                "key": "yesno18",
                "type": null,
                "name": "Yes No18",
                "desc": "Yes No18"
            },
            {
                "key": "yesno19",
                "type": null,
                "name": "Yes No19",
                "desc": "Yes No19"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            },
            {
                "key": "yesno20",
                "type": null,
                "name": "Yes No20",
                "desc": "Yes No20"
            },
            {
                "key": "yesno21",
                "type": null,
                "name": "Yes No21",
                "desc": "Yes No21"
            },
            {
                "key": "yesno22",
                "type": null,
                "name": "Yes No22",
                "desc": "Yes No22"
            },
            {
                "key": "yesno23",
                "type": null,
                "name": "Yes No23",
                "desc": "Yes No23"
            },
            {
                "key": "yesno24",
                "type": null,
                "name": "Yes No24",
                "desc": "Yes No24"
            },
            {
                "key": "yesno25",
                "type": null,
                "name": "Yes No25",
                "desc": "Yes No25"
            },
            {
                "key": "yesno26",
                "type": null,
                "name": "Yes No26",
                "desc": "Yes No26"
            },
            {
                "key": "yesno27",
                "type": null,
                "name": "Yes No27",
                "desc": "Yes No27"
            },
            {
                "key": "yesno28",
                "type": null,
                "name": "Yes No28",
                "desc": "Yes No28"
            },
            {
                "key": "yesno29",
                "type": null,
                "name": "Yes No29",
                "desc": "Yes No29"
            },
            {
                "key": "yesno3",
                "type": null,
                "name": "Yes No3",
                "desc": "Yes No3"
            },
            {
                "key": "yesno30",
                "type": null,
                "name": "Yes No30",
                "desc": "Yes No30"
            },
            {
                "key": "yesno31",
                "type": null,
                "name": "Yes No31",
                "desc": "Yes No31"
            },
            {
                "key": "yesno32",
                "type": null,
                "name": "Yes No32",
                "desc": "Yes No32"
            },
            {
                "key": "yesno33",
                "type": null,
                "name": "Yes No33",
                "desc": "Yes No33"
            },
            {
                "key": "yesno34",
                "type": null,
                "name": "Yes No34",
                "desc": "Yes No34"
            },
            {
                "key": "yesno35",
                "type": null,
                "name": "Yes No35",
                "desc": "Yes No35"
            },
            {
                "key": "yesno36",
                "type": null,
                "name": "Yes No36",
                "desc": "Yes No36"
            },
            {
                "key": "yesno37",
                "type": null,
                "name": "Yes No37",
                "desc": "Yes No37"
            },
            {
                "key": "yesno38",
                "type": null,
                "name": "Yes No38",
                "desc": "Yes No38"
            },
            {
                "key": "yesno39",
                "type": null,
                "name": "Yes No39",
                "desc": "Yes No39"
            },
            {
                "key": "yesno4",
                "type": null,
                "name": "Yes No4",
                "desc": "Yes No4"
            },
            {
                "key": "yesno40",
                "type": null,
                "name": "Yes No40",
                "desc": "Yes No40"
            },
            {
                "key": "yesno41",
                "type": null,
                "name": "Yes No41",
                "desc": "Yes No41"
            },
            {
                "key": "yesno42",
                "type": null,
                "name": "Yes No42",
                "desc": "Yes No42"
            },
            {
                "key": "yesno43",
                "type": null,
                "name": "Yes No43",
                "desc": "Yes No43"
            },
            {
                "key": "yesno44",
                "type": null,
                "name": "Yes No44",
                "desc": "Yes No44"
            },
            {
                "key": "yesno45",
                "type": null,
                "name": "Yes No45",
                "desc": "Yes No45"
            },
            {
                "key": "yesno46",
                "type": null,
                "name": "Yes No46",
                "desc": "Yes No46"
            },
            {
                "key": "yesno47",
                "type": null,
                "name": "Yes No47",
                "desc": "Yes No47"
            },
            {
                "key": "yesno48",
                "type": null,
                "name": "Yes No48",
                "desc": "Yes No48"
            },
            {
                "key": "yesno49",
                "type": null,
                "name": "Yes No49",
                "desc": "Yes No49"
            },
            {
                "key": "yesno5",
                "type": null,
                "name": "Yes No5",
                "desc": "Yes No5"
            },
            {
                "key": "yesno50",
                "type": null,
                "name": "Yes No50",
                "desc": "Yes No50"
            },
            {
                "key": "yesno51",
                "type": null,
                "name": "Yes No51",
                "desc": "Yes No51"
            },
            {
                "key": "yesno52",
                "type": null,
                "name": "Yes No52",
                "desc": "Yes No52"
            },
            {
                "key": "yesno53",
                "type": null,
                "name": "Yes No53",
                "desc": "Yes No53"
            },
            {
                "key": "yesno54",
                "type": null,
                "name": "Yes No54",
                "desc": "Yes No54"
            },
            {
                "key": "yesno55",
                "type": null,
                "name": "Yes No55",
                "desc": "Yes No55"
            },
            {
                "key": "yesno56",
                "type": null,
                "name": "Yes No56",
                "desc": "Yes No56"
            },
            {
                "key": "yesno57",
                "type": null,
                "name": "Yes No57",
                "desc": "Yes No57"
            },
            {
                "key": "yesno58",
                "type": null,
                "name": "Yes No58",
                "desc": "Yes No58"
            },
            {
                "key": "yesno59",
                "type": null,
                "name": "Yes No59",
                "desc": "Yes No59"
            },
            {
                "key": "yesno6",
                "type": null,
                "name": "Yes No6",
                "desc": "Yes No6"
            },
            {
                "key": "yesno60",
                "type": null,
                "name": "Yes No60",
                "desc": "Yes No60"
            },
            {
                "key": "yesno61",
                "type": null,
                "name": "Yes No61",
                "desc": "Yes No61"
            },
            {
                "key": "yesno62",
                "type": null,
                "name": "Yes No62",
                "desc": "Yes No62"
            },
            {
                "key": "yesno63",
                "type": null,
                "name": "Yes No63",
                "desc": "Yes No63"
            },
            {
                "key": "yesno64",
                "type": null,
                "name": "Yes No64",
                "desc": "Yes No64"
            },
            {
                "key": "yesno65",
                "type": null,
                "name": "Yes No65",
                "desc": "Yes No65"
            },
            {
                "key": "yesno66",
                "type": null,
                "name": "Yes No66",
                "desc": "Yes No66"
            },
            {
                "key": "yesno67",
                "type": null,
                "name": "Yes No67",
                "desc": "Yes No67"
            },
            {
                "key": "yesno68",
                "type": null,
                "name": "Yes No68",
                "desc": "Yes No68"
            },
            {
                "key": "yesno69",
                "type": null,
                "name": "Yes No69",
                "desc": "Yes No69"
            },
            {
                "key": "yesno7",
                "type": null,
                "name": "Yes No7",
                "desc": "Yes No7"
            },
            {
                "key": "yesno70",
                "type": null,
                "name": "Yes No70",
                "desc": "Yes No70"
            },
            {
                "key": "yesno71",
                "type": null,
                "name": "Yes No71",
                "desc": "Yes No71"
            },
            {
                "key": "yesno72",
                "type": null,
                "name": "Yes No72",
                "desc": "Yes No72"
            },
            {
                "key": "yesno73",
                "type": null,
                "name": "Yes No73",
                "desc": "Yes No73"
            },
            {
                "key": "yesno74",
                "type": null,
                "name": "Yes No74",
                "desc": "Yes No74"
            },
            {
                "key": "yesno75",
                "type": null,
                "name": "Yes No75",
                "desc": "Yes No75"
            },
            {
                "key": "yesno76",
                "type": null,
                "name": "Yes No76",
                "desc": "Yes No76"
            },
            {
                "key": "yesno77",
                "type": null,
                "name": "Yes No77",
                "desc": "Yes No77"
            },
            {
                "key": "yesno78",
                "type": null,
                "name": "Yes No78",
                "desc": "Yes No78"
            },
            {
                "key": "yesno79",
                "type": null,
                "name": "Yes No79",
                "desc": "Yes No79"
            },
            {
                "key": "yesno8",
                "type": null,
                "name": "Yes No8",
                "desc": "Yes No8"
            },
            {
                "key": "yesno80",
                "type": null,
                "name": "Yes No80",
                "desc": "Yes No80"
            },
            {
                "key": "yesno81",
                "type": null,
                "name": "Yes No81",
                "desc": "Yes No81"
            },
            {
                "key": "yesno82",
                "type": null,
                "name": "Yes No82",
                "desc": "Yes No82"
            },
            {
                "key": "yesno9",
                "type": null,
                "name": "Yes No9",
                "desc": "Yes No9"
            }
        ]
    },
    {
        "table": "taxoncitation",
        "name": "Taxon Citation",
        "desc": "Linkage from the Taxonomic record to a published document.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "figurenumber",
                "type": null,
                "name": "Figure Number",
                "desc": "Figure Number"
            },
            {
                "key": "isfigured",
                "type": null,
                "name": "Is Figured",
                "desc": "Is Figured"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": "java.lang.Float",
                "name": "Number1",
                "desc": "User definable"
            },
            {
                "key": "number2",
                "type": "java.lang.Float",
                "name": "Number2",
                "desc": "User definable"
            },
            {
                "key": "pagenumber",
                "type": null,
                "name": "Page Number",
                "desc": "Page Number"
            },
            {
                "key": "platenumber",
                "type": null,
                "name": "Plate Number",
                "desc": "Plate Number"
            },
            {
                "key": "referencework",
                "type": "ManyToOne",
                "name": "Reference Work",
                "desc": "Reference Work"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "taxon",
                "type": "ManyToOne",
                "name": "Taxon",
                "desc": "Taxon"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "User definable"
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "User definable"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "Yes No1",
                "desc": "User definable"
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "Yes No2",
                "desc": "User definable"
            }
        ]
    },
    {
        "table": "taxontreedef",
        "name": "Taxon Tree Definition",
        "desc": "Defines the levels of the tree.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "discipline",
                "type": null,
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "fullnamedirection",
                "type": "java.lang.Integer",
                "name": "Full Name Direction",
                "desc": "Full Name Direction"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "remarks",
                "type": "java.lang.String",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "treedefitems",
                "type": "OneToMany",
                "name": "Tree Def Items",
                "desc": "Tree Def Items"
            },
            {
                "key": "treeentries",
                "type": "OneToMany",
                "name": "Tree Entries",
                "desc": "Tree Entries"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "taxontreedefitem",
        "name": "Taxon Tree Definition Item",
        "desc": "Describes a level in the definition of the tree.",
        "items": [
            {
                "key": "children",
                "type": null,
                "name": "Children",
                "desc": "Children"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "formattoken",
                "type": "java.lang.String",
                "name": "Format Token",
                "desc": "Format Token"
            },
            {
                "key": "fullnameseparator",
                "type": "java.lang.String",
                "name": "Full Name Separator",
                "desc": "Full Name Separator"
            },
            {
                "key": "isenforced",
                "type": "java.lang.Boolean",
                "name": "Is Enforced",
                "desc": "Is Enforced"
            },
            {
                "key": "isinfullname",
                "type": "java.lang.Boolean",
                "name": "Is In Full Name",
                "desc": "Is In Full Name"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "parent",
                "type": null,
                "name": "Parent",
                "desc": "Parent"
            },
            {
                "key": "rankid",
                "type": "java.lang.Integer",
                "name": "Rank Id",
                "desc": "Rank Id"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "textafter",
                "type": "java.lang.String",
                "name": "Text After",
                "desc": "User definable"
            },
            {
                "key": "textbefore",
                "type": "java.lang.String",
                "name": "Text Before",
                "desc": "User definable"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "title",
                "type": null,
                "name": "Title",
                "desc": "Title"
            },
            {
                "key": "treedef",
                "type": "ManyToOne",
                "name": "Tree Def",
                "desc": "Tree Def"
            },
            {
                "key": "treeentries",
                "type": "OneToMany",
                "name": "Tree Entries",
                "desc": "Tree Entries"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "tectonicunit",
        "name": "Tectonic Unit",
        "desc": "Tectonic Unit",
        "items": [
            {
                "key": "acceptedchildren",
                "type": "OneToMany",
                "name": "Accepted Children",
                "desc": "Accepted Children"
            },
            {
                "key": "acceptedtectonicunit",
                "type": "ManyToOne",
                "name": "Accepted Tectonic Unit",
                "desc": "Accepted Tectonic Unit"
            },
            {
                "key": "createdbyagent",
                "type": "ManyToOne",
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "definition",
                "type": "ManyToOne",
                "name": "Definition",
                "desc": "Definition"
            },
            {
                "key": "definitionitem",
                "type": "ManyToOne",
                "name": "Definition Item",
                "desc": "Definition Item"
            },
            {
                "key": "fullname",
                "type": "java.lang.String",
                "name": "Full Name",
                "desc": "Full Name"
            },
            {
                "key": "guid",
                "type": "java.lang.String",
                "name": "GUID",
                "desc": "GUID"
            },
            {
                "key": "highestchildnodenumber",
                "type": "java.lang.Integer",
                "name": "Highest Child Node Number",
                "desc": "Highest Child Node Number"
            },
            {
                "key": "isaccepted",
                "type": "java.lang.Boolean",
                "name": "Is Accepted",
                "desc": "Is Accepted"
            },
            {
                "key": "modifiedbyagent",
                "type": "ManyToOne",
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "nodenumber",
                "type": "java.lang.Integer",
                "name": "Node Number",
                "desc": "Node Number"
            },
            {
                "key": "number1",
                "type": "java.math.BigDecimal",
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": "java.math.BigDecimal",
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "paleocontexts",
                "type": "OneToMany",
                "name": "Paleo Contexts",
                "desc": "Paleo Contexts"
            },
            {
                "key": "parent",
                "type": "ManyToOne",
                "name": "Parent",
                "desc": "Parent"
            },
            {
                "key": "rankid",
                "type": "java.lang.Integer",
                "name": "Rank Id",
                "desc": "Rank Id"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "tectonicunitid",
                "type": "java.lang.Integer",
                "name": "Tectonic Unit ID",
                "desc": "Tectonic Unit Id"
            },
            {
                "key": "text1",
                "type": "java.lang.String",
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": "java.lang.String",
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": "java.lang.Integer",
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": "java.lang.Boolean",
                "name": "YesNo1",
                "desc": "YesNo1"
            },
            {
                "key": "yesno2",
                "type": "java.lang.Boolean",
                "name": "YesNo2",
                "desc": "YesNo2"
            }
        ]
    },
    {
        "table": "tectonicunittreedef",
        "name": "Tectonic Unit Tree Def",
        "desc": "Tectonic Unit Tree Def",
        "items": [
            {
                "key": "createdbyagent",
                "type": "ManyToOne",
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "discipline",
                "type": "ManyToOne",
                "name": "Discipline",
                "desc": "Discipline"
            },
            {
                "key": "fullnamedirection",
                "type": "java.lang.Integer",
                "name": "Full Name Direction",
                "desc": "Full Name Direction"
            },
            {
                "key": "modifiedbyagent",
                "type": "ManyToOne",
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "tectonicunittreedefid",
                "type": "java.lang.Integer",
                "name": "Tectonic Unit Tree Def Id",
                "desc": "Tectonic Unit Tree Def Id"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "treedefitems",
                "type": "OneToMany",
                "name": "Tree Def Items",
                "desc": "Tree Def Items"
            },
            {
                "key": "treeentries",
                "type": "OneToMany",
                "name": "Tree Entries",
                "desc": "Tree Entries"
            },
            {
                "key": "version",
                "type": "java.lang.Integer",
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "tectonicunittreedefitem",
        "name": "Tectonic Unit Tree Def Item",
        "desc": "Tectonic Unit Tree Def Item",
        "items": [
            {
                "key": "children",
                "type": "OneToMany",
                "name": "Children",
                "desc": "Children"
            },
            {
                "key": "createdbyagent",
                "type": "ManyToOne",
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "fullnameseparator",
                "type": "java.lang.String",
                "name": "Full Name Separator",
                "desc": "Full Name Separator"
            },
            {
                "key": "isenforced",
                "type": "java.lang.Boolean",
                "name": "Is Enforced",
                "desc": "Is Enforced"
            },
            {
                "key": "isinfullname",
                "type": "java.lang.Boolean",
                "name": "Is In Full Name",
                "desc": "Is In Full Name"
            },
            {
                "key": "modifiedbyagent",
                "type": "ManyToOne",
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "parent",
                "type": "ManyToOne",
                "name": "Parent",
                "desc": "Parent"
            },
            {
                "key": "rankid",
                "type": "java.lang.Integer",
                "name": "Rank ID",
                "desc": "Rank Id"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "tectonicunittreedefitemid",
                "type": "java.lang.Integer",
                "name": "Tectonic Unit Tree Def Item Id",
                "desc": "Tectonic Unit Tree Def Item Id"
            },
            {
                "key": "textafter",
                "type": "java.lang.String",
                "name": "Text After",
                "desc": "Text After"
            },
            {
                "key": "textbefore",
                "type": "java.lang.String",
                "name": "Text Before",
                "desc": "Text Before"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "title",
                "type": "java.lang.String",
                "name": "Title",
                "desc": "Title"
            },
            {
                "key": "treedef",
                "type": "ManyToOne",
                "name": "Tree Def",
                "desc": "Tree Def"
            },
            {
                "key": "treeentries",
                "type": "OneToMany",
                "name": "Tree Entries",
                "desc": "Tree Entries"
            },
            {
                "key": "version",
                "type": "java.lang.Integer",
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "treatmentevent",
        "name": "Treatment Event",
        "desc": "An action that occurs to a Conservation Description.",
        "items": [
            {
                "key": "accession",
                "type": null,
                "name": "Accession",
                "desc": "Accession"
            },
            {
                "key": "authorizedby",
                "type": null,
                "name": "Authorized By",
                "desc": "Authorized By"
            },
            {
                "key": "collectionobject",
                "type": null,
                "name": "Collection Object",
                "desc": "Collection Object"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "dateboxed",
                "type": null,
                "name": "Date Boxed",
                "desc": "Date Boxed"
            },
            {
                "key": "datecleaned",
                "type": null,
                "name": "Date Cleaned",
                "desc": "Date Cleaned"
            },
            {
                "key": "datecompleted",
                "type": null,
                "name": "Date Completed",
                "desc": "Date Completed"
            },
            {
                "key": "datereceived",
                "type": null,
                "name": "Date Received",
                "desc": "Date Received"
            },
            {
                "key": "datetoisolation",
                "type": null,
                "name": "Date To Isolation",
                "desc": "Date To Isolation"
            },
            {
                "key": "datetreatmentended",
                "type": null,
                "name": "End Date",
                "desc": "End Date"
            },
            {
                "key": "datetreatmentstarted",
                "type": null,
                "name": "Start Date",
                "desc": "Start Date"
            },
            {
                "key": "division",
                "type": null,
                "name": "Division",
                "desc": "Division"
            },
            {
                "key": "fieldnumber",
                "type": null,
                "name": "Field Number",
                "desc": "Field Number"
            },
            {
                "key": "location",
                "type": null,
                "name": "Location",
                "desc": "Location"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "number3",
                "type": null,
                "name": "Number3",
                "desc": "Number3"
            },
            {
                "key": "number4",
                "type": null,
                "name": "Number4",
                "desc": "Number4"
            },
            {
                "key": "number5",
                "type": null,
                "name": "Number5",
                "desc": "Number5"
            },
            {
                "key": "performedby",
                "type": null,
                "name": "Performed By",
                "desc": "Performed By"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Text3",
                "desc": "Text3"
            },
            {
                "key": "text4",
                "type": null,
                "name": "Text4",
                "desc": "Text4"
            },
            {
                "key": "text5",
                "type": null,
                "name": "Text5",
                "desc": "Text5"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "treatmenteventattachments",
                "type": null,
                "name": "Treatment Event Attachments",
                "desc": "Treatment Event Attachments"
            },
            {
                "key": "treatmentnumber",
                "type": null,
                "name": "Treat Number",
                "desc": "Treat Number"
            },
            {
                "key": "type",
                "type": null,
                "name": "Type",
                "desc": "Type"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            },
            {
                "key": "yesno3",
                "type": null,
                "name": "Yes No3",
                "desc": "Yes No3"
            }
        ]
    },
    {
        "table": "treatmenteventattachment",
        "name": "Treatment Event Attachment",
        "desc": "Treatment Event Attachment",
        "items": [
            {
                "key": "attachment",
                "type": null,
                "name": "Attachment",
                "desc": "Attachment"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "ordinal",
                "type": null,
                "name": "Ordinal",
                "desc": "Ordinal"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "treatmentevent",
                "type": null,
                "name": "Treatment Event",
                "desc": "Treatment Event"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            }
        ]
    },
    {
        "table": "uniquenessrule",
        "name": "Uniqueness Rule",
        "desc": "Stores table names in the data model that have uniqueness rules configured for each discipline.",
        "items": [
            {
                "key": "discipline",
                "type": "ManyToOne",
                "name": "discipline",
                "desc": "Discipline"
            },
            {
                "key": "isdatabaseconstraint",
                "type": "java.lang.Boolean",
                "name": "isdatabaseconstraint",
                "desc": "Isdatabaseconstraint"
            },
            {
                "key": "modelname",
                "type": "java.lang.String",
                "name": "modelname",
                "desc": "Modelname"
            },
            {
                "key": "uniquenessruleid",
                "type": "java.lang.Integer",
                "name": "uniquenessRuleId",
                "desc": "Uniqueness rule id"
            }
        ]
    },
    {
        "table": "uniquenessrulefield",
        "name": "Uniqueness Rule Field",
        "desc": "Stores field names in the data model that have uniqueness rules configured for each discipline, linked to UniquenessRule records.",
        "items": [
            {
                "key": "fieldpath",
                "type": "text",
                "name": "fieldpath",
                "desc": "Fieldpath"
            },
            {
                "key": "isscope",
                "type": "java.lang.Boolean",
                "name": "isscope",
                "desc": "Isscope"
            },
            {
                "key": "uniquenessrule",
                "type": "ManyToOne",
                "name": "uniquenessrule",
                "desc": "Uniquenessrule"
            },
            {
                "key": "uniquenessrulefieldid",
                "type": "java.lang.Integer",
                "name": "uniquenessRuleFieldId",
                "desc": "Uniqueness rule field id"
            }
        ]
    },
    {
        "table": "userpolicy",
        "name": "User Policy",
        "desc": "Records permissions for a user within a collection.",
        "items": [
            {
                "key": "action",
                "type": "java.lang.String",
                "name": "action",
                "desc": "Action"
            },
            {
                "key": "collection",
                "type": "ManyToOne",
                "name": "collection",
                "desc": "Collection"
            },
            {
                "key": "resource",
                "type": "java.lang.String",
                "name": "resource",
                "desc": "Resource"
            },
            {
                "key": "specifyuser",
                "type": "ManyToOne",
                "name": "specifyuser",
                "desc": "Specifyuser"
            },
            {
                "key": "userpolicyid",
                "type": "java.lang.Integer",
                "name": "userPolicyId",
                "desc": "User policy id"
            }
        ]
    },
    {
        "table": "userrole",
        "name": "User Role",
        "desc": "Records roles associated with ecify users.",
        "items": [
            {
                "key": "role",
                "type": "ManyToOne",
                "name": "role",
                "desc": "Role"
            },
            {
                "key": "specifyuser",
                "type": "ManyToOne",
                "name": "specifyuser",
                "desc": "Specifyuser"
            },
            {
                "key": "userroleid",
                "type": "java.lang.Integer",
                "name": "userRoleId",
                "desc": "User role id"
            }
        ]
    },
    {
        "table": "voucherrelationship",
        "name": "Voucher Relationship",
        "desc": "Voucher Relationship",
        "items": [
            {
                "key": "collectioncode",
                "type": null,
                "name": "Collection Code",
                "desc": "Collection Code"
            },
            {
                "key": "collectionmemberid",
                "type": null,
                "name": "Collection Member Id",
                "desc": "Collection Member Id"
            },
            {
                "key": "collectionobject",
                "type": null,
                "name": "Collection Object",
                "desc": "Collection Object"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "institutioncode",
                "type": null,
                "name": "Institution Code",
                "desc": "Institution Code"
            },
            {
                "key": "integer1",
                "type": null,
                "name": "Integer1",
                "desc": "Integer1"
            },
            {
                "key": "integer2",
                "type": null,
                "name": "Integer2",
                "desc": "Integer2"
            },
            {
                "key": "integer3",
                "type": null,
                "name": "Integer3",
                "desc": "Integer3"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "number1",
                "type": null,
                "name": "Number1",
                "desc": "Number1"
            },
            {
                "key": "number2",
                "type": null,
                "name": "Number2",
                "desc": "Number2"
            },
            {
                "key": "number3",
                "type": null,
                "name": "Number3",
                "desc": "Number3"
            },
            {
                "key": "remarks",
                "type": null,
                "name": "Remarks",
                "desc": "Remarks"
            },
            {
                "key": "text1",
                "type": null,
                "name": "Text1",
                "desc": "Text1"
            },
            {
                "key": "text2",
                "type": null,
                "name": "Text2",
                "desc": "Text2"
            },
            {
                "key": "text3",
                "type": null,
                "name": "Text3",
                "desc": "Text3"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "urllink",
                "type": null,
                "name": "URL Link",
                "desc": "URL Link"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "vouchernumber",
                "type": null,
                "name": "Voucher Number",
                "desc": "Voucher Number"
            },
            {
                "key": "yesno1",
                "type": null,
                "name": "Yes No1",
                "desc": "Yes No1"
            },
            {
                "key": "yesno2",
                "type": null,
                "name": "Yes No2",
                "desc": "Yes No2"
            },
            {
                "key": "yesno3",
                "type": null,
                "name": "Yes No3",
                "desc": "Yes No3"
            }
        ]
    },
    {
        "table": "workbench",
        "name": "WorkBench",
        "desc": "A WorkBench DataSet.",
        "items": [
            {
                "key": "allpermissionlevel",
                "type": "java.lang.Integer",
                "name": "All Permission Level",
                "desc": "All Permission Level"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "dbtableid",
                "type": "java.lang.Integer",
                "name": "Database Table Id",
                "desc": "Database Table Id"
            },
            {
                "key": "exportedfromtablename",
                "type": null,
                "name": "Exported From Table Name",
                "desc": "Exported From Table Name"
            },
            {
                "key": "exportinstitutionname",
                "type": "java.lang.String",
                "name": "Export Institution Name",
                "desc": "Export Institution Name"
            },
            {
                "key": "formid",
                "type": "java.lang.Integer",
                "name": "Form Id",
                "desc": "Form Id"
            },
            {
                "key": "group",
                "type": "ManyToOne",
                "name": "Group",
                "desc": "Group"
            },
            {
                "key": "grouppermissionlevel",
                "type": "java.lang.Integer",
                "name": "Group Permission Level",
                "desc": "Group Permission Level"
            },
            {
                "key": "lockedbyusername",
                "type": null,
                "name": "Locked By User Name",
                "desc": "Locked By User Name"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "ownerpermissionlevel",
                "type": "java.lang.Integer",
                "name": "Owner Permission Level",
                "desc": "Owner Permission Level"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "specifyuser",
                "type": "ManyToOne",
                "name": "Specify User",
                "desc": "Specify User"
            },
            {
                "key": "srcfilepath",
                "type": "java.lang.String",
                "name": "Source File Path",
                "desc": "Source File Path"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "workbenchrows",
                "type": "OneToMany",
                "name": "Workbench Rows",
                "desc": "Workbench Rows"
            },
            {
                "key": "workbenchtemplate",
                "type": "ManyToOne",
                "name": "Workbench Template",
                "desc": "Workbench Template"
            }
        ]
    },
    {
        "table": "workbenchdataitem",
        "name": "WorkBench Data Item",
        "desc": "A cell of data.",
        "items": [
            {
                "key": "celldata",
                "type": "java.lang.String",
                "name": "Cell Data",
                "desc": "Cell Data"
            },
            {
                "key": "rownumber",
                "type": "java.lang.Short",
                "name": "Row Number",
                "desc": "Row Number"
            },
            {
                "key": "validationstatus",
                "type": "java.lang.Short",
                "name": "Validation Status",
                "desc": "Validation Status"
            },
            {
                "key": "workbenchrow",
                "type": "ManyToOne",
                "name": "Workbench Row",
                "desc": "Workbench Row"
            },
            {
                "key": "workbenchtemplatemappingitem",
                "type": "ManyToOne",
                "name": "Workbench Template Mapping Item",
                "desc": "Workbench Template Mapping Item"
            }
        ]
    },
    {
        "table": "workbenchrow",
        "name": "Workbench Row",
        "desc": "A row of data.",
        "items": [
            {
                "key": "biogeomancerresults",
                "type": "text",
                "name": "Bio Geomancer Results",
                "desc": "The XML returned from Bio Geomancer"
            },
            {
                "key": "cardimagedata",
                "type": "text",
                "name": "Card Image Data",
                "desc": "A single image attached to the row"
            },
            {
                "key": "cardimagefullpath",
                "type": "java.lang.String",
                "name": "Card Image Full Path",
                "desc": "The full path of the image"
            },
            {
                "key": "errorestimate",
                "type": null,
                "name": "Error Estimate",
                "desc": "Error Estimate"
            },
            {
                "key": "errorpolygon",
                "type": null,
                "name": "Error Polygon",
                "desc": "Error Polygon"
            },
            {
                "key": "lat1text",
                "type": null,
                "name": "Lat1 Text",
                "desc": "Lat1 Text"
            },
            {
                "key": "lat2text",
                "type": null,
                "name": "Lat2 Text",
                "desc": "Lat2 Text"
            },
            {
                "key": "long1text",
                "type": null,
                "name": "Long1 Text",
                "desc": "Long1 Text"
            },
            {
                "key": "long2text",
                "type": null,
                "name": "Long2 Text",
                "desc": "Long2 Text"
            },
            {
                "key": "recordid",
                "type": null,
                "name": "Record Id",
                "desc": "Record Id"
            },
            {
                "key": "rownumber",
                "type": "java.lang.Short",
                "name": "Row Number",
                "desc": "The row number"
            },
            {
                "key": "sgrstatus",
                "type": null,
                "name": "Sgr Status",
                "desc": "Sgr Status"
            },
            {
                "key": "uploadstatus",
                "type": null,
                "name": "Upload Status",
                "desc": "Upload Status"
            },
            {
                "key": "workbench",
                "type": "ManyToOne",
                "name": "Workbench",
                "desc": "The workbench this row is associated with"
            },
            {
                "key": "workbenchdataitems",
                "type": "OneToMany",
                "name": "Workbench Data Items",
                "desc": "The data items associated with this row"
            },
            {
                "key": "workbenchrowexportedrelationships",
                "type": null,
                "name": "Workbench Row Exported Relationships",
                "desc": "Workbench Row Exported Relationships"
            },
            {
                "key": "workbenchrowimages",
                "type": "OneToMany",
                "name": "Workbench Row Images",
                "desc": "The list of images associated with this row."
            }
        ]
    },
    {
        "table": "workbenchrowexportedrelationship",
        "name": "Workbench Row Exported Relationship",
        "desc": "Workbench Row Exported Relationship",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "recordid",
                "type": null,
                "name": "Record Id",
                "desc": "Record Id"
            },
            {
                "key": "relationshipname",
                "type": null,
                "name": "Relationship Name",
                "desc": "Relationship Name"
            },
            {
                "key": "sequence",
                "type": null,
                "name": "Sequence",
                "desc": "Sequence"
            },
            {
                "key": "tablename",
                "type": null,
                "name": "Table Name",
                "desc": "Table Name"
            },
            {
                "key": "timestampcreated",
                "type": null,
                "name": "Timestamp Created",
                "desc": "Timestamp Created"
            },
            {
                "key": "timestampmodified",
                "type": null,
                "name": "Timestamp Modified",
                "desc": "Timestamp Modified"
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "workbenchrow",
                "type": null,
                "name": "Workbench Row",
                "desc": "Workbench Row"
            }
        ]
    },
    {
        "table": "workbenchrowimage",
        "name": "Workbench Row Image",
        "desc": "An image associated with a row.",
        "items": [
            {
                "key": "attachtotablename",
                "type": null,
                "name": "Attach To Table Name",
                "desc": "Attach To Table Name"
            },
            {
                "key": "cardimagedata",
                "type": "text",
                "name": "Card Image Data",
                "desc": "The thumbnail data"
            },
            {
                "key": "cardimagefullpath",
                "type": "java.lang.String",
                "name": "Card Image Full Path",
                "desc": "The full path to the image"
            },
            {
                "key": "imageorder",
                "type": "java.lang.Integer",
                "name": "Image Order",
                "desc": "The position in the list of images"
            },
            {
                "key": "workbenchrow",
                "type": "ManyToOne",
                "name": "Workbench Row",
                "desc": "The row the image is attached to"
            }
        ]
    },
    {
        "table": "workbenchtemplate",
        "name": "WorkBench Template",
        "desc": "The mapping description of the WorkBench.",
        "items": [
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "name",
                "type": "java.lang.String",
                "name": "Name",
                "desc": "Name"
            },
            {
                "key": "remarks",
                "type": "text",
                "name": "Remarks",
                "desc": "Additional Comments"
            },
            {
                "key": "specifyuser",
                "type": "ManyToOne",
                "name": "Specify User",
                "desc": "Specify User"
            },
            {
                "key": "srcfilepath",
                "type": "java.lang.String",
                "name": "Source File Path",
                "desc": "Source File Path"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "workbenches",
                "type": "OneToMany",
                "name": "Workbenches",
                "desc": "Workbenches"
            },
            {
                "key": "workbenchtemplatemappingitems",
                "type": "OneToMany",
                "name": "Workbench Template Mapping Items",
                "desc": "Workbench Template Mapping Items"
            }
        ]
    },
    {
        "table": "workbenchtemplatemappingitem",
        "name": "WorkBench Template Mapping Item",
        "desc": "One column of the mapped description.",
        "items": [
            {
                "key": "caption",
                "type": "java.lang.String",
                "name": "Caption",
                "desc": "Caption"
            },
            {
                "key": "carryforward",
                "type": "java.lang.Boolean",
                "name": "Carry Forward",
                "desc": "Carry Forward"
            },
            {
                "key": "createdbyagent",
                "type": null,
                "name": "Created By Agent",
                "desc": "Created By Agent"
            },
            {
                "key": "datafieldlength",
                "type": "java.lang.Short",
                "name": "Data Field Length",
                "desc": "Data Field Length"
            },
            {
                "key": "fieldname",
                "type": "java.lang.String",
                "name": "Field Name",
                "desc": "Field Name"
            },
            {
                "key": "fieldtype",
                "type": "java.lang.Short",
                "name": "Field Type",
                "desc": "Field Type"
            },
            {
                "key": "importedcolname",
                "type": "java.lang.String",
                "name": "Imported Column Name",
                "desc": "Imported Column Name"
            },
            {
                "key": "iseditable",
                "type": null,
                "name": "Is Editable",
                "desc": "Is Editable"
            },
            {
                "key": "isexportabletocontent",
                "type": "java.lang.Boolean",
                "name": "Is Exportable To Content",
                "desc": "Is Exportable To Content"
            },
            {
                "key": "isincludedintitle",
                "type": "java.lang.Boolean",
                "name": "Is Included In Title",
                "desc": "Is Included In Title"
            },
            {
                "key": "isrequired",
                "type": "java.lang.Boolean",
                "name": "Is Required",
                "desc": "Is Required"
            },
            {
                "key": "metadata",
                "type": "java.lang.String",
                "name": "Meta Data",
                "desc": "Meta Data"
            },
            {
                "key": "modifiedbyagent",
                "type": null,
                "name": "Modified By Agent",
                "desc": "Modified By Agent"
            },
            {
                "key": "origimportcolumnindex",
                "type": "java.lang.Short",
                "name": "Original Import Column Index",
                "desc": "Original Import Column Index"
            },
            {
                "key": "srctableid",
                "type": "java.lang.Integer",
                "name": "Source Table Id",
                "desc": "Source Table Id"
            },
            {
                "key": "tablename",
                "type": "java.lang.String",
                "name": "Table Name",
                "desc": "Table Name"
            },
            {
                "key": "timestampcreated",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Created",
                "desc": "The timestamp the record was created."
            },
            {
                "key": "timestampmodified",
                "type": "java.sql.Timestamp",
                "name": "Timestamp Modified",
                "desc": "The timestamp the record was last modified."
            },
            {
                "key": "version",
                "type": null,
                "name": "Version",
                "desc": "Version"
            },
            {
                "key": "vieworder",
                "type": "java.lang.Short",
                "name": "View Order",
                "desc": "View Order"
            },
            {
                "key": "workbenchdataitems",
                "type": "OneToMany",
                "name": "Workbench Data Items",
                "desc": "Workbench Data Items"
            },
            {
                "key": "workbenchtemplate",
                "type": "ManyToOne",
                "name": "Workbench Template",
                "desc": "Workbench Template"
            },
            {
                "key": "xcoord",
                "type": "java.lang.Short",
                "name": "X Coordinate",
                "desc": "X Coordinate"
            },
            {
                "key": "ycoord",
                "type": "java.lang.Short",
                "name": "Y Coordinate",
                "desc": "Y Coordinate"
            }
        ]
    }
]

    const options = {
  includeScore: true,
  includeMatches: true,
  threshold: 0.2, // 0 is perfect match, 1.0 is match anything
  distance: 500,
  useExtendedSearch: true,
keys: [
    {name: 'name', weight: 0.70},
    {name: "key", weight: 0.10},
    {name: "desc", weight: 0.10},
    {name: 'items.name', weight: 0.10},
    {name: "items.key", weight: 0.10},
    {name: "items.desc", weight: 0.10},
]

}

const fuse = new Fuse(data, options)


const input = document.getElementById('searchInput');
const resultsList = document.getElementById('results');

  // Display all items initially
  renderResults(data.map(item => ({ item })));

  input.addEventListener('input', () => {
    const query = input.value.trim();
    const results = query ? fuse.search(query) : data.map(item => ({ item }));
    renderResults(results);
  });
  function renderResults(results) {
  resultsList.innerHTML = '';

  results.forEach(result => {
    const item = result.item;
    const li = document.createElement('li');
    const matches = result.matches || [];

    const grouped = groupMatchesByKey(matches);

    const nameHtml = grouped['name']
      ? highlightMatches(item.name, grouped['name'])
      : escapeHTML(item.name);

    const descHtml = grouped['desc']
      ? highlightMatches(item.desc, grouped['desc'])
      : escapeHTML(item.desc);

    let html = `<strong>${nameHtml}</strong> (${descHtml})`;

    // ✅ Only show matched nested items using match.refIndex
    const nestedMatches = matches.filter(m => m.key.startsWith('items.') && m.refIndex != null);

    const nestedGrouped = {};
    for (const match of nestedMatches) {
      const idx = match.refIndex;
      if (!nestedGrouped[idx]) nestedGrouped[idx] = {};
      if (!nestedGrouped[idx][match.key]) nestedGrouped[idx][match.key] = [];
      nestedGrouped[idx][match.key].push(...match.indices);
    }

    if (item.items && Object.keys(nestedGrouped).length > 0) {
      const subItemsHtml = Object.entries(nestedGrouped).map(([index, fields]) => {
        const subItem = item.items[index];
        const nameHtml = fields['items.name']
          ? highlightMatches(subItem.name, fields['items.name'])
          : escapeHTML(subItem.name);

        const descHtml = fields['items.desc']
          ? highlightMatches(subItem.desc, fields['items.desc'])
          : escapeHTML(subItem.desc);

        return `<li>${nameHtml} — ${descHtml}</li>`;
      }).join('');

      html += `<ul>${subItemsHtml}</ul>`;
    }

    li.innerHTML = html;
    resultsList.appendChild(li);
  });
}


function groupMatchesByKey(matches) {
  const result = {};
  for (const match of matches) {
    if (!result[match.key]) result[match.key] = [];
    result[match.key].push(...match.indices);
  }
  return result;
}

function filterNestedMatches(grouped, prefix) {
  const result = {};
  for (const key in grouped) {
    if (key.startsWith(prefix + '[')) {
      result[key] = grouped[key];
    }
  }
  return result;
}

function highlightMatches(text, indices) {
  let result = '';
  let lastIndex = 0;
  indices.sort((a, b) => a[0] - b[0]);

  for (const [start, end] of indices) {
    result += escapeHTML(text.slice(lastIndex, start));
    result += `<mark>${escapeHTML(text.slice(start, end + 1))}</mark>`;
    lastIndex = end + 1;
  }

  result += escapeHTML(text.slice(lastIndex));
  return result;
}

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[m]);
}