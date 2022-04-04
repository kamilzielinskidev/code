import { Collection, Filter, FindOptions, MongoClient, ObjectId } from 'mongodb';

export const connectCollection = <A>(name: string) => {
  const dbUrl = process.env.DB_URL;
  if (!dbUrl) throw new Error("NO_DB_URL");

  const client = new MongoClient(dbUrl);

  return client
    .connect()
    .then(() => client.db("healthcheck").collection<A>(name))
    .catch(() => {
      throw new Error("NO_CONNECTION");
    });
};

export const findAll =
  <A, B extends Filter<A>>(query: B, options?: FindOptions) =>
  (collection: Collection<A>) =>
    collection.find<A>(query, options).toArray();

export const findOne =
  <A, B extends Filter<A>>(query: B) =>
  (collection: Collection<A>) =>
    collection.findOne<A>(query);

export const findOneById =
  <A, B extends Filter<A>>(id: string) =>
  (collection: Collection<A>) =>
    collection.findOne({ _id: new ObjectId(id) } as unknown as B);

export const updateOne =
  <A, B extends Filter<A>, C extends Partial<A>>(value: C, query: B) =>
  (collection: Collection<A>) =>
    collection.updateOne(query, value).then((result) => {
      if (result.modifiedCount === 0) throw new Error("NOT_MODIFIED");
    });
