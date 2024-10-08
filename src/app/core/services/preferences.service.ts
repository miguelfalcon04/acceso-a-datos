import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {

  // Método para establecer una preferencia
  async setPreference(key: string, value: string): Promise<void> {
    await Preferences.set({
      key: key,
      value: value,
    });
  }

  // Método para obtener una preferencia
  async getPreference(key: string): Promise<string | null> {
    const { value } = await Preferences.get({ key: key });
    return value;
  }

  // Método para eliminar una preferencia
  async removePreference(key: string): Promise<void> {
    await Preferences.remove({ key: key });
  }

  // Método para limpiar todas las preferencias
  async clearPreferences(): Promise<void> {
    await Preferences.clear();
  }
}
