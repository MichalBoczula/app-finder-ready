import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
    providedIn: "root"
})
export class FindApiInMemoryDatabase implements InMemoryDbService {
    createDb() {
        const servers = [
            {
                name: "Address Api",
                server: 1,
                url: "test test",
                availability: 1
            },
            {
                name: "Address Api",
                server: 0,
                url: "test 123",
                availability: 1
            },
            {
                name: "EContact Api",
                server: 1,
                url: "mails",
                availability: 1
            },
            {
                name: "EContact Api",
                server: 0,
                url: "e contact",
                availability: 0
            },
            {
                name: "Phones Api",
                server: 1,
                url: "haloooo",
                availability: 1
            },
            {
                name: "Phones Api",
                server: 0,
                url: "dryn dryn",
                availability: 0
            },
            {
                name: "DateExchange Api",
                server: 1,
                url: "exchange data",
                availability: 1
            },
            {
                name: "DateExchange Api",
                server: 0,
                url: "exchange data",
                availability: 1
            },
            {
                name: "CEIDG Api",
                server: 1,
                url: "ceidg data",
                availability: 1
            },
            {
                name: "CEIDG Api",
                server: 0,
                url: "ceidg data",
                availability: 0
            },
            {
                name: "Payment Api",
                server: 1,
                url: "pay money",
                availability: 1
            },
            {
                name: "Payment Api",
                server: 0,
                url: "pay money",
                availability: 1
            },
            {
                name: "Invoice Api",
                server: 1,
                url: "invoices",
                availability: 1
            },
            {
                name: "Invoice Api",
                server: 0,
                url: "invoices",
                availability: 0
            },
            {
                name: "Direct Debit Api",
                server: 1,
                url: "It's debit",
                availability: 1
            },
            {
                name: "Direct Debit Api",
                server: 0,
                url: "It's debit",
                availability: 0
            },
            {
                name: "Ekruk Api",
                server: 1,
                url: "e raven",
                availability: 1
            },
            {
                name: "Ekruk Api",
                server: 0,
                url: "e raven",
                availability: 1
            },
            {
                name: "CRM Api",
                server: 1,
                url: "crm",
                availability: 1
            },
            {
                name: "CRM Api",
                server: 0,
                url: "crm",
                availability: 0
            }
        ];

        const domains = [
            {
                name: "DTM",
                apis: ['Address', 'EContact', 'Deceased']
            },
            {
                name: "DEX",
                apis: ['DataExchange', 'Ceidg']
            },
            {
                name: "Finance",
                apis: ['DirectDebit', 'Payments']
            },
            {
                name: "EKruk",
                apis: ['Ekruk', 'abc']
            }
        ];
        return { servers, domains };
    }
}