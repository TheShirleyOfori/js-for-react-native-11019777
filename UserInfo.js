let userId = 1;

function createUserProfiles(originalNames, modifiedNames) {
  return originalNames.map((originalName, index) => {
    return {
      id: userId++,
      originalName: originalName,
      modifiedName: modifiedNames[index]
    };
  });
}

const originalNames = ['Cindy', 'Liquid', 'Jasmine', 'Chritian', 'David', 'Reaper'];
const modifiedNames = ['CINDY', 'liquid', 'JASMINE', 'christian', 'DAVID', 'reaper'];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
