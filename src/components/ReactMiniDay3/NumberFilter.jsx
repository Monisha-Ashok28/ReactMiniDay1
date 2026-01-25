function NumberFilter() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <h2>Even Numbers</h2>

      <ul>
        {numbers
          .filter(num => num % 2 === 0)
          .map((num, index) => (
            <li
              key={index}
              style={{
                color: "blue",
                fontWeight: "bold",
                fontSize: "18px"
              }}
            >
              {num}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default NumberFilter;
