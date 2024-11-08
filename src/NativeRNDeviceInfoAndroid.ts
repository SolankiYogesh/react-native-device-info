import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export type LocationProviderInfo = {
  [key: string]: boolean;
};

export type BatteryState = 'unknown' | 'unplugged' | 'charging' | 'full';

export type PowerState = {
  batteryLevel: number;
  batteryState: BatteryState;
  lowPowerMode: boolean;
  [key: string]: string | number | boolean;
};

export interface Spec extends TurboModule {
  readonly getConstants: () => {
    appName: string;
    appVersion: string;
    brand: string;
    buildNumber: string;
    bundleId: string;
    deviceId: string;
    deviceType: string;
    isTablet: boolean;
    isLowRamDevice: boolean;
    model: string;
    systemName: string;
    systemVersion: string;
  };
  getAndroidId: () => Promise<string>;
  getAndroidIdSync: () => string;
  getApiLevel: () => Promise<number>;
  getApiLevelSync: () => number;
  getAvailableLocationProviders: () => Promise<LocationProviderInfo>;
  getAvailableLocationProvidersSync: () => LocationProviderInfo;
  getBaseOs: () => Promise<string>;
  getBaseOsSync: () => string;
  getBatteryLevel: () => Promise<number>;
  getBatteryLevelSync: () => number;
  getBootloader: () => Promise<string>;
  getBootloaderSync: () => string;
  getBuildId: () => Promise<string>;
  getBuildIdSync: () => string;
  getCarrier: () => Promise<string>;
  getCarrierSync: () => string;
  getCodename: () => Promise<string>;
  getCodenameSync: () => string;
  getDevice: () => Promise<string>;
  getDeviceName: () => Promise<string>;
  getDeviceNameSync: () => string;
  getDeviceSync: () => string;
  getDisplay: () => Promise<string>;
  getDisplaySync: () => string;
  getFingerprint: () => Promise<string>;
  getFingerprintSync: () => string;
  getFirstInstallTime: () => Promise<number>;
  getFirstInstallTimeSync: () => number;
  getFontScale: () => Promise<number>;
  getFontScaleSync: () => number;
  getFreeDiskStorage: () => Promise<number>;
  getFreeDiskStorageOld: () => Promise<number>;
  getFreeDiskStorageSync: () => number;
  getFreeDiskStorageOldSync: () => number;
  getHardware: () => Promise<string>;
  getHardwareSync: () => string;
  getHost: () => Promise<string>;
  getHostSync: () => string;
  getIncremental: () => Promise<string>;
  getIncrementalSync: () => string;
  getInstallerPackageName: () => Promise<string>;
  getInstallerPackageNameSync: () => string;
  getInstallReferrer: () => Promise<string>;
  getInstallReferrerSync: () => string;
  getInstanceId: () => Promise<string>;
  getInstanceIdSync: () => string;
  getIpAddress: () => Promise<string>;
  getIpAddressSync: () => string;
  getLastUpdateTime: () => Promise<number>;
  getLastUpdateTimeSync: () => number;
  getMacAddress: () => Promise<string>;
  getMacAddressSync: () => string;
  getMaxMemory: () => Promise<number>;
  getMaxMemorySync: () => number;
  getPreviewSdkInt: () => Promise<number>;
  getPreviewSdkIntSync: () => number;
  getProduct: () => Promise<string>;
  getProductSync: () => string;
  getSecurityPatch: () => Promise<string>;
  getSecurityPatchSync: () => string;
  getSerialNumber: () => Promise<string>;
  getSerialNumberSync: () => string;
  getSystemAvailableFeatures: () => Promise<string[]>;
  getSystemAvailableFeaturesSync: () => string[];
  getTags: () => Promise<string>;
  getTagsSync: () => string;
  getTotalDiskCapacity: () => Promise<number>;
  getTotalDiskCapacityOld: () => Promise<number>;
  getTotalDiskCapacitySync: () => number;
  getTotalDiskCapacityOldSync: () => number;
  getTotalMemory: () => Promise<number>;
  getTotalMemorySync: () => number;
  getType: () => Promise<string>;
  getTypeSync: () => string;
  getUniqueId: () => Promise<string>;
  getUniqueIdSync: () => string;
  getUsedMemory: () => Promise<number>;
  getUsedMemorySync: () => number;
  getUserAgent: () => Promise<string>;
  getUserAgentSync: () => string;
  hasGms: () => Promise<boolean>;
  hasGmsSync: () => boolean;
  hasHms: () => Promise<boolean>;
  hasHmsSync: () => boolean;
  hasSystemFeature: (feature: string) => Promise<boolean>;
  hasSystemFeatureSync: (feature: string) => boolean;
  isAirplaneMode: () => Promise<boolean>;
  isAirplaneModeSync: () => boolean;
  isBatteryCharging: () => Promise<boolean>;
  isBatteryChargingSync: () => boolean;
  isCameraPresent: () => Promise<boolean>;
  isCameraPresentSync: () => boolean;
  isEmulator: () => Promise<boolean>;
  isEmulatorSync: () => boolean;
  isHeadphonesConnected: () => Promise<boolean>;
  isHeadphonesConnectedSync: () => boolean;
  isLocationEnabled: () => Promise<boolean>;
  isLocationEnabledSync: () => boolean;
  isPinOrFingerprintSet: () => Promise<boolean>;
  isPinOrFingerprintSetSync: () => boolean;
  isWiredHeadphonesConnected: () => Promise<boolean>;
  isWiredHeadphonesConnectedSync: () => boolean;
  isBluetoothHeadphonesConnected: () => Promise<boolean>;
  isBluetoothHeadphonesConnectedSync: () => boolean;
  syncUniqueId: () => Promise<string>;
  getSupportedMediaTypeList: () => Promise<string[]>;
  getSupportedMediaTypeListSync: () => string[];
  getPowerState: () => Promise<PowerState>;
  getPowerStateSync: () => PowerState;
  getSupported32BitAbis: () => Promise<string[]>;
  getSupported32BitAbisSync: () => string[];
  getSupported64BitAbis: () => Promise<string[]>;
  getSupported64BitAbisSync: () => string[];
  getSupportedAbis: () => Promise<string[]>;
  getSupportedAbisSync: () => string[];
  getSystemManufacturer: () => Promise<string>;
  getSystemManufacturerSync: () => string;
  addListener: (eventName: string) => void;
  removeListeners: (count: number) => void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('RNDeviceInfo') as Spec;
