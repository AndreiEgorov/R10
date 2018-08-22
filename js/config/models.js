import Realm from "realm";

const faveSchema = {
  name: "Fave",
  primaryKey: "id",
  properties: {
    id: "string",
    favedOn: "date"
  }
};

const realm = new Realm({ schema: [faveSchema] });

export default realm;

export const addAFave = id => {
  favedOn: new Date();
  realm.create("Fave", { id, favedOn });
};

export const removeAFave = () => {
  const favToDelete = realm.objects("Fave").filtered(`id == ${id}`);
  realm.delete(favToDelete);
};

export const getFaves = () => {
  return realm.objects("Fave");
};
