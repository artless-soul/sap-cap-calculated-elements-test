using {
  managed,
  Currency
} from '@sap/cds/common';
using {
  sap.avp.ID,
  sap.avp.OrderQuantity,
  sap.avp.MessageType,
  sap.avp.MessageText
} from './common/common-types';

namespace sap.avp;

@cds.odata.valuelist
@cds.autoexpose
@UI.Identification: [{Value: firstName}]
entity Authors: managed {
  key ID: ID @Common.Text: {$value: firstName}
  @Common.TextArrangement: #TextOnly;

  firstName: String @title: 'First Name';
  lastName: String @title: 'Last Name';
  virtual name: String;

  books: Association to many Books
           on books.author=$self;
}

@cds.odata.valuelist
@cds.autoexpose
@UI.Identification: [{Value: name}]
entity Books: managed {
  key ID: ID
  @Common.Text: name
  @Common.TextArrangement: #TextOnly;
  name: String @title: 'Book Name';
  ![iban]: String @title: 'IBAN';
  author: Association to one Authors

          @title: 'Author'  @Common.Text: {$value: author.firstName}
          @Common.TextArrangement: #TextOnly  @assert.target;
  authorName: String = author.firstName;
  stock: Integer;
  price: Decimal;
  currency: Currency;
  publishedOn: DateTime;
}

entity Orders: managed {
  key ID: ID;
  book: Association to one Books

        @Common.Text: book.name
        @Common.TextArrangement: #TextOnly;
  qty: OrderQuantity;
  totalPrice: Decimal;
}

entity Logs: managed {
  key ID: ID;
  messageType: MessageType;
  messageText: MessageText;
}
