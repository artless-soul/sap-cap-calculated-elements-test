import cds from '@sap/cds';

export default (srv) => {
  const { Logs } = srv.entities;

  srv.on('deleteAllLogs', async () => {
    await DELETE.from(Logs);
  });
};
