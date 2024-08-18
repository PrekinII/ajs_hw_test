import { loadUser } from '../user';
import { httpGet } from '../http';
import health from "../../index";

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});


const dataList = [
  [{ name: "Маг", health: 100 }, "healthy"],
  [{ name: "Маг", health: 51 }, "healthy"],
  [{ name: "Маг", health: 50 }, "wounded"],
  [{ name: "Маг", health: 49 }, "wounded"],
  [{ name: "Маг", health: 15 }, "wounded"],
  [{ name: "Маг", health: 14 }, "critical"],
  [{ name: "Маг", health: 1 }, "critical"],
];

test.each(dataList)("testing function health", (object, expented) => {
  let result = health(object);
  expect(result).toEqual(expented);
});