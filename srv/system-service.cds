using {sap.avp.Logs as logs} from '../db/bookshop';

namespace sap.avp;

@path: 'sap/avp/SystemService'
service SystemService {

  entity Logs as projection on logs;

  action deleteAllLogs()
}
