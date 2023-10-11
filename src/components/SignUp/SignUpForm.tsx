import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Control, Controller, UseFormHandleSubmit } from 'react-hook-form';
import { InputField } from '../Login/InputField';
import { FormButton } from '../UI/FormButton';
import { FormError } from '../Login/FormError';
import { SignUpInputs } from '../../screens/SignUpScreen';

interface SignUpFormProps {
  control: Control<SignUpInputs, any>;
  handleSubmit: UseFormHandleSubmit<SignUpInputs, undefined>;
  handleSignUpPress: (data: SignUpInputs) => void;
  isPasswordVisible: boolean;
  isConfirmPasswordVisible: boolean;
  handlePasswordIconPress: () => void;
  handleConfirmPasswordIconPress: () => void;
  errorMessage: string;
  isLoading: boolean;
}

export function SignUpForm({
  control,
  handleSubmit,
  handleSignUpPress,
  isPasswordVisible,
  isConfirmPasswordVisible,
  handlePasswordIconPress,
  handleConfirmPasswordIconPress,
  errorMessage,
  isLoading,
}: SignUpFormProps) {
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputs}>
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState }) => (
            <InputField
              label="Name"
              error={fieldState.invalid}
              enabledInput={true}
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <InputField
              label="Email"
              error={fieldState.invalid}
              enabledInput={true}
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState }) => (
            <InputField
              label="Password"
              icon={
                isPasswordVisible
                  ? require('../../assets/images/opened-eye.png')
                  : require('../../assets/images/closed-eye.png')
              }
              secureTextEntry={!isPasswordVisible}
              onIconPress={handlePasswordIconPress}
              error={fieldState.invalid}
              value={field.value}
              enabledInput={true}
              onChangeText={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field, fieldState }) => (
            <InputField
              label="Confirm Password"
              icon={
                isConfirmPasswordVisible
                  ? require('../../assets/images/opened-eye.png')
                  : require('../../assets/images/closed-eye.png')
              }
              secureTextEntry={!isConfirmPasswordVisible}
              onIconPress={handleConfirmPasswordIconPress}
              error={fieldState.invalid}
              value={field.value}
              enabledInput={true}
              onChangeText={field.onChange}
            />
          )}
        />
        <FormError message={errorMessage} />
      </View>
      <FormButton
        title="Sign Up"
        onPress={handleSubmit(handleSignUpPress)}
        isLoading={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 32,
    gap: 48,
  },
  inputs: {
    marginTop: 32,
    gap: 16,
  },
});