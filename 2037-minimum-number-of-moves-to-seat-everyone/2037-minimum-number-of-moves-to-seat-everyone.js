const minMovesToSeat = (seats, students) => {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    return seats.reduce((acc, seat, idx) => acc += Math.abs(students[idx] - seat), 0);
};