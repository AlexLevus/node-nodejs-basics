const parseArgs = () => {
  const argsMap = {};

  let key = process.argv[2];
  for (let i = 2; i < process.argv.length; i++) {
    const isKey = i % 2 === 0;
    if (isKey) {
      key = process.argv[i];
    } else {
      argsMap[key] = process.argv[i];
    }
  }

  const formatArgs = Object.entries(argsMap).reduce((acc, cur) => {
    const [key, value] = cur;
    acc.push(`${key} is ${value}`);
    return acc;
  }, []);

  console.log(formatArgs.join(", "));
};

parseArgs();
