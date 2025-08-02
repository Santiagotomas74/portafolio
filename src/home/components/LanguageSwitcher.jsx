import React from 'react';
import { Button, Stack, Avatar } from '@mui/material';
import { useLanguage } from '../components/context/LanguageContext';

function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <Stack direction="row" spacing={1} className="language-switcher">
      <Button
        variant={language === 'es' ? 'contained' : 'outlined'}
        onClick={() => changeLanguage('es')}
        size="small"
        startIcon={
          <Avatar
            src="https://flagcdn.com/w40/ar.png"
            alt="Es"
            sx={{ width: 30, height: 30 }}
          />
        }
        sx={{
          backgroundColor: language !== 'es' ? '#a8a5a5' : undefined,
          color: language !== 'es' ? '#000' : undefined,
          '&:hover': {
            backgroundColor: language !== 'es' ? '#f0f0f0' : undefined,
          },
        }}
      >
        AR
      </Button>

      <Button
        variant={language === 'en' ? 'contained' : 'outlined'}
        onClick={() => changeLanguage('en')}
        size="small"
        startIcon={
          <Avatar
            src="https://flagcdn.com/w40/us.png"
            alt="US"
            sx={{ width: 30, height: 30 }}
          />
        }
        sx={{
          backgroundColor: language !== 'en' ? '#a8a5a5' : undefined,
          color: language !== 'en' ? '#000' : undefined,
          '&:hover': {
            backgroundColor: language !== 'en' ? '#f0f0f0' : undefined,
          },
        }}
      >
        US
      </Button>
    </Stack>
  );
}

export default LanguageSwitcher;
