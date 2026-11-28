const StackEnum = Object.freeze({
    ROW: "row",
    COLUMN: "column"
});

const directTo = Object.freeze({
    [StackEnum.ROW]: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    [StackEnum.COLUMN]: {
        flexDirection: "column"
    }
})

export function ReturnStackEnum(StackType) {
    return directTo[StackType] != null ? directTo[StackType] : directTo[StackEnum.ROW]
}