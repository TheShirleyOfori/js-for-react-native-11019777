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

const originalNames = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown', 'Charlie Davis', 'Emily Taylor'];
const modifiedNames = ['JOHN DOE', 'jane smith', 'bob johnson', 'ALICE BROWN', 'charlie davis', 'EMILY TAYLOR'];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
