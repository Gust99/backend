class UserRepository implements IUserRepository {

    private db;

    constructor() {
        this.db = DBContext.db;
    }

    create(object: User) {
        this.db.models.User.create(object);
    }
}