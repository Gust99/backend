type Usr = {
    name: string,
    isroot?: boolean,
    inSudoersGroup?: boolean,
    cat: Function
}

const sudoer = {
    name: "Gustavo",
    isroot: false,
    inSudoersGroup: true,
    cat: function() {
        console.log(`${this.name} | cat ./file | ${new Date().toLocaleString()}`);
    }
}
sudoer.cat();

const root = {
    name: "root",
    isRoot: true,
    cat: function() {
        console.log(`${this.name} | cat ./file | ${new Date().toLocaleString()}`);
    },
    rm: function(params: string) {
        console.log(`${this.name} | rm -${params} ./dir | ${new Date().toLocaleString()}`);
    }
}
root.cat();
root.rm("rf");

let sudorm = (targetUser: Usr, params: string) => {
    if(targetUser.inSudoersGroup) {
        root.rm.bind(targetUser,params)();
    } else {
        console.log(`${targetUser.name} user isn't in sudoers group.`);
    }
}

sudorm(sudoer, "r");