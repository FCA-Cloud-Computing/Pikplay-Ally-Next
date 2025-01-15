import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { create } from 'zustand';

// Custom
import { API_URL } from '../../../lib/variables';
import { getComptSrv, setPaidNumberSrv } from '../../../services/competition/competitionService';
import { deleteCompetitionMemberSrv } from '../../../services/competition/competitionService';

const useCompetitions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { competitionDetail } = useCompetitionsStore.getState()
  const [competitions, setCompetitions] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [competitionMembers, setCompetitionMembers] = useState([]);
  const [isOnlyAvailableNumbers, setIsOnlyAvailableNumbers] = useState(false);

  const getCompetitions = (slug) => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      getComptSrv(null, slug).then((data) => {
        setIsLoading(false);
        if (slug) {
          setCompetitionMembers(data.competitionMembers);
        } else {
          setCompetitions(data);
        }
        resolve(data);
      });
    });
  };

  const handleCompetitionClick = (slug) => {
    getComptSrv(null, slug).then((data) => {
      setCompetitionDetail(data);
    });
  };

  const liberarNumero = () => {
    toast.promise(
      deleteCompetitionMemberSrv(1, 2).then((data) => {
        // TODO Se libera el cupo
      }),
      {
        pending: 'Liberando cupo',
        success: 'Cupo liberado 👌',
        error: 'Error al liberar el cupo 🤯'
      },
      { position: 'top-left' }
    );

    deleteCompetitionMemberSrv(1, 2).then((data) => {
      // toast('No se pudo validar el cupón 😕')
      // alert('Cupo liberado!')
      getCompetitions();
    });
  };

  const deleteNotPaidNumbers = () => {
    toast('Se liberaron los números no pagados 👌');
    deleteCompetitionMemberSrv(3, null).then((data) => {
      console.log('Cupo liberado!');
      getCompetitions();
    });
  };

  const setPaidNumber = () => {
    const { competitionDetail: { id }, selectedNumber } = useCompetitionsStore.getState()
    toast.promise(setPaidNumberSrv(null, id, selectedNumber),
      {
        pending: 'Cambiando a pagado',
        success: 'Número pagado 👌',
        error: 'Error al marcar el número como pagado 🤯'
      },
      { position: 'top-left' }
    );
  };

  useEffect(() => {
    console.log('competitionMembers updated!');
  }, [competitionMembers]);

  return {
    competitionMembers,
    competitions,
    deleteNotPaidNumbers,
    getCompetitions,
    handleCompetitionClick,
    isLoading,
    isOnlyAvailableNumbers,
    liberarNumero,
    selectedNumber,
    setCompetitionMembers,
    setIsOnlyAvailableNumbers,
    setSelectedNumber,
    setPaidNumber
  };
};

export const useCompetitionsStore = create((set, get) => ({
  competitionDetail: null,
  selectedNumber: null,
  set
}))

export default useCompetitions;
