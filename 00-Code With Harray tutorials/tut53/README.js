/* 
    TODO: Adding SignUp Component to iNotebook
    !remain - notes of that user is ~ represented in browser find out solution
    ? best way to authorized
        *   let navigate = useNavigate()
        * useEffect(() => {
            * const checkAuthToken = () => {
            *   return localStorage.getItem('token') !== null && localStorage.getItem('token').length !== 0
            * }
            * if (!checkAuthToken()) {
            *   navigate("/login");
            * }
        * }, [navigate]);
*/