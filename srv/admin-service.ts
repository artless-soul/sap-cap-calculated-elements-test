import cds from '@sap/cds';
import { Request, Service } from '@sap/cds/apis/services';
import { CommonService } from './lib/common-service';

export default (srv: Service) => {
  const { Books, Orders } = srv.entities;

  srv.before('UPDATE', '*', async (req: Request) => {
    await CommonService.checksBeforeUpdate(req);
  });

  srv.before('UPDATE', Books, async (req: Request) => {
    await CommonService.logBeforeBooksUpdate(req);
  });

  srv.on('UPDATE', Books, async (req: Request) => {
    await CommonService.onBooksUpdate(req);
  });

  srv.on('error', (err, _req) => {
    (err as any).message = 'Oh no! ' + (err as any).message;
  });
};
