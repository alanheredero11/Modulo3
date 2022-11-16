class Professional {
    

    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }

    print() {
        console.log("\nName: " + this.name +
            "\nAge: " + this.age +
            "\nWeight: " + this.weight +
            "\nHeight: " + this.height +
            "\nIsRetired: " + this.isRetired +
            "\nNationality: " + this.nationality +
            "\nOscarsNumber: " + this.oscarsNumber +
            "\nProfession: " + this.profession)
    }

}

module.exports = Professional