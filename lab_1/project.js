class Project {
    constructor(projprojName, owner) {
        this.projprojName = projprojName;
        this.owner = owner;
    }
}

let Projects = [];
const addProject = (projName, owner) => {
    return Projects.push( new Project(projName, owner));
};

const patchProject = (indexArr, projName, owner) => {
    Projects[indexArr].projprojName = projName;
    Projects[indexArr].owner = owner; 
};

const deleteProject = (indexArr) => {
    if (indexArr === 0) {
        Projects.splice(indexArr, indexArr + 1);
    } else {
        Projects.splice(indexArr, indexArr);
    } 
};

addProject('IT', 'Dan');
addProject('Shit', 'Pja');
addProject('Bul', 'HUI');
patchProject(1, 'Cool', 'Zalupa');
deleteProject(2);

console.log(Projects);

module.exports = Project;