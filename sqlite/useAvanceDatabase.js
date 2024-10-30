import { useSQLiteContext } from "expo-sqlite";

export function useAvanceDatabase() {
  const database = useSQLiteContext();

  async function create(data) {
    const statement = await database.prepareAsync(
      "INSERT INTO avance (modulo, letra, fecha) VALUES ($modulo, $letra, $fecha)"
    );

    try {
      const result = await statement.executeAsync({
        $modulo: data.modulo,
        $letra: data.letra,
        $fecha: data.fecha,
      });

      const insertedRowId = result.lastInsertRowId;

      return { insertedRowId };
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function searchByModulo(modulo) {
    try {
      const query = "SELECT * FROM avance WHERE modulo LIKE ?";

      const response = await database.getAllAsync(query, [`%${modulo}%`]);

      return response;
    } catch (error) {
      throw error;
    }
  }

  async function update(data) {
    const statement = await database.prepareAsync(
      "UPDATE avance SET modulo = $modulo, letra = $letra, fecha = $fecha WHERE id = $id"
    );

    try {
      await statement.executeAsync({
        $id: data.id,
        $modulo: data.modulo,
        $letra: data.letra,
        $fecha: data.fecha,
      });
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function remove(id) {
    try {
      await database.execAsync("DELETE FROM avance WHERE id = ?", [id]);
    } catch (error) {
      throw error;
    }
  }

  async function show(id) {
    try {
      const query = "SELECT * FROM avance WHERE id = ?";

      const response = await database.getFirstAsync(query, [id]);

      return response;
    } catch (error) {
      throw error;
    }
  }

  // show all
  async function getAllAvance() {
    try {
      const query = "SELECT * FROM avance";

      const response = await database.getAllAsync(query);

      return response;
    } catch (error) {
      throw error;
    }
  }

  return { create, searchByModulo, update, remove, show, getAllAvance };
}
