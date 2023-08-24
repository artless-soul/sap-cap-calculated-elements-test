using {
  sap.avp.Books as books,
  sap.avp.Authors as authors
} from '../db/bookshop';

namespace sap.avp;

@path: 'sap/avp/AdminService'
service AdminService {

  @odata.draft.enabled
  entity Books as projection on books;

  @odata.draft.enabled
  entity Authors as projection on authors;

}
