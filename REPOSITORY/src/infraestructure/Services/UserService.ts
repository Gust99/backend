class UserService implements IUserSerivce {
    private repository: IUserRepository;

    constructor() {
        this.repository = new UserRepository();
    }

    create(object: User) {
        if(User.age > 21) {
            this.repository.create(object);
        }
    }
}