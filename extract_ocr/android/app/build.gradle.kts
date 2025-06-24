plugins {
    id("com.android.application")
    id("kotlin-android")
    // The Flutter Gradle Plugin must be applied after the Android and Kotlin Gradle plugins.
    id("dev.flutter.flutter-gradle-plugin")
}

android {
    namespace = "com.example.extract_ocr"
    compileSdk = 36
    ndkVersion = "27.0.12077973"

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }

    kotlinOptions {
        jvmTarget = JavaVersion.VERSION_11.toString()
    }

    defaultConfig {
        // TODO: Specify your own unique Application ID (https://developer.android.com/studio/build/application-id.html).
        applicationId = "com.example.extract_ocr"
        // You can update the following values to match your application needs.
        // For more information, see: https://flutter.dev/to/review-gradle-config.
        minSdk = 21
        targetSdk = 36
        versionCode = flutter.versionCode
        versionName = flutter.versionName
    }

    buildTypes {
        release {
            // TODO: Add your own signing config for the release build.
            // Signing with the debug keys for now, so `flutter run --release` works.
            signingConfig = signingConfigs.getByName("debug")
        }
    }

    dependencies {
        // Existing dependencies...

        // Add these for full language support (even if unused directly)
        implementation("com.google.mlkit:text-recognition-chinese:16.0.0-beta1")
        implementation("com.google.mlkit:text-recognition-devanagari:16.0.0-beta1")
        implementation("com.google.mlkit:text-recognition-japanese:16.0.0-beta1")
        implementation("com.google.mlkit:text-recognition-korean:16.0.0-beta1")
    }
}

flutter {
    source = "../.."
}
