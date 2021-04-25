export const command = (name: string) => {
  const aCommand = {
    name,
    result: null,
    args: [],
    execute(scope: Record<string, any>) {
      aCommand.result = scope[aCommand.name](...aCommand.args);
      return aCommand.result;
    }
  };
  return aCommand;
}


/**
 * esse.result = global[esse.name](...args);
 */

/**
 *  ex:
 *   nome é '+'
 *    busca em scopo global
 *    caso não exista, joga erro de não definido
 *    caso econtre, usa comando definido, processando
 *      itens de array nos argumentos
 */
