import cds from '@sap/cds';
import { Request, Service } from '@sap/cds/apis/services';

const { ['sap.avp.Logs']: Logs } = cds.model.definitions;

export class CommonService {
  public static async checksBeforeUpdate(req: Request) {
    await CommonService.logInfo('before update check...E1');
    await CommonService.logInfo('before update check...E2');

    const entity = req.target;
    const records = await SELECT.from(entity);
    await CommonService.logError('Some update checks failed!!E2');
    req.reject('Some before update error happened');
    await CommonService.logInfo('before update check...E3');
    await CommonService.logInfo('before update check...E4');
    await CommonService.logInfo('before update check...E5');
  }

  public static async logBeforeBooksUpdate(req: Request) {
    await CommonService.logInfo('before book update...1');
    await CommonService.logInfo('before book update...2');
    await CommonService.logInfo('before book update...3');
    await CommonService.logInfo('before book update...4');
    await CommonService.logInfo('before book update...5');
    await CommonService.logInfo('before book update...6');
    await CommonService.logInfo('before book update...7');
    await CommonService.logInfo('before book update...8');
    await CommonService.logInfo('before book update...9');
    await CommonService.logInfo('before book update...10');
  }

  public static async onBooksUpdate(req: Request) {
    await CommonService.logInfo('on book update...1');
    // req.reject('Some ON update error happened');
    await CommonService.logInfo('on book update...2');
  }

  public static async logInfo(messageText: String) {
    // const systemSrv = await cds.connect.to('sap.avp.SystemService');
    // const { Logs } = systemSrv.entities;
    const result = await INSERT.into(Logs).entries({ messageText: messageText, messageType: 'Info' });
  }
  public static async logError(messageText: String) {
    // const systemSrv = await cds.connect.to('sap.avp.SystemService');
    // const { Logs } = systemSrv.entities;
    const result = await INSERT.into(Logs).entries({ messageText: messageText, messageType: 'Error' });
  }
}
