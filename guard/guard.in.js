function printEmployeeInfomation(emp) {
    console.log("name" + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
printEmployeeInfomation({ name: 'cuishijie', startDate: new Date() });
