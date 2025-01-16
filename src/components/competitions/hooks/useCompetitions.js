import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { create } from 'zustand';

// Custom
import { API_URL } from '../../../lib/variables';
import { deleteNotPaidNumbersSrv, getComptSrv, setPaidNumberSrv } from '../../../services/competition/competitionService';
import { deleteCompetitionMemberSrv } from '../../../services/competition/competitionService';

const useCompetitions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { competitionDetail, selectedNumber, set } = useCompetitionsStore.getState()
  const { id: competitionId } = competitionDetail || {}
  const [competitions, setCompetitions] = useState([]);
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
      set('competitionDetail', data);
    });
  };

  const liberarNumero = () => {
    toast.promise(
      // TODO Se libera el cupo
      deleteCompetitionMemberSrv(null, competitionId, selectedNumber)
        .then((data) => getCompetitions()),
      {
        pending: 'Liberando cupo',
        success: 'Cupo liberado 👌',
        error: 'Error al liberar el cupo 🤯'
      },
      { position: 'top-left' }
    );
  };

  const deleteNotPaidNumbers = () => {
    if (!competitionId) return
    toast('Se liberaron los números no pagados 👌');
    deleteNotPaidNumbersSrv(null, competitionId).then((data) => {
      console.log('¡Cupos liberados!');
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
    setPaidNumber
  };
};

export const useCompetitionsStore = create((set, get) => ({
  competitionDetail: null,
  selectedNumber: null,
  selectedNumbePhone: null,
  set
}))

export default useCompetitions;
