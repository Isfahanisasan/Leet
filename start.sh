(
if ! command -v conda &> /dev/null; then 
    echo "Conda is not installed. Please install Conda first" 
    exit 1
fi 

conda init

ENV_NAME=$(head -n 1 environment.yml | cut -d ' ' -f 2)

# delete any environments that might
echo "Deleting any environments that might exist with this name" 


if conda env list | grep -q "$ENV_NAME";
then 
    conda deactivate
    echo "Conda environment '$ENV_NAME' already exists. Deleting it ..."
    conda env remove -n "$ENV_NAME"
fi


echo "Creating the conda environment from environment.yml..."
conda env create -f environment.yml

echo "Activating Conda environment: $ENV_NAME"
conda activate "$ENV_NAME"

echo "currently active environment: $CONDA_DEFAULT_ENV"



echo "Running the python server ..." 
python python_api.py
)