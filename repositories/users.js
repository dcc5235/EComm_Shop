const fs = require('fs');

class UsersRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error('Creating a repository requires a filename');
    }

    this.filename = filename;
    try {
      fs.accessSync(this.filename);
  } catch (err){
    fs.writeFileSync(this.filename, '[]');
  }
}

  async getAll() {
    // oprn the file that this.filename is pointing to
    const contents = await fs.promises.readFile(this.filename, { encoding: 'utf8'});
    // read its contents
    console.log(contents);
    // parse the contents

    // return the parsed data
  }
}

const test = async () => {
  const repo = new UsersRepository('users.json');

  await repo.getAll();
};

test();
