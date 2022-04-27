import { Collection, Filter, FindOptions, MongoClient, ObjectId, OptionalUnlessRequiredId } from 'mongodb';

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

export const updateOneById =
  <A>(value: Partial<A>, id: string) =>
  (collection: Collection<A>) =>
    collection.updateOne({ _id: new ObjectId(id) } as unknown as Filter<A>, { $set: value }).then((result) => {
      if (result.modifiedCount === 0) throw new Error("NOT_MODIFIED");
    });

export const insertOne =
  <A, B extends OptionalUnlessRequiredId<A>>(value: B) =>
  (collection: Collection<A>) =>
    collection.insertOne(value).then((result) => result.insertedId.toString());
