//IPerson.ts
// Interface - blueprint for a class
export default interface IPerson {
    firstName: string
    lastName: string
    
    showDetails(): void

    //interface methods cannot have implementation
    // showInfo(): void{
    //     console.log(`}`);
    // }
}