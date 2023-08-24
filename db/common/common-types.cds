namespace sap.avp;

type ID: UUID
@title: 'ID'
@Core.Computed
@odata.Type: 'Edm.String';


type OrderQuantity: Integer  @title: 'Quantity'  @mandatory;

type MessageText: String @title: 'Message';

type MessageType: String @title: 'Type';
